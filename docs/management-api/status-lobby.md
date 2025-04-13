# API Endpoint: `/status-lobby`

## Description

The `/status-lobby/{referenceId}` endpoint is used to retrieve the status of a specific Dota 2 lobby. By providing a unique `referenceId`, this endpoint allows users to check the current state of the lobby, including its configuration and player details.

## HTTP Method

- GET

## Path Parameter

| Parameter   | Type   | Required | Description                              |
|-------------|--------|----------|------------------------------------------|
| referenceId | string | Yes      | The unique identifier for the lobby to retrieve. |

## Response

Success Response

- **Status Code**: `200 OK`   
Indicates that the lobby status was successfully retrieved.

- **Body**:   
A JSON object containing the lobby's details and current status.

```json
{
  "reference_id": "unique-id-123",
  "lobby_name": "My Custom Lobby",
  "game_mode": "1",
  "region": "10",
  "visibility": "0",
  "players": [
    { "steam_id": "123456789", "team": "radiant" },
    { "steam_id": "987654321", "team": "dire" }
  ],
  "status": "active"
}
```

Error Responses

- **Status Code**: `404 Not Found`   
Indicates that no lobby was found with the provided referenceId.

```json
{
  "error": "Lobby not found"
}
```

- **Status Code**: `500 Internal Server Error`   
Indicates that an error occurred while retrieving the lobby status.
```json
{
  "error": "Failed to retrieve lobby status"
}
```

## Example Request

cURL Command

```curl
curl -X GET http://localhost:3000/status-lobby/unique-id-123
```

Response
```json
{
  "reference_id": "unique-id-123",
  "lobby_name": "My Custom Lobby",
  "game_mode": "1",
  "region": "10",
  "visibility": "0",
  "players": [
    { "steam_id": "123456789", "team": "radiant" },
    { "steam_id": "987654321", "team": "dire" }
  ],
  "status": "active"
}
```

## Purpose

This endpoint is used to:

1. Retrieve the current status of a specific lobby.
2. Monitor the lobby's configuration and player assignments.
3. Ensure the lobby is active and functioning as expected.

## Implementation

The `/status-lobby/{referenceId}` endpoint is implemented in the `runServer` function:

```go
r.HandleFunc("/status-lobby/{referenceId}", func(w http.ResponseWriter, r *http.Request) {
    referenceID := mux.Vars(r)["referenceId"]
    handlers.StatusLobby(w, r, configs, referenceID, lobbyManager)
}).Methods(http.MethodGet)
```

The logic for processing the request and retrieving the lobby status is handled by the `handlers.StatusLobby` function.