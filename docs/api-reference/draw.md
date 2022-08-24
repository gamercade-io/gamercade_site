---
sidebar_position: 4
---

# Draw

Draw Api works very closely with the [Graphics Parameters Api](graphics-parameters.md). Any unused parameters will be safely ignored. If any of these functions provide invalid values, they will do nothing.

```rust title="Primitive Shapes Drawing"
// Primitive drawing depends on the following Graphics Parameter fields:
// - Palette Index
// - Color Index

// Clears the screen set to the desired color.
fn clear_screen(graphics_parameters: i32);

// Sets the target pixel to the desired color.
fn set_pixel(graphics_parameters: i32, x: i32, y: i32);

// Draws a circle with the given radius at to the target location, in the 
// desired color.
fn circle(graphics_parameters: i32, x: i32, y: i32, radius: i32);

// Draws a rect with the top left at X, Y, and bottom right at width, height, in
// the desired color.
fn rect(graphics_parameters: i32, x: i32, y: i32, width: i32, height: i32);

// Draws a filled rect with the top left at X, Y, and bottom right at width, height, in
// the desired color.
fn rect_filled(graphics_parameters: i32, x: i32, y: i32, width: i32, height: i32);

// Draws a line from (x0, y0) to (x1, y1) in the desired color.
fn line(graphics_parameters: i32, x0: i32, y0: i32, x1: i32, y1: i32);

```

```rust title="Sprite Drawing"
// Sprite drawing depends on the following Graphics Parameter fields:
// - Palette Index
// - Sprite Sheet Index
// - Sprite Index

// Transparency mask is a 64-bit but field. As each palette has 64 colors, each bit
// determines if that color should be transparent (1 or true) or if it should be opaque (0 or false).
fn sprite(graphics_parameters: i32, transparency_mask: i64, x: i32, y: i32);

// For example, if your palette has the first color (index 0) as the transparency color, 
// your transparency mask would be:
// 1 << 0

// Alternatively, if your palette had the last color (index 63) as transparency:
// 1 << 63

// You can combine multiple indicies to represent complex transparencies, such as:
// 1 | (1 << 4) | (1 << 8)
// Which results in 0b10001001, or indicies 0, 4, and 8 all being transparent.

```