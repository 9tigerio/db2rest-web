import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'No Code DB Access Layer',
    Svg: require('@site/static/img/undraw_fireworks_re_2xi7.svg').default,
    description: (
      <>
        Programming database access layer involves writing lots of boilerplate code. It is often combined with connection leak, transactional inconsistency, inefficient data batching, 
        data leak and SQL injection issues. With DB2Rest never worry about these concerns again.    
      </>
    ),
  },
  {
    title: 'Accelerate Application Delivery',
    Svg: require('@site/static/img/undraw_fitness_stats_sht6.svg').default,
    description: (
      <>
        Database access logic typically consumes 30% of the total application development time. With DB2Rest instant REST API you can boost development by 30x. Focus now on solving business logic
        and crafting beautiful UI.
      </>
    ),
  },
    {
        title: 'Unlock Legacy Data',
        Svg: require('@site/static/img/undraw_chilling_re_4iq9.svg').default,
        description: (
            <>
                DB2Rest can securely unlock legacy databases. Thus you can rapidly innovate and modernize by building new applications, integrate and query datasets for machine learning.
            </>
        ),
    },
  
  {
    title: 'Blazing Fast',
    Svg: require('@site/static/img/undraw_speed_test_re_pe1f.svg').default,
    description: (
      <>
        DB2Rest is blazing fast - It has no Object Relational Mapping (ORM) overhead, uses Single round-trip to databases, no code generation or compilation, and supports Database Query Caching and Batching. 
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_to_the_moon_re_q21i.svg').default,
    description: (
      <>
        DB2Rest was designed from the ground up to be easily installed and
        used to get your backend or frontend integrations up and running quickly.
      </>
    ),
  },

  {
    title: 'Run Anywhere',
    Svg: require('@site/static/img/undraw_world_re_768g.svg').default,
    description: (
      <>
      DB2Rest can be installed and run on premise, bare-metals, Virtual Machines (VM), Docker, Kubernetes, Any cloud.
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
