---
slug: /audio-editor
sidebar_position: 5
---

# Audio Editor

![Audio Editor](/img/editor/audio-editor.png)

The Audio Editor is responsible for all sound related things in your Gamercade Games! All instruments, background music, and sound effects, are created and modified here.

The sound engine produces all of the sounds via instruments. Think of them as a source of sound, rathar than a musical instrument. Instruments can be triggered on and off, and also be set to play at specific frequencies. This can be done via game code, or by triggering songs or sfx, which playback a predetermined series of chains and phrases.

## Oscilloscope

The oscilloscope shows a visual representation of the sound being produced by the sound engine. This can be useful when trying to tweak your instruments to make that perfect sound. You can open the oscilloscope by selecting one of the three possible modes:

- **Off** - Disables the Oscilloscope.
- **Channels** - Splits the Oscilloscope view into individual channels.
- **Master** - Combines the outputs of all channels into a single oscilloscope view.

The oscilloscope can also be closed by clicking the X button at the top of the window.

## Instrument Editors

Gamercade features different kinds of instruments. They can be created and edited by using the [instrument editor](./instrument-editor/index.md). Each of these instruments come with their own pros and cons, and each are able to produce different kinds of sounds. Experiment with the ones you like. The currently featured instruments are:

- **Wavetables** - Great for chiptunes or other complex sounds. Generate pre-defined waveforms using the generator, or click on the chart to modify them frame by frame.
- **FM Synth** - A 4-op FM synth, similar to the Yamaha YM2612 found in the Sega Genesis / Mega Drive. It can be complicated to use, but can produce tons of unique and interesting sounds.
- **Sampler** - Playback pre-recorded .wav files. They can be pitched and played back at specific notes. The most flexible, but also uses the most amount of space.

## Tracker

The [Tracker](./tracker/index.md) modes (Phrases, Chains, Songs, and Sfx) are responsible for creating sequences of notes for your game. Think of them as like sheet music, but in a compact, numerical, data format. Trackers were often used to produce actual music and sound effects on older consoles.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```