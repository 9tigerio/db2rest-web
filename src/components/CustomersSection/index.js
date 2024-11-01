import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const CustomerList = [
  {
    title: 'Lua On Beans',
    i: "https://images.db2rest.com/luaonbeans.png",
    description: (
      <>
        DB2Rest provides REST Data API support for blazing fast Lua On Beans MVC framework.
      </>
    ),
  },
  {
    title: 'trackon',
    i: "https://images.db2rest.com/trackon-main-logo.png",
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

        <img alt={title}
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
