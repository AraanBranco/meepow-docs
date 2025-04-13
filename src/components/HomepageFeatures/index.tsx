import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy_usage.svg').default,
    description: (
      <>
        Meepow is a powerful and intuitive tool designed to simplify the creation and management of lobbies in Dota 2.
        Ideal for tournament organizers, community managers, and casual players, Meepow automates complex tasks such as lobby creation,
        invite sending, and match monitoring.
      </>
    ),
  },
  {
    title: 'Easy to set up',
    Svg: require('@site/static/img/easy_set_up.svg').default,
    description: (
      <>
        Set up Meepow in minutes! Simply clone the repository, adjust the configuration files, and start the service with Docker.
        You're all set to manage lobbies quickly and efficiently!
      </>
    ),
  },
  {
    title: 'Multiple hosts',
    Svg: require('@site/static/img/multiple_clouds.svg').default,
    description: (
      <>
        Meepow allows you to configure and manage bots across different cloud providers, such as AWS, Google Cloud, and Azure, in a simple and efficient way.
        With built-in support for multiple instances, you can easily scale your bots, ensuring high availability and performance regardless of the chosen platform.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
