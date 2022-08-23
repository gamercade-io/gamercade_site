---
sidebar_position: 5
---

# Random

The Random Api can be used to generate random numbers. Note that the pseudo random numbers generated are identical across all clients. This is a somewhat stateful Api, which has potential repercussions when used together with the [Multiplayer Api](multiplayer.md). Consider checking that document if you intend on creating diverging game states with random number generation.

```rust title="Random Api Function List"
// Sets the seed to the given input
fn set_seed(seed: i32);

// Generates a random integer from the minimum up to (but not including) the maximum value
// For example, random_int_range(0, 5) could return 0, 1, 2, 3, 4. It cannot return 5.
fn random_int_range(min: i32, max: i32) -> i32;

// Generates a random float from 0.0 to 1.0.
fn random_float() -> f32;

// Generates a random float from the minimum to maximum value.
fn random_float_range(min: f32, max: f32) -> f32;
```
