---
slug: /gccl
sidebar_position: 6
title: gccl Command Line Tool
---

# `gccl` Command Line Tool

`gccl` is the **G**amer**C**ade **C**ommand **L**ine Interface tool. It provides a few useful tools for working with Gamercade, especially those who prefer a terminal or command line driven development environment.

**Note** When downloading releases, the tool if often named something like `gccl-[PLATFORM]`. You will need to rename this (or adjust the commands you enter) in order to invoke them properly.

## How to Use

Run the cli with `gccl`. Invoke one of the following commands:

- `help` - Provides the help text.
- `bundle` - Bundle mode. You must provide code `-c`, an output file path `-o`, and optionally an asset provider `-a`.
- `console` - Console mode, see the section below which explains the different usages of this mode.

### Bundle Mode

This is how you can bundle and package game code and assets via command line. Usable by the `gccl bundle` command. The usable parameters are:

- `--code` or `-c` - a code provider. Can be a `.wasm` file or an already bundled `.gcrom`.
- `--output` or `-o` - an output file. The path where you want to output the bundled `.gcrom`.
- `--assets` or `-a` - an optional asset provider. Can be a `.gce` file, or an already bundled `.gcrom`.

For example, `gccl -w bundle -c [PATH TO CODE] -a [PATH TO ASSETS] -o my_game.gcrom` will load code, assets, bundle them together, and output it into `my_game.gcrom`

### Console Mode

This is how you can run the console, and optionally bundle files, via the command line. Usable by the `gccl console` command. Has a few different modes:

- `rom` mode. For quickly launching a single player game with the target rom. Must provide a path to the `.gcrom` file.
- `bundle` mode. For quickly bundling and launching a single player game with the target code and asset providers. Must provide code via `-c`, and optionally an assets source via `-a`.

For example, `gccl console rom [PATH TO ROM]` will open the console and load the passed in `.gcrom` if possible.

## File Watching

You can also "watch" for file changes, and automatically run commands. This is done by adding the `-w` or `--watch` flag before entering the command. For example:

`gccl -w bundle -c [PATH TO CODE] -o my_game.gcrom`

This will use the default value for assets (since `-a` is not provided), and will bundle it with code provided to `-c`, into the output file `my_game.gcrom`

Alternatively, if you want to bundle and run the console for fast development, you can do:

`gccl -w console rom [PATH TO ROM]`

This will automatically launch and continue to re-launch the game should the rom file change.

Many other commands and modes are watchable, not only these two listed above.
