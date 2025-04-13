---
sidebar_position: 2
---

# Configuration File

The **Meepow** project uses a YAML configuration file to manage environment variables and parameters required for the application to run. Below is a detailed explanation of the settings available in the `config.yaml` file.

### Configuration File Structure

```yaml
api:
  port: 3000
  gracefulShutdownTimeout: 30s

adapters:
  redis:
    uri: "localhost:6379"

lobby:
  maxPlayers: 1 # use 10 in production

bot:
  allowCheats: true
  # username: "" # Used for testing
  # password: "" # Used for testing

providers:
  digitalOcean:
    apiKey: ""
    region: ""

  aws:
    region: ""
    clusterName: ""
    taskDefinition: ""
    subnet1: ""
    subnet2: ""
    securityGroup: ""
```

### Configuration Details

#### API

Settings related to the management API.

- **port**: The port where the API will run.
Example: 3000

- **gracefulShutdownTimeout**: Timeout for graceful API shutdown.   
Example: 30s

#### Adapters

Settings for external services used by the application.

- **redis.uri**: URI of the Redis server.     
Example: localhost:6379

#### Lobby

Settings related to the lobbies created.

- **maxPlayers**: Maximum number of players allowed in a lobby.    
Example: 10 (in production)

#### Bot

Settings for the bots that manage the lobbies.

- **allowCheats**: Defines whether cheats are enabled in the lobby.   
Example: true

- **username** and **password**: Bot credentials for Steam authentication.   
Example: `username: "bot_user"`, `password: "bot_password"`

#### Providers

Settings for cloud providers used to scale the bots.

#### AWS

- **region**: AWS region where resources will be provisioned.   
Example: `"us-east-1"`

- **clusterName**: ECS cluster name used to run containers.    
Example: `"meepow-cluster"`

- **taskDefinition**: ECS task definition for running the bots.   
Example: `"meepow-task"`

- **subnet1** and **subnet2**: Subnets used for Fargate.   
Example: `"subnet-12345"`

- **securityGroup**: Security group associated with the instances.   
Example: `"sg-12345"`

### Customization

To customize the settings, edit the `config.yaml` file before starting the application. Alternatively, you can override the settings using environment variables with the MEEPOW_ prefix. For example:

```shell
export MEEPOW_API_PORT=8080
export MEEPOW_ADAPTERS_REDIS_URI="redis://custom-redis:6379"
```

### Production Configuration

Make sure to adjust the following parameters for production:

1. **lobby.maxPlayers**: Set to 10 to support full matches.
2. **bot.username** and **bot.password**: Configure the bot credentials.
3. **providers.aws** or **providers.digitalOcean**: Set up the cloud provider details.
