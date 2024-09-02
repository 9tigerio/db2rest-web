import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Head from '@docusaurus/Head';
import CustomersSection from '@site/src/components/CustomersSection';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get started with DB2Rest - 10mins ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>

{/* Below we directly use the @docusaurus/Head component that was imported above
    and insert our custom JSON-LD script
*/}
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'DB2Rest',
            url: 'https://db2rest.com/',
            logo: 'https://db2rest.com/img/logo-db2rest.png',
            image: 'https://db2rest.com/img/logo-db2rest.png',
            sameAs: ['https://twitter.com/db2rest'],
            knowsAbout: 'REST API, Databases, Low-code, API Platforms, Java, SQL, Web Development, Open Source Software',
            foundingDate: '2023',
            numberOfEmployees: '2',
            areaServed: 'Worldwide',
            description: 'Our organization creates open source software such as DB2Rest to make it easy for developers to create instant low-code REST APIs for databases.',
            owns: {
              '@type': ['Product','SoftwareApplication'],
              additionalType: 'https://www.wikidata.org/entity/Q1130645',
              name: 'DB2Rest',
              description: 'Open source software that creates an instant low-code REST DATA API for databases. Connect any database, run anywhere.',
              brand: 'DB2Rest',
              url: 'https://github.com/kdhrubo/db2rest',
              keywords: 'REST API, Open Source, Low-code, Database',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/OnlineOnly',
              },
              audience: {
                '@type': 'Audience',
                audienceType: 'Web Developers',
                geographicArea: 'Worldwide'
              },
              maintainer: {
                '@type': 'Person',
                name: 'Dhrubo Kayal',
                url: 'https://www.github.com/kdhrubo/'
              },
              applicationCategory: 'REST API generator',
              applicationSubCategory: 'Database API',
              featureList: 'Oracle, PostgreSQL, MySQL, MongoDB, MariaDB, CockroachDB',
              operatingSystem: 'Cross-platform',
              softwareRequirements: 'Java 21+',
              memoryRequirements: '4 GB',
              license: 'https://raw.githubusercontent.com/kdhrubo/db2rest/master/LICENSE',
              discussionUrl: 'https://github.com/kdhrubo/db2rest/discussions'
            }
          })}
        </script>
      </Head>

      <HomepageHeader />
      <main>
        <HomepageFeatures />
          {/*
        <CustomersSection />
            */}
      </main>
    </Layout>
  );
}
