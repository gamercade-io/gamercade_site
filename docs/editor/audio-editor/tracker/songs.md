---
sidebar_position: 4
---

# Songs

![Songs](/img/editor/songs.png)

Songs represent the background music to be played with your games. A game can have multiple songs, but only one song can be playing at a time.

A song is composed of a series of rows. Each row will play back a single [chain](chains), and the song will continue to play from top to bottom until the song is finished.

Each row is split into the following columns:

- **`#`** - The row number, in hexadecimal.
- **`c0` - `c7`** - The individual sound channels. Each one can play back a single chain at a time.

Rows can be added or deleted by pressing the corresponding button on the row. These buttons will add or delete relative to the currently selected row, either deleting the selected one, or inserting a row after the selected one.

## Navigation and Usage

Please see the [tracker usage](/docs/tracker#navigating-and-using-the-tracker) section for more information.
