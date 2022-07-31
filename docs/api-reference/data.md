---
sidebar_position: 1
---

# Data

The Data Api contains a collection of functions for fetching data related to the game rom itself.

```rust title="Data Api Function List"
// Returns the height of the game, in pixels.
fn height() -> i32;

// Returns the width of the game, in pixels.
fn width() -> i32;

// Returns the fps of the game, in frames per second.
fn fps() -> i32;

// Returns the frame time of the game, calculated by 1 divided by fps. Also known
// as delta time.
fn frame_time() -> f32;

// Returns the number of valid sprite sheets.
fn sprite_sheet_count() -> i32;

// Returns the number of valid palettes.
fn palette_count() -> i32;

// Returns the height of the requested sprite sheet. If an invalid sprite sheet index is passed in,
// the function will return -1.
fn sprite_height(sheet_index: i32) -> i32;

// Returns the width of the requested sprite sheet. If an invalid sprite sheet index is passed in,
// the function will return -1.
fn sprite_width(sheet_index: i32) -> i32;

// Returns the number of sprites within the sprite sheet. If an invalid sprite sheet index is passed in,
// the function will return -1.
fn sprite_count(sheet_index: i32) -> i32;
```
