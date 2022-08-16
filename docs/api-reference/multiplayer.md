---
sidebar_position: 7
---

# Multiplayer

The Multiplayer Api provides useful functions for getting data about the active game session. Note that developers must be extremely careful not to cause any diverging logic on clients. The simulation MUST be completey identical across all clients or else the gameplay will desync.

It's generally safe to call these functions when drawing.

For Example:
- Scrolling the camera to only show the local player.
- A split screen game.
- A card game, you can only see your cards. Oponents' cards are face down.

When using these dangerous functions inside of the update loop, extreme care must be takenm especially when calling other functions which have side effects, such as [Random Api](random.md). See the below section for details.

```rust title="Multiplayer Api Function List"
// Safe
// Returns the number of players (or controllers).
fn num_players() -> i32;

// Danger!
// Returns 1 if the player_id is a local player.
// Returns 0 if the player_id is not local.
// Returns -1 if the player_id is invalid.
fn is_local_player(player_id: i32) -> i32;

// Danger!
// Returns 1 if the player_id is a remote player.
// Returns 0 if the player_id is not remote.
// Returns -1 if the player_id is invalid.
fn is_remote_player(player_id: i32) -> i32;
```

### How to use Danger! functions together with Random Api

Because the Random Api uses a single, shared random number generator, it's very easy to introduce some desynchronized game state. In order to keep this working correctly, we recommend following these guidelines.

1. Before entering a potentially divergent section, get two new random numbers from a very large range
- Save one number as our "recovery seed"
- Save the other number as our "diverging state seed".
1. Seed the RNG using the new seed.
1. Do whatever logic which is unique to this player or section.
1. When finished, set the seed back to our "recovery seed" generated in the first step.