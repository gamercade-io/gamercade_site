---
sidebar_position: 1
---

# Wavetable

![Wavetable](/img/editor/wavetable.png)

The Wavetable synth is an isntrument which uses a pre-defined table to generate sounds. The table is simply a list of values which represent the shape of a single cycle of the wave. The wave tables themselves can be of various lengths and shapes, allowing for both simple and complex sounds. Combine them with the different interpolation modes allows even more flexibility. The Wavetable synth also include a waveform generator, which can be used to generate various popular waveforms used throughout audio engineering.

## Wavetable Chart

The Wavetable Chart shows the actual wave table for the instrument. The `x axis` represents the frame index, and the `y axis` represents the value. The wave, when played back, will scroll along this table from left to right. The chart automatically linearly interpolates values between points, similar to the linearly interpolated mode.

You can edit the table by clicking and or dragging on it. The interface will automatically track the mouse position to the nearest frame. This allows you to intuitively draw and shape the waveform in an interactive manner.

## Adding & Removing Frames

Wave tables can be various different lengths. Click the add or remove buttons to add a single frame to end of thetable.

## Waveform Generator

The Waveform Generator is an additional tool for building and shaping commonly used waveforms. To use it, click on the `Waveform Generator` button on the user interface, and the popup window will appear.

Once the waveform generator window is open, you may select the desired waveform from the list. You can also select the length of the output table. Some generation techniques, such as the pulse wave, include additional parameters to help produce the desired sound.

After selecting your desired parameters, click the `generate` button to generate the wave table. This will automatically overwrite the wave table. The waveforms created by the generator will automatically scale to the length of the table.
