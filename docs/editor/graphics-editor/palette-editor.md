---
sidebar_position: 1
---
# Palette Editor

![Palette Editor](/img/editor/palette-editor.png)

The Palette Editor is primarily used for defining and editing palettes to be used when drawing sprites and graphics. Each palette is composed of 64 colors, defined by standard 32-bit RGBA Values (8 bits per channel). Currently, the alpha channel can only be set to 0 (completely off), or 255 (completely on).

## Palette List

The Palette list is used for viewing and selecting palettes.

A palette can be selected by clicking its name on the list.

The palette list also houses some buttons for interacting with the list as a whole.

- *New* - Insert a new default palette.
- *Import* - Import a palette from a file.
- *Delete* - Delete the selected palette.
- *Duplicate* - Duplicate the selected palette.
- *Up* - Move the selected palette up one spot on the list.
- *Down* - Move the selected palette down one spot on the list.

## Palette Viewer

The Palette Viewer shows a larger image of the entire color palette. It is also used in conjunction with the Color Editor below it to make adjustments to the individual colors within the palette.

The palette can be renamed by editing the text within the text box.

Clicking on a color square within the Palette Viewer will select that color. The selected color is indicated by an outline over it. You will also notice the Color Editor changing as you select different colors.

## Color Editor

The Color Editor is used to adjust individual colors within the palette. The panel shows two main sections, the current color, and the preview color. Colors are defined by RGB values from 0-255. A color can be transparent, yet still have a color value.

The current color is not editable. It is used as a guide.

The preview color can be adjusted by either moving the R, G, and B sliders, or by adjusting the color values. Any changes made to the color will be reflected on the Sprite Preview window. This is useful if you want to make adjustments and see how the changes will affect related sprites.

Any changes made to the preview color are only temporary. They can be reset by clicking the Revert button. If you want to keep the changes, click the Update button. These changes will now be reflected in all instances of the palette.

## Sprite Preview

The Sprite Preview shows the currently selected sprite, as determined from the Sprite Sheet editor. It is used to show how adjustments made by the Color Editor affect any sprites when drawn using that palette. Changing the selected color palette will also adjust palette used to render the sprite.

The sprite preview image can be changed by selecting a different sprite on the Sprite Sheet editor panel.
