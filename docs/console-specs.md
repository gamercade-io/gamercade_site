---
sidebar_position: 2
---

# Console Specs

## Graphics Specifications

### Frame Rates
Gamercade supports the following frame rates. If the system has a refresh rate lower than the target frame rate, the game will still update at the correct rate. However, some rendering frames will be skipped. *Indicates not yet implemented

| Name | Frames per Second |
| --- | --- |
| Super Slow | 24 |
| Slow | 30 |
| Normal | 60 |
| Fast* | 120 |
| Super Fast* | 240


### Resolutions

Gamercade supports the following resolutions.

| Name | Resolution |
| --- | --- |
| Ultra Low | 128 x 72 |
| Very Low | 160 x 90 |
| Low | 320 x 180 |
| Medium | 480 x 270 |
| High | 640 x 360 |
| Very High | 1280 x 720 |
| Ultra High | 1920 x 1080 |

### Graphics

The following limitations are set for graphical data

| Element | Maximum | Notes |
| --- | --- | --- |
| Colors per Palette | 64 | Any RGB Color |
| Palette Count | 256 | Variable transparency per draw call |
| Sprite Sheet Count | 256 | Adjustable heights and widths |
| Sprites per Sprite Sheet | 256 | |

### Default Palettes

Gamercade ships with 10 default palettes. Users are able to freely add, delete, and edit palettes as desired.

1. [RESURRECT 64](https://lospec.com/palette-list/resurrect-64)
1. [AAP-64](https://lospec.com/palette-list/aap-64)
1. [JOURNEY](https://lospec.com/palette-list/journey)
1. [ENDESGA 64](https://lospec.com/palette-list/endesga-64)
1. [FAMICUBE](https://lospec.com/palette-list/famicube)
1. [BLK NX64](https://lospec.com/palette-list/blk-nx64)
1. [THE PERFECT PALETTE 2.0](https://lospec.com/palette-list/the-perfect-palette-20)
1. [SWEET CANYON EXTENDED 64](https://lospec.com/palette-list/sweet-canyon-extended-64)
1. [PASTEL-64](https://lospec.com/palette-list/pastel-64)
1. [REWILD 64](https://lospec.com/palette-list/rewild-64)

## Audio Specifications

**General Audio Spec**
- Tracker-style audio workflow
- 8 stereo channels for Music
- 8 stereo channels for Sfx
- Mix and match as needed
- 96 note keyboard from C1 -> B9
- Built in Effects, like ADSR and more

[**FM Synthesizer**](https://en.wikipedia.org/wiki/Frequency_modulation_synthesis)
- Full Featured 4-Operator FM Synth
- 12 Algorithms
- Adjustable Feedback
- 8 Selectable Waveforms
- +/- 100 levels of Detune
- Frequency Multiplier
- Randomizer and Presets

**16-bit Wavetables**
- Full Featured Wavetable Synth.
- Create wavetables via file import, automated generation, or draw your own
- Adjustable length to meet size and sound requirements

**16-bit Sampler**
- Full Featured Sample playback
- Import your own sample files
- Adjust per note during playback
- Variable playback with adjustable loop points
- 100s of Included Samples (*in development)