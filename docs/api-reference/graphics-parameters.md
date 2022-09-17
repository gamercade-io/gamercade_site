---
sidebar_position: 3
---

# Graphics Parameters

Many functions from the [Draw Api](draw.md) require one parameter labeled graphics_parameter, which is actually passed in as an i32. While the value may just be a simple i32, the Gamercade Api uses the each of the 32 bits in this parameter to produce the final result.

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

Inside of a single Graphics Parameter includes the following values:
- **Palette Index** (0-255)
- **Sprite Sheet** (0-255)
- **Sprite Index** (0-255)
- **Color Index** (0-63)
- **Flip X** 0 for false, or 1 for true
- **Flip Y** 0 for false, or 1 for true

This means that you are able to combine different values into a single value by using [bitwise operators](https://en.wikipedia.org/wiki/Bitwise_operation).

### Using and Combining Graphics Parameters

Let's imagine a scenario in where we want to draw a circle using `color 15` from `palette 1`. We can do this in many different ways:

```rust title="Simple Approach (Circle) - call graphics_parameters function"
// Generate the Graphics Parameters value.
let parameters = graphics_parameters(1, 0, 0, 15, 0, 0);

// Draw the circle at (5, 10), with radius 3.
circle(parameters, 5, 10, 3);
```

Alternatively, if we keep these values in data somewhere, we can combine them by doing bitwise operators.

```rust title="Flexible Approach (Circle) - call individual parameter functions"
// Generate the Individual parts.
let color = color_index(15);
let palette = palette_index(1);

// Combine them to get the final output, via binary OR
let parameters = color | palette;

// Draw the circle at (5, 10), with radius 3.
circle(parameters, 5, 10, 3);
```

Drawing Sprites follows a similar approach. Let's image we want to draw a sprite using `palette 2`, from `sprite sheet 9`, at `sprite index 4`, with a `flipped Y`:

```rust title="Simple Approach (Sprite) - call graphics_parameters function"
// Generate the Graphics Parameters value.
let parameters = graphics_parameters(2, 9, 4, 0, 0, 1);
let mask = 0;

// Draw the sprite at (5, 10)
sprite(parameters, mask, 5, 10);
```
```rust title="Flexible Approach (Sprite) - call individual parameter functions"
// Generate the Individual parts.
let flip = flip_y(1);
let sprite_index = sprite_index(4);
let sheet_index = sprite_sheet_index(9);
let palette = palette_index(2);

// Combine them to get the final output, via binary OR
let parameters = flip | sprite_index | sheet_index | palette;
let mask = 0;

// Draw the sprite at (5, 10)
sprite(parameters, mask, 5, 10);
```

### (Advanced) Graphics Parameters Spec

Since Graphics Parameters are just bit fields, they can be created manually. One advantage of doing it this way is that it results in less host calls, resulting in faster performance since it can drastically reduce the number of Api cals.

```
32 bits in total
They represent 3x 8-bit numbers, a 6-bit number, and two boolean flags:

Y X CCCCCC IIIIIIII SSSSSSSS PPPPPPPP
| | |      |        |        |
| | |      |        |        |- Palette Index (8 bits, 0-255)
| | |      |        |
| | |      |        |- Sprite Sheet Index (8 bits, 0-255)
| | |      |
| | |      |- Sprite Index (8 bits, 0-255)
| | |
| | |- Color index (6 bits, 0-63)
| |
| |- X Flip Flag (1 bit)
|
|- Y Flip Flag (1 bit)

For Example:
Key: Y X CCCCCC IIIIIIII SSSSSSSS PPPPPPPP
Bin: 0 0 001111 00000000 00000000 00000001
Val: F F 15     0        0        1
Result: Use Color 15, using Palette 1.

Key: Y X CCCCCC IIIIIIII SSSSSSSS PPPPPPPP
Bin: 1 0 000000 00000100 00001001 00000010
Val: T F 0      4        9        2
Result: Flip Y, draw Sprite Index 4, from Sprite Sheet 9, using palette 2.
```

The simplest way to do this is through [`bit shifting`](https://en.wikipedia.org/wiki/Bitwise_operation#Bit_shifts), often done through the `<<` or `>>` operators.

This means that each of the parameters can be done by shifting the target value by these amounts:

| Field | Generation |
| --- | --- |
| Palette Index | value |
| Sprite Sheet | value << 8 |
| Sprite Index | value << 16 |
| Color Index | value << 24 |
| Flip X | 1 << 30 |
| Flip Y | 1 << 31 |

We can take our example from above and use them as follows:

```rust title="Advanced Approach (Circle) - Generating completely in-game"
// Generate the Individual parts.
let color_index = 15 << 24; // Shift by 24 using the above chart
let palette_index = 1; // No Shift, because its the rightmost field.

// Combine them to get the final output, via binary OR
let parameters = color | palette;

// Draw the circle at (5, 10), with radius 3.
circle(parameters, 5, 10, 3);
```

```rust title="Advanced Approach (Sprite) - Generating completely in-game"
// Generate the Individual parts.
let flip = 1 << 31;
let sprite_index = 4 << 16;
let sheet_index = 9 << 8;
let palette = 2;

// Combine them to get the final output, via binary OR
let parameters = flip | sprite_index | sheet_index | palette;
let mask = 0;

// Draw the sprite at (5, 10).
sprite(parameters, mask, 5, 10);
```

However, you must be careful to not use invalid values when shifting like this, such as a number larger than 255, as the resulting bit shifts can spill over into other fields.
