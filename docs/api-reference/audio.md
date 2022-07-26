---
sidebar_position: 1
---

# Audio

Audio Api is responsible for playing background music and sound effects. This is closely related to the audio ROM data included in the game. Any unused parameters will be safely ignored, and if a provided index for an audio entry (bgm_index, sfx_index, instrument_index) is invalid, the sound will instead be muted. If an invalid channel is provide, it will do nothing.

```rust title="Audio Api Function List"
// Plays the specified BGM by index.
fn play_bgm(bgm_index: i32);

// Plays the specified SFX by index, on the specified channel.
fn play_sfx(sfx_index: i32, channel: i32);

// Stops the BGM from playing.
fn stop_bgm();

// Stops the channel from playing.
fn stop_channel(channel: i32);

// Plays a note via note ID (0 - 95, from C1 to B9), using the specified instrument on the specified channel.
fn play_note(note_id: i32, instrument_index: i32, channel: i32);

// Plays an instrument via raw frequency, using the specified instrument played on the specified channel.
fn play_frequency(frequency: f32, instrument_index: i32, channel: i32);
```