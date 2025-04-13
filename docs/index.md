---
sidebar_position: 1
---

# Getting Started

Welcome to **Meepow**, the ultimate tool for managing multiple Dota 2 lobbies with ease. Follow this guide to get started quickly.



### Prerequisites

Before you begin, ensure you have the following installed:

- **Go** (version 1.23.4 or higher)
- **Docker** and **Docker Compose**
- **Redis** (running locally or accessible remotely)

### Installation

1. Clone the Repository

Clone the Meepow repository to your local machine:
```git
git clone https://github.com/AraanBranco/meepow.git
cd meepow
```

2. Install Dependencies

Download the required Go modules:
```shell
go mod download
```

3. Configure the Application

Edit the `config.yaml` file to set up your environment variables, such as Redis URI, cloud provider credentials, and bot settings.

### Running the Application

1. Start the Management API

The Management API is responsible for handling lobby creation and status requests.

```shell
make run/management-api
```

The API will be available at http://localhost:3000.

2. Start the Bot Service

The bot service manages the Dota 2 bots and interacts with the lobbies.

```shell
make run/bot
```

### Using the API

Create a New Lobby

Send a POST request to `/new-lobby` with the required parameters:

```json
{
  "reference_id": "unique-id",
  "lobby_name": "My Lobby",
  "lobby_password": "password123",
  "game_mode": "1",
  "region": "10",
  "visibility": "0",
  "players": [
    { "steam_id": "123456789", "team": "radiant" },
    { "steam_id": "987654321", "team": "dire" }
  ]
}
```

Check Lobby Status

Send a GET request to `/status-lobby/{reference_id}` to retrieve the lobby's current status.

### Running with Docker

You can also deploy Meepow using Docker for a seamless setup:


1. Build the Docker Image
```shell
make docker/build
```

2. Run the Application

Use docker-compose to start the services:
```shell
docker-compose up
```

### Environment Variables
You can pass additional environment variables to Docker using the MEEPOW_ prefix. For example:

### Contributing

We welcome contributions! Check out the Contributing Guide for more details.

### License

This project is licensed under the MIT License. See the LICENSE file for more information.