---
sidebar_position: 1
---

# Phrases

![Phrases](/img/editor/phrases.png)

Phrases represent the most smallest unit of sequences. They are a composed of a series of entries entries, which each contain a `note`, a `volume`, and an `instrument`. Each phrase can be up to 16 entries long. Empty rows will function as a rest, no sound changes will be generated.

Each row represents a single entry. All values are in hexadecimal The columns of the phrase editor are:

- **`#`** - The row number.
- **`N`** - The note. Notes are named musical notes A through G#, with octaves.
- **`V`** - The volume of the note.
- **`I`** - The instrument index. This corresponds to the instrument list on the instrument editor.

Phrases can be previewd by clicking the Play button, or pressing the space bar. This preview will use the bpm listed on the Phrase Editor.

## Navigation and Usage

Please see the [tracker usage](/docs/tracker#navigating-and-using-the-tracker) section for more information.

## Troubleshooting

- **I have an entry but no sound is being produced** - Ensure that the volume is set to an appropriate level, and check that the instrument index used is valid.
- **Playback Speed in a Song or Sfx is different** - The Play button and Bpm settings is only for previewing the phrase. Any phrase inlcuded in a chain and song or sfx are playing using the Bpm determined by the song or sfx.
