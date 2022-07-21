import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple & Powerful',
    Svg: require('@site/static/img/undraw_old_day_-6-x25.svg').default,
    description: (
      <>
        The complete package including 2d rendering, input, audio, and more. Create anything
        from simple classic retro games, to the next big hit.
      </>
    ),
  },
  {
    title: 'Language Agnostic',
    Svg: require('@site/static/img/WebAssembly_Logo.svg').default,
    description: (
      <>
        Powered by WebAssembly. Use your favorite programming language. Full
        support for any language which compiles to .wasm.
      </>
    ),
  },
  {
    title: 'Tool Agnostic',
    Svg: require('@site/static/img/undraw_designer_girl_re_h54c.svg').default,
    description: (
      <>
        Build your assets using whatever tools you already know. Use the included editor
        to intuitively package, test, and export your game.
      </>
    ),
  },
  {
    title: 'Seamless Online & Local Multiplayer',
    Svg: require('@site/static/img/undraw_select_player_64ca.svg').default,
    description: (
      <>
        Gamercade removes all of the complexities with online networking. Built-in p2p
        rollback lets you get multiplayer for free.
      </>
    ),
  },
  {
    title: 'Build Together',
    Svg: require('@site/static/img/undraw_engineering_team_re_fvat.svg').default,
    description: (
      <>
        Projects save in a source-control friendly format. Easily collaborate
        with developers, artists, and designers, without any of the hassle.
      </>
    ),
  },
  {
    title: 'Play!',
    Svg: require('@site/static/img/undraw_ninja_e-52-b.svg').default,
    description: (
      <>
        Browse, download, and play other Gamercade games. Built-in game browser
        with matchmaking means your favorite game is only seconds away.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
