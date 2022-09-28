---
sidebar_position: 7
---

# Input

Each input function requires a player_id. Note that this is the player_id as determined by the console, *not* the local or networked player.

Due to WASM limitations, the return type of each function is either treated as a bool value (0 for false, or 1 for true) inside of a i32, or a f32 value for analog style controls. See each section for more details.

A `-1` or `NaN` value indicates that the passed in player id is invalid.

### Button Inputs

Each button function has three variants, `pressed`, `released`, and `held`.

`pressed` returns 1 if the button was just pressed this frame, otherwise 0.

`released` returns 1 if the button was just released this frame, otherwize 0.

`held` returns 1 if the button is held down, or 0 if the button is not pressed.

If passed in player id is invalid, these functions will return a value of `-1`.


```rust title="Binary Input Api"
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

If passed in player id is invalid, these functions will return a NaN value.

```rust title="Analog Input Api"
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

### Mouse Controls

For dealing with all mouse-related things. Note that it's possible that multiple players share the same mouse, such as in the instance where two players are playing on the same machine. For example, if player_id `1` and `2` are both on the same machine, then each of these mouse api functions will return the same value, regardless of if id `1` or `2` were passed in.

```rust title="Mouse Input Api"
// Mouse button states
fn mouse_left_pressed(player_id: i32) -> i32;
fn mouse_left_released(player_id: i32) -> i32;
fn mouse_left_held(player_id: i32) -> i32;
fn mouse_right_pressed(player_id: i32) -> i32;
fn mouse_right_released(player_id: i32) -> i32;
fn mouse_right_held(player_id: i32) -> i32;
fn mouse_middle_pressed(player_id: i32) -> i32;
fn mouse_middle_released(player_id: i32) -> i32;
fn mouse_middle_held(player_id: i32) -> i32;

// Mouse coordinates in pixels
fn mouse_x_pos(player_id: i32) -> i32;
fn mouse_y_pos(player_id: i32) -> i32;

// Mouse deltas (movement since last frame)
fn mouse_x_delta(player_id: i32) -> i32;
fn mouse_y_delta(player_id: i32) -> i32;

// Returns 0 or 1 if the mouse wheel moved in the direction
fn mouse_wheel_up(player_id: i32) -> i32;
fn mouse_wheel_down(player_id: i32) -> i32;
fn mouse_wheel_left(player_id: i32) -> i32;
fn mouse_wheel_right(player_id: i32) -> i32;

// Takes a value of 0 (false) or 1 (true) to lock and hide the
// mouse on the current console instance
fn lock_mouse(locked: i32);
```

### (Advanced) Raw Input

TODO: Explain Raw Input Spec

```rust
// Returns the raw input state as seen directly by the console.
fn raw_input_state(played_id: i32) -> i64;

// Returns the raw mouse state as seen directly by the console.
fn raw_mouse_state(player_id: i32) -> i64;
```