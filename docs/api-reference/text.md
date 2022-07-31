---
sidebar_position: 4
---

# Text

These functions allow you to write and log text. Useful for debugging.

```rust title="Draw Api Function List"
// Logs the passed in text pointer to the console.
// This function currently only accepts utf8 strings.
fn trace(text_ptr: i32, len: i32);

// Unimplemented. Will allow drawing of text to the screen in the future
fn draw_text(text_ptr: i32, len: i32, x: i32, y: i32);
```