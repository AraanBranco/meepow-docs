# AWS

## Deploying a Meepow Bot on AWS ECS

This guide explains how to deploy a **Meepow Bot** on AWS ECS (Elastic Container Service). The bot will be managed as a Fargate task, allowing for scalable and serverless deployment. Before starting, ensure you have an AWS account and the necessary permissions to create ECS resources.

### Prerequisites

1. **AWS CLI Installed**   
Ensure the AWS CLI is installed and configured with your credentials:

```shell
aws configure
```

2. **ECS Cluster**   
Create an ECS cluster to host the bot tasks:

```shell
aws ecs create-cluster --cluster-name meepow-cluster
```

3. **Task Definition**   
Define a task in ECS with the required container settings. Use the Meepow Docker image and configure the environment variables.

4. **Network Configuration**

Ensure you have:
- Two subnets in the same VPC.
- A security group allowing outbound traffic.

5. **Redis Server**

A Redis instance must be accessible to the bot for storing and retrieving lobby data.

### Configuration

Update the `config.yaml` file with your AWS settings:

```yaml
providers:
  aws:
    region: "us-east-1"
    clusterName: "meepow-cluster"
    taskDefinition: "meepow-task"
    subnet1: "subnet-12345"
    subnet2: "subnet-67890"
    securityGroup: "sg-12345"
```

### Steps to Deploy the Bot

1. Build the Docker Image

Build the Docker image for the bot service:

```shell
make docker/build
```

Push the image to an AWS Elastic Container Registry (ECR) or any other container registry.

2. Register the Task Definition

Create a task definition in ECS using the AWS CLI or the AWS Management Console. Example JSON for the task definition:
```json
{
  "family": "meepow-task",
  "networkMode": "awsvpc",
  "containerDefinitions": [
    {
      "name": "meepow-bot",
      "image": "<your-docker-image-uri>",
      "memory": 512,
      "cpu": 256,
      "essential": true,
      "environment": [
        { "name": "MEEPOW_REFERENCE_ID", "value": "12345" },
        { "name": "MEEPOW_ADAPTERS_REDIS_URI", "value": "redis://<redis-uri>:6379" },
        { "name": "MEEPOW_BOT_USERNAME", "value": "<bot-username>" },
        { "name": "MEEPOW_BOT_PASSWORD", "value": "<bot-password>" }
      ]
    }
  ],
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "<ecs-task-execution-role-arn>"
}
```

Register the task definition:

```shell
aws ecs register-task-definition --cli-input-json file://task-definition.json
```

3. Launch the Bot Task
Run the bot as a Fargate task:

```shell
aws ecs run-task \
  --cluster meepow-cluster \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-12345,subnet-67890],securityGroups=[sg-12345],assignPublicIp=ENABLED}" \
  --task-definition meepow-task
```

### Monitoring the Bot

1. **ECS Console**   
Go to the ECS console to monitor the task's status and logs.

2. **CloudWatch Logs**   
Ensure the task is configured to send logs to CloudWatch for debugging and monitoring.

### Notes
- The bot requires the `MEEPOW_REFERENCE_ID` environment variable to identify the lobby it will manage.
- Ensure the Redis server is accessible from the ECS task.
- Use IAM roles to securely provide AWS permissions to the ECS task.

By following these steps, you can deploy and manage a **Meepow Bot** on AWS ECS, enabling automated Dota 2 lobby management in a scalable and serverless environment.