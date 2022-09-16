---
sidebar_position: 2
---

# FM Synth

![FM Synth](/img/editor/fm-synth.png)

The FM Synth is a 4-operator [FM synthesizer](https://en.wikipedia.org/wiki/Frequency_modulation_synthesis). It produces a sound similar to some classic hardware like the Sega MegaDrive/Genesis, Soundblaster sound cards, or even synthesizer keyboards from the 80s. It uses a combination of different waves, often sine waves or sine wave variations, to modulate the signal (modulator) of the wave that we hear (carrier). It sounds complex, and it often can be. FM synthesis is very mathematical and difficult to use, but can produce an immense number of unique and interesting sounds.

Each of the four operators has its own waveform and [envelope](/docs/instrument#envelope). When the instrument is played, all four operators will also play at the same time. So it is up to the envelope to control and shape each operator individually, 

## Algorithm

Algorithms represent the method in which the different operators are combined to produce the final sound output. The algorithm can be adjusted by adjusting the value in the slider. The algorithm chart can be seen by clicking the "FM Synth Help" button.

![FM Algorithm Diagram](/img/editor/fm-algorithm-diagram.png)

Each of the numbered squares represents one of the four operators of the instrument. The charts are read from top to bottom. Any line which feeds from one operator another, is a **modulator**, meaning that the output of that wave *modulates* the shape of the target wave. Any operator which feeds down off the chart, is a **carrier**. Carriers *carry* the signal - the actual signal that we percieve as sound.

Different algorithms can drastically alter the resulting sound, so experiment with different ones to create interesting instruments.

## Feedback

The first operator `1` is unique in that it is the only one which is able to modulate itself. Feedback takes the output of the last two frames of the operator, and modulates it by that amount. Increasing the feedback level increases impact of modulation on the operator.

## Waveforms

The FM Synth supports different waveforms per operator. Click "Waveform" dropdown to change the waveform of that operator. Each operator can have its own waveform.

## Frequency Adjustment

Frequency Adjustment allows you change the frequency ratio of a single operator relative to the note played. This is represented as a division based equation. The `top` represents the dividend of the equation, and the `bottom` represents the divisor of the equation. Dividing the top number by the bottom number will provide the final ratio of this operator. These numbers can range from 1 to 20, giving the resulting frequency ratios to be from `20:1` to `1:20`, and everything in-between.

**Detune** allows you to slightly increase or decrease the frequency of the operator.
