---
sidebar_position: 1
---

# Data

TODO: Write the intro

## Function List

```rust title="The height of the game, in pixels."
fn height(&self) -> i32;
```
```rust title="The width of the game, in pixels."
fn width(&self) -> i32;
```
```rust title="The fps of the game, in frames per second."
fn fps(&self) -> i32;
```
```rust title="The frame time of the game, calculated by 1 divided by fps"
fn frame_time(&self) -> f32;
```
```rust title="The number of valid sprite sheets."
fn sprite_sheet_count(&self) -> i32;
```
```rust title="The number of valid palettes."
fn palette_count(&self) -> i32;
```
```rust title="The height of the requested sprite sheet."
fn sprite_height(&self, sheet_index: i32) -> i32;
```
```rust title="The width of the requested sprite sheet."
fn sprite_width(&self, sheet_index: i32) -> i32;
```
```rust title="The number of sprites within the sprite sheet"
fn sprite_count(&self, sheet_index: i32) -> i32;
```
