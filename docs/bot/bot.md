# Bot Service

The **Meepow Bot Service** is responsible for managing Dota 2 lobbies by interacting with the Steam and Dota 2 APIs. It automates tasks such as creating lobbies, assigning players, and monitoring lobby status. The bot service can be run locally or deployed using Docker for scalability and ease of use.

## Features

- **Lobby Management**: Automates the creation and configuration of Dota 2 lobbies.
- **Player Assignment**: Invites players to the lobby and assigns them to teams.
- **Integration with Redis**: Stores and retrieves lobby data for seamless operation.
- **Scalability**: Can be deployed on multiple cloud platforms using Docker.

## Running the Bot Locally

Prerequisites:

1. Ensure Redis is running and accessible.
2. Configure the `config.yaml` file with the necessary settings, including Redis URI and bot credentials.

Steps to Run

1. **Build the Project**   
Build the Meepow binary:

```shell
make build
```

2. **Start the Bot**   
Run the bot service with the following command:

```go
go run main.go start bot -l development
```

Alternatively, use the Makefile target:

```shell
make run/bot
```

3. **Environment Variables**   
Pass the `MEEPOW_REFERENCE_ID` environment variable to specify the lobby ID the bot should manage:

```go
MEEPOW_REFERENCE_ID=12345 go run main.go start bot -l development
```

## Running the Bot with Docker

Prerequisites

1. Install Docker on your machine.
2. Ensure Redis is running and accessible.
3. Configure the `config.yaml` file with the necessary settings.

Steps to Run

1. **Build the Docker Image**   
Build the Docker image for the bot service:

```shell
make docker/build
```

2. **Run the Docker Container**   
Start the bot service in a Docker container:
```shell
docker run -e MEEPOW_REFERENCE_ID=12345 -e MEEPOW_ADAPTERS_REDIS_URI="redis://localhost:6379" meepow
```
Replace `12345` with the desired lobby ID and ensure the Redis URI matches your setup.

3. **Additional Environment Variables**   
You can pass additional environment variables to the container using the `MEEPOW_` prefix. For example:

```shell
docker run -e MEEPOW_REFERENCE_ID=12345 -e MEEPOW_BOT_USERNAME="bot_user" -e MEEPOW_BOT_PASSWORD="bot_password" meepow
```

## Configuration

The bot service relies on the `config.yaml` file for its configuration. Key settings include:

- **Redis URI**: `adapters.redis.uri`
- **Bot Credentials**: `bot.username` and `bot.password`
- **Lobby Settings**: `lobby.maxPlayers`

# Logs and Monitoring

The bot service uses the **Zap Logger** for structured logging. Logs include detailed information about lobby creation, player assignments, and errors. You can configure the log level using the `-l` flag (`development` or `production`).

## Example Workflow

1. Send a request to the /new-lobby API endpoint to create a new lobby.
2. The bot service will automatically start and manage the lobby using the provided reference_id.
3. Monitor the bot's logs to track its progress and ensure the lobby is running as expected.

By running the **Meepow Bot Service**, you can automate and streamline the management of Dota 2 lobbies, making it easier to host tournaments and custom games.