# Frequently Asked Questions

## What is Gamercade?

We recommend reading the ["What is Gamercade?"](/what-is-gamercade) page, but to summarize, Gamercade is a Neo-Retro Fantasy Console, built around the idea of making development of networked multipler games simple.

## Neo-Retro? What is that?

Neo-Retro is the term we like to use to describe Gamercade. In our definition, it means something which is retro-looking, but still has many capabilities of modern times. In the case of Gamercade, this means that the games themselves are retro-like in their appearance, such as with lower resolutions and pixel graphics. However, it still has many modern features like online multiplayer, a full-featured controller layout with analog sticks, and a development environment which uses cutting edge technology like WebAssembly.

## Where can I download it?

You can find download links on our [downloads](/downloads) page.

## When will Gamercade be released?

Gamercade was released September 21, 2022. Stable releases are listed on the [downloads](/downloads) page.

## How much does it cost?

Gamercade is, and will always be, free to use, forever. We are considering the introduction of additional premium features in the future.

## What platforms does it support?

Currently, Gamercade is fully supported on Windows. We also support some Linux systems and some Mac systems. If your platform is not supported, please open an issue on our [github](https://github.com/gamercade-io/gamercade_console/issues).

## How can I develop games for it?

We recommend reading about it from our [learning](/docs/intro) section.

## What kind of games can I make for it?

As long as it fits within the console restrictions, you can make any kind of game you want! Gamercade generally does better with small and medium scoped games, especially those with minimal or no set-up time, that let players get into the main gameplay quickly. Some good examples are cooperative or competitive arcade games, fighting games, shoot em up games, or puzzle games. However, we would advise against making a game with a large requirements, like an MMO (many players) or RPG (much content) with Gamercade.

## What are the specs of the console itself?

See the [Console Specs](/docs/console-specs) page.

## How can I support the project?

<iframe src="https://github.com/sponsors/gamercade-io/button" title="Sponsor gamercade-io" height="35" width="116" style={{border: 0}}></iframe>

You can learn additional ways on how to support the project at our [Support Gamercade](/support-gamercade) page.

## How does the networking work?

Gamercade's networking components are handled by [ggrs](https://github.com/gschup/ggrs), an open-source reimagination of the highly regarded [GGPO network SDK](https://www.ggpo.net/). This is a p2p rollback implementation in which clients execute the game code locally and attempt to predict the next few moments. In the event of a misprediction, caused by lag or just a bad guess, the game will roll back, and with the now correct data, roll forward. This all happens instantly in the sense that it's generally unnoticable by the player. Only in rare circumstances will the player see or hear a jitter or artifact in the game play - and even other networking solutions would likely have worse outcomes.

## How secure is Gamercade? Is it safe to play other user's games?

Gamercade in its entirety is written in [Rust](https://www.rust-lang.org/), a programming language known for its safety and reliability. In addition, it uses the WebAssembly runtime [wasmtime](https://github.com/bytecodealliance/wasmtime), an active open source project. This means that the actual game code is running within a virtual machine inside of the program. It does not have access to anything outside of it.

In the worst case, a malicious user may only cause the *Gamercade Console itself* to hang or crash - and not anything else. However, we do ensure that any malicious users or games will be promptly removed as quickly as possible.

If you feel this answer isn't suitable, check out the projects source code on [GitHub](https://github.com/gamercade-io).

## Do you provide any services or training programs?

Yes! We offer many one-time development services or training programs via our [GitHub Sponsors](https://github.com/sponsors/gamercade-io) page. We can develop anything from starter projects to fully completed games.
