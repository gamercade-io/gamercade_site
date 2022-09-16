---
sidebar_position: 5
---

# Text

These functions allow you to write and log text. Useful for debugging.

```rust title="Draw Api Function List"
// Logs the passed in text pointer to the console.
// This function currently only accepts utf8 strings.
fn console_log(text_ptr: i32, len: i32);

// Logs the passed in text pointer to the console.
// This function currently only accepts utf16 strings.
fn console_log_utf16(text_ptr: i32, len: i32);
```