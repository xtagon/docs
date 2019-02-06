# Battlesnake 2018 to 2019 Conversion Guide

The goal of this guide is to detail the differences from the previous year so one knows what to do to convert a 2018 Battlesnake to work in the 2019 engine. Due to the nature of Battlesnake that will mean adjusting how your snake deals with the various post routes on your server.

## General Notes

At the point in time of the writing of this doc the engine does not deal with taunts, user selected head/tail shapes or a profile picture. Some if not all of this functionality should be reincorporated later in the development process. Including them in your response objects shouldn't (fingers crossed) harm anything.

## Route Request/Response Changes

## /start POST

Primary focus of the /start post route is to return a 200 code indicating your snake is ready to play. Currently the response body only will take a (optional) color key-value pair.

```
Response
{
  "color": "Hex-Color-Code-String"
}
```

## /move POST

### Request JSON

The move request JSON has be adjusted and will take the most effort to account for 2018 changes. A mock-up of the JSON request object is as follows:

```
{
  "game": {
    "id": "game-id-string"
  },
  "turn": "int",
  "board": {
    "height": "int",
    "width": "int",
    "food": [{
      "x": "int",
      "y": "int"
    }],
    "snakes": [{
      "id": "int",
      "name": "string",
      "health": "int",
      "body": [{
        "x": "int",
        "y": "int"
      }]
    }]
  },
  "you": {
    "id": "int",
    "name": "string",
    "health": "int",
    "body": [{
      "x": "int",
      "y": "int"
    }]
  }
}
```

The major changes are as follows:

- The `data` and `object` properties has been removed from all points in the JSON. For example a comparison of the body coords were as follows:

2018:

```
  "you": {
    "body": {
      "data": [{
          "object": "point",
          "x": 6,
          "y": 7
        }
      ],
      "object": "list"
    }
```

2019:

```
  "you": {
    "body": [{
      "x": 6,
      "y": 7
    }]
  }
```

In general any use of the `data` key can be removed, with its children keys moved up a level.

- Removal of the `length` property for snakes. This value can instead be accessed by finding the length of the `body` array.

- The board height and width, along with the food and snakes data have been moved under the `board` property.

- The game id is now found under the `game` property.

### Response JSON

Currently the response object only requires `move` key:value pair with `up`, `down`, `left`, `right` as acceptable responses.

```
{
  "move": "string"
}
```

## /end POST

An /end route has been added this year, it's request JSON is the same as the /move request and it does not require a response from your snake.
