---
sidebar_position: 2
---

# Sprite Sheet Editor

![Sprite Sheet Editor](/img/editor/sprite-sheet-editor.png)

The Sprite Sheet Editor is primarily used for setting up and modifying collections of sprites, so that they can be drawn in-game using the `sprite` function. Each sprite sheet is a collection of sprites, all of which share the same width and height measurements. You are free to organize sprites and sprite sheets as you wish, such as by size, by character, or whatever other method which works for you

## Sprite Sheet List

The Sprite Sheet List is used for viewing and selecting sprite sheets.

A sprite sheet can be selected by clicking its name on the list.

The Sprite Sheet List also features two buttons:

- **New** - Inserts a new default sprite sheet, with a single default sprite.
- **Delete** - Deletes the selected sprite sheet.

## Sprite Sheet Settings

The Sprite Sheet Settings widget is used for adjusting general information about the sprite sheet, such as the name and dimensions of that sheet. Because these changes can have quite large effects, there is a two step process in order to commit any changes to the sprite sheet.

In order to edit the settings, first click the Edit button. Now, you are able to change the name, width, or height of the sprite sheet. If you are satisfied with your changes, click the apply button. If you wish to undo you changes, click the cancel button - this will revert things to what they were previously.

When resizing sprite sheets, pixels will be added or removed depending on if the new size is larger or smaller.

## Sprite Sheet Editor

The Sprite Sheet Editor widget is used for viewing and organizing individual sprite images within the sheet.

Sprites can be selected by clicking on them in the window. The selected sprite is depicted by the highlight around it.

Interacting with the Sprite Sheet Editor is done through the following buttons:

- **New** - Create a new empty sprite at the next location.
- **Copy** - Copy the selected sprite and place it at the next location.
- **Move Left** - Move the selected sprite one spot left in the sheet.
- **Move Right** - Move the selected sprite one spot right in the sheet.
- **Delete** - Delete the selected sprite.
- **Import** - Import a sprite(s) into sprite sheet.

### Importing Sprites

Clicking the import button will bring up the file picker dialog box. You can select one or many sprites into the sprite sheet.

**When importing a sprite, ensure that the matching palette is selected.** Failure to do so will result in an error, since the images are stored as a series of values which correspond with the related palette.

If importing a sprite should fail for any reason, see the console window for the related error message. Some common problems are:

- The sprite could not be generated using the selected palette. Fix this by selecting (or importing) the correct palette.
- The image has different dimensions than the sprite sheet. This can be fixed by adjusting the sprite sheet or image to have the correct dimensions.

## Palette Previewer

The Palette Previewer allows you to change the currently selected palette when rendering the sprite sheet. You can select a different palette by clicking on it from the list.
