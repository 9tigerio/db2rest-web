import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'NIKE',
    Svg: require('@site/static/img/nike-logo.svg').default,
    description: (
      <>
        NIKE is using DB2Rest to build Intelligent Applications faster   
      </>
    ),
  },
  {
    title: 'ADIDAS',
    Svg: require('@site/static/img/adidas-logo.svg').default,
    description: (
      <>
        ADIDAS is using DB2Rest to enable their developers to build faster with smarter applications
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function CustomersSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className="text--center padding-horiz--md">CUSTOMERS</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
