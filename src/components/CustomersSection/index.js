import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const CustomerList = [
  {
    title: 'Lua On Beans',
    Svg: require('@site/static/users/luaonbeans.png').default,
    description: (
      <>
        DB2Rest provides REST API support for blazing fast Lua On Beans MVC framework.
      </>
    ),
  },
  {
    title: 'trackon',
    Svg: require('@site/static/users/trackon-main-logo.png').default,
    description: (
      <>
        Trackon is a leading vehicle tracking company in Nepal. Trackon uses DB2Rest for providing fast and
          secure access to vehicle tracking data.
      </>
    ),
  },
];

function Customer({i, title, description}) {
  return (
    <div className={clsx('col col--4')}>
        <div className="text--center">

            {/*<Svg className={styles.featureSvg} role="img" />*/}

        <img
            src={i}
        />

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
        <h1 className="text--center padding-horiz--md blue-text"> Happy Users</h1>
        <div className="row">
          {CustomerList.map((props, idx) => (
            <Customer key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
