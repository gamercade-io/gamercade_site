---
sidebar_position: 3
---

# Sampler

![Sampler](/img/editor/sampler.png)

A [sampler](https://en.wikipedia.org/wiki/Sampler_(musical_instrument)) is an instrument which uses pre-recorded files to generate sounds. The files, called samples, can then be played back by the audio engine.

If the frequency of the sample is known, then its also possible to adjust the speed of the sample and play it at a desired note or pitch. This is great for samples of complex instrument sounds, like pianos, guitars, or strings, or even sound effects where the pitch should be adjustable.

If the frequency is not entered, the sample will simply ignore any note or target frequency, and just play back at the normal rate. This useful for percussive sounds like drums, voice lines, or anything else where you don't need to adjust pitch.

## Loading Samples

The sample files to load must be generated outside of the editor - but these samples can be anything. To load a sample, simply click the load sample button and locate the file you want.**Currently, the sound engine only supports `.wav` file formats with a single channel.** Sample rates are flexible, though.

If the sample seems to be playing at a slow speed, its likely because its a dual channel (or more) sample. Please convert your sample to mono, or use another sample.

## Setting Frequency

To enable or disable a samples frequency, click the enable/disable sample frequency button. Sample frequencies are in [hertz](https://en.wikipedia.org/wiki/Hertz) often written as `hz`.

## Loop Modes

Loop modes determine what to do when a sample is finished playing, as different kinds of samples need different ways of repeating if necessary.

- **Oneshot** - The default. The sample will play once, and will not play again until it is released and/or triggered again. Useful for one-time sounds like drums, or one-off effects.
- **Loop** - The sample will continue to loop back to the start indefinitely. Useful for long-repeating samples or ambience sounds.
- **Loop Range** - The sample will play until it reached the end of the loop point, and then it will go back to the beginning of the range. Useful for instruments with distinct phases, where you want the sound to continue looping and resonating while it decays without hearing the attack part.