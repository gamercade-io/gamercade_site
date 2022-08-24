---
sidebar_position: 3
---

# Graphics Parameters

Many functions from the [Draw Api](draw.md) require one parameter labeled graphics_parameter, which is actually passed in as an i32. TODO: Continue This

```rust title="Graphics Parameter Api Function List"
// Generates a palette index parameter.
fn palette_index(palette_index: i32) -> i32;

// Generates a sprite sheet index parameter.
fn sprite_sheet_index(sprite_sheet_index: i32) -> i32;

// Generate a sprite index parameter.
fn sprite_index(sprite_index: i32) -> i32;

// Generate a color index parameter.
fn color_index(color_index: i32) -> i32;

// Generate a flip x-axis parameter.
fn flip_x(flip_x: i32) -> i32;

// Generate a flip y-axis parameter.
fn flip_y(flip_y: i32) -> i32;

// Generates a complete, ready to use, graphics parameter.
fn graphics_parameters(
    palette_index: i32,
    sprite_sheet_index: i32,
    sprite_index: i32,
    color_index: i32,
    flip_x: i32,
    flip_y: i32,
) -> i32;
```

## Graphics Parameters Tips and Tricks

TODO: Explain how to use binary OR to combine things

## (Advanced) Graphics Parameters Spec

TODO: Explain how the bits work