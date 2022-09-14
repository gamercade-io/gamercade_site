---
slug: /tracker
sidebar_position: 2
---

# Tracker

![Song Tracker](/img/editor/songs.png)

The tracker editor modes are responsible for defining the playable sequences in your games. All songs and sfx are composed of a series of chains and phrases, which are a series of note frequencies and the instruments that play them.

Each of the tracker modes features a similar interface: multiple rows with spaces for data entry. The track will always flow from top to bottom, playing any of the entries (if they exist) in sequence. They will continue to play until they are finished by reaching the end of the sequence.

## Gamercade Tracker Key Terms

Each kind of sequence can be split into one of these four categories. They can then be combined to create sound effects and fully fledged songs. The four categories are:

- **Phrase** - A series of notes, volumes, and the instruments that produce the sound. Phrases are the smallest units of sequences. Multiple instruments can be used within a single phrase. A phrase is at most 16 half-steps long, which represent two full musical measures in typical 4/4 time. These might represent a part of the melody, a cool sounding riff, or a looping drum beat. Phrases cannot be played back individually.
- **Chain** - A series of phrases. Multiple phrases are combined to form a chain. Chains can be any number of phrases long, from 1 to 16. These might represent a chorus or verse of a song, or any collection of phrases which make a singular idea. Chains cannot be played back individually.
- **Sfx** - A single chain combined with a speed (bpm). Sfx can be played back by game code, and are played on one of the designated Sfx channels.
- **Song** - A series of multiple chains, up to one for each sound channel, combined with a speed (bpm). A single song can be playing at once, as it uses all of the available song-specific sound channels, one for each column on the tracker.

## Navigating and Using the Tracker

Navigating and editing the tracker is primarily done by the keyboard. It is possible to click on a row entry to select it.

- Use the **Arrow Keys** to navigate around the tracker selection. The selected row and column will be shown in blue.
- Use **Shift** + **Z** to add or remove a tracker entry. This depends on if an entry already exists or not.
- Use **Shift** + **Arrow Keys** to edit tracker entries. Up/Down will increase or decrease by 1. Left/Right will increase by a large amount.
- Use **Space Bar** to play the current sequence. It will always play from the beginning.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```