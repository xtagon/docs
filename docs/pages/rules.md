---
title: Battlesnake Game Rules
subtitle: Updated September 2019
permalink: /rules
layout: card
---

## Ways Your Snake Can Die

Snakes can perish in the following ways:

- **Wall collision.** Your snake ran into a wall, try turning.
- **Self collision.** Your snake ran into itself, try turning less.
- **Snake collision.** Your snake ran into another snake, try avoiding others.
- **Head on collision.** Your snake collided head on with another snake.
  - In this case, only the smaller snake dies. If both snakes are of equal size, both die.
- **Starvation.** Your snake ran out of health, try finding food.

---

## Snake Health and Food

Your snake must eat food reguarly in order to stay alive. Your snake begins the game with 100 Health, and each turn its health will decrease by 1. If it reaches zero, your snake will die of starvation.

The only way to replenish your health is to eat food, which spawns throughout the board during the game. Moving your snake over a piece of food will consume it and reset your health to 100.

Consuming food will also increase the length of your snake by 1 square.

---

## Starting Positions

TODO

---

## Food Spawn and Placement Rules

* Games always begin with one piece of food per snake.
* Food will spawn in random unoccupied squares.
* At most one piece of food will spawn on any turn.
* There's a calculated chance that food will spawn after any turn. This chance increases each turn and resets when food is spawned.

---

## Technical Limits and Rules

TODO

---

## Detailed Turn Mechanics

This section details how the engine executes a turn, including the order and priority of operations. The Battlesnake Game Engine is open source, and implementation details can be viewed at [github.com/battlesnakeio/engine](https://github.com/battlesnakeio/engine).

On every turn of the game:

1. Each snake, in parallel, is sent a /move request with the same board, food and snake information.
  - Each snake is required to respond with a valid response (see [Official Snake API](/snake-api)).
  - Snakes failing to respond within the timeout period will continue to move in the same direction as their last move. If this is the first move and there is no response from the snake, the direction will default to up.
2. After all snakes have responded with their moves the engine will, for each snake:
   - Move each snake by adding a new body part at the start of the body array in the direction moved.
   - Reduce health by 1.
   - Remove the final body segment.
   - Check if the snake head is on top of food. If yes:
      - Remove food and set snake health to 100.
      - Duplicate the last segment in the body array (this will cause the snake to grow on the following turn).
   - Check if snake has died (see Snake Deaths). If yes:
      - Mark snake as dead.
   - Check if food needs to be spawned (see Food Spawn Rules). If yes:
      - Spawn food.
3. Send any dead snakes the /end request (ignore response).
4. If there are two or more snakes alive, go back to step 1 and repeat.
5. The final snake alive has won! Send it the /end request.
