---
sidebar_position: 4
---

# Input

Each input function requires a player_id. Note that this is the player_id as determined by the console, *not* the local or networked player. 

Due to WASM limitations, the return type of each function is either treated as a bool value (0 for false, or 1 for true) inside of a i32, or a f32 value for analog style controls. See each section for more details.

### Button Inputs

Each button function has three variants, `pressed`, `released`, and `held`.

`pressed` returns 1 if the button was just pressed this frame, otherwise 0.

`released` returns 1 if the button was just released this frame, otherwize 0.

`held` returns 1 if the button is held down, or 0 if the button is not pressed.

```rust
// Face Buttons
fn button_a_pressed(player_id: i32) -> i32;
fn button_a_released(player_id: i32) -> i32;
fn button_a_held(player_id: i32) -> i32;

fn button_b_pressed(player_id: i32) -> i32;
fn button_b_released(player_id: i32) -> i32;
fn button_b_held(player_id: i32) -> i32;

fn button_c_pressed(player_id: i32) -> i32;
fn button_c_released(player_id: i32) -> i32;
fn button_c_held(player_id: i32) -> i32;

fn button_d_pressed(player_id: i32) -> i32;
fn button_d_released(player_id: i32) -> i32;
fn button_d_held(player_id: i32) -> i32;

// Start/Select Buttons
fn button_start_pressed(player_id: i32) -> i32;
fn button_start_released(player_id: i32) -> i32;
fn button_start_held(player_id: i32) -> i32;

fn button_select_pressed(player_id: i32) -> i32;
fn button_select_released(player_id: i32) -> i32;
fn button_select_held(player_id: i32) -> i32;

// Digital Shoulder Buttons
fn button_left_shoulder_pressed(player_id: i32) -> i32;
fn button_left_shoulder_released(player_id: i32) -> i32;
fn button_left_shoulder_held(player_id: i32) -> i32;

fn button_right_shoulder_pressed(player_id: i32) -> i32;
fn button_right_shoulder_released(player_id: i32) -> i32;
fn button_right_shoulder_held(player_id: i32) -> i32;

// Analog or Digital Triggers
fn button_left_trigger_pressed(player_id: i32) -> i32;
fn button_left_trigger_released(player_id: i32) -> i32;
fn button_left_trigger_held(player_id: i32) -> i32;

fn button_right_trigger_pressed(player_id: i32) -> i32;
fn button_right_trigger_released(player_id: i32) -> i32;
fn button_right_trigger_held(player_id: i32) -> i32;

// Directional Pad
fn button_up_pressed(player_id: i32) -> i32;
fn button_up_released(player_id: i32) -> i32;
fn button_up_held(player_id: i32) -> i32;

fn button_down_pressed(player_id: i32) -> i32;
fn button_down_released(player_id: i32) -> i32;
fn button_down_held(player_id: i32) -> i32;

fn button_left_pressed(player_id: i32) -> i32;
fn button_left_released(player_id: i32) -> i32;
fn button_left_held(player_id: i32) -> i32;

fn button_right_pressed(player_id: i32) -> i32;
fn button_right_released(player_id: i32) -> i32;
fn button_right_held(player_id: i32) -> i32;

// Clickable Analog Stick Buttons
fn button_left_stick_pressed(player_id: i32) -> i32;
fn button_left_stick_released(player_id: i32) -> i32;
fn button_left_stick_held(player_id: i32) -> i32;

fn button_right_stick_pressed(player_id: i32) -> i32;
fn button_right_stick_released(player_id: i32) -> i32;
fn button_right_stick_held(player_id: i32) -> i32;
```

### Analog Controls

These are not yet implemented, but are coming soon.

```rust
// Left Stick
fn analog_left_x(player_id: i32) -> f32;
fn analog_left_y(player_id: i32) -> f32;

// Right Stick
fn analog_right_x(player_id: i32) -> f32;
fn analog_right_y(player_id: i32) -> f32;

// Analog Triggers
fn trigger_left(player_id: i32) -> f32;
fn trigger_right(player_id: i32) -> f32;
```

### (Advanced) Raw Input

TODO: Write how to use this

```rust
// Returns the raw input state as seen directly by the console.
fn raw_input_state(played_id: i32) -> i64;
```