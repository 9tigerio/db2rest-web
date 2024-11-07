import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const CustomerList = [
  {
    title: 'Lua On Beans',
    i: "https://images.db2rest.com/luaonbeans.png",
    url: "https://luaonbeans.org/",
    description: (
      <>
        DB2Rest provides REST Data API support for blazing fast Lua On Beans MVC framework.
      </>
    ),
  },
  {
    title: 'trackon',
    i: "https://images.db2rest.com/trackon-main-logo.png",
    url : "https://www.trackon-gps.com/",
    description: (
      <>
        Trackon is a leading vehicle tracking company in Nepal. Trackon uses DB2Rest for providing fast and
          secure access to vehicle tracking data.
      </>
    ),
  },
    {
        title: 'rentacyblerfriend',
        i: "https://images.db2rest.com/rent_a_cyber_friend.png",
        url : "https://www.rentacyberfriend.com/",
        description: (
            <>
                RentACyberFriend.com is a social platform based on the concept of Pen Pal. RentACyberFriend uses DB2Rest to securely
                share data with other systems and simplify integrations.
            </>
        ),
    },
];

function Customer({i, title, url, description}) {
  return (
    <div className={clsx('col col--4')}>
        <div className="text--center">

            {/*<Svg className={styles.featureSvg} role="img" />*/}

        <img alt={title}
            src={i}
        />

        </div>
        <div className="text--center padding-horiz--md">
            <a href={url}>{url}</a>
            {/*<Heading as="h3">{title}</Heading>*/}
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
