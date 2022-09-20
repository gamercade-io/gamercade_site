---
sidebar_position: 2
---
# Running Games

Playing games with Gamercade is quite simple and straightforward. Follow these steps to start playing quickly.

### Single Player

Playing a single player game is easy!

1. Download the game you want to play (`.gcrom`).
1. Open the Gamercade Console.
1. If the main menu isn't visible, press `space bar` to open it.
1. Click the "Select Game" Button.
1. Select the game file, the same `.gcrom` you downloaded in step 1.
1. Select "Single Player" for the play mode.
1. Click Launch the game!

Alternatively, single player games can be launched using the `gccl` tool. Read more about it [here](/docs/gccl/)

### Local Multiplayer

This feature is still in development. Check back soon!

### Networked Multiplayer

Play a networked multiplayer game (currently only supports 2 players). Ensure that the ports are opened prior to trying networked multiplayer.

1. Download the game you want to play (`.gcrom`).
1. Open the Gamercade Console.
1. If the main menu isn't visible, press `space bar` to open it.
1. Click the "Select Game" Button.
1. Select the game file, the same `.gcrom` you downloaded in step 1.
1. Select "Networked" for the play mode, the UI should display more options.
1. Enter the address of your friend, including port. For example `192.168.1.100:8000`
1. Select your **unique** player identification number. Think of this as which controller slot you are plugged into. Each player must have a unique number.
1. Enter your own local hosting port.
1. Decide on a random seed number, this must be equal for both players!
1. Click "Launch Game" and wait for your friend to do the same.
1. The game will launch automatically once connected.

For additional information, see the picture below:

![Netplay Setup](/img/netplay-setup.png)

### Troubleshooting Networked Multiplayer

Here are some common issues and solutions for networked games.

- If you are having trouble connecting to others:
    - Ensure that the `remote address` and `local port` are correct.
    - Ensure that you both have selected a unique `Player Number`.
    - Ensure that your `local port` is open.
- If your game is having desync issues:
    - Ensure that the `seed` is equal before starting the game.
    - Ensure that you are both playing the same `.gcrom` game file.


## Main Menu

The main menu can be accessed by pressing `space bar`. It controls a variety of settings, like controller modes, as well as allows you to quit, restart, and load different games.
