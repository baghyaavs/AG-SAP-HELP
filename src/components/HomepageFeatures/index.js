import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
  return (
    <div>

      {/* Documentation Sections */}
      <section className="container margin-top--lg">
        <Heading as="h2">Documentation</Heading>

        <div className="row">

          <div className="col col--3">
            <div className="card padding--md">
              <h3>SAP ABAP</h3>
              <p>Development guidelines, reports, enhancements</p>
              <Link to="/docs/SAP ABAP/Introduction">Explore →</Link>
            </div>
          </div>

          <div className="col col--3">
            <div className="card padding--md">
              <h3>SAP MM</h3>
              <p>Procurement, inventory management</p>
              <Link to="/docs/SAP MM/intro">Explore →</Link>
            </div>
          </div>

          <div className="col col--3">
            <div className="card padding--md">
              <h3>SAP PM</h3>
              <p>Plant maintenance processes</p>
              <Link to="/docs/SAP PM/intro">Explore →</Link>
            </div>
          </div>

          <div className="col col--3">
            <div className="card padding--md">
              <h3>SAP FICO</h3>
              <p>Finance and controlling documentation</p>
              <Link to="/docs/SAP FICO/intro">Explore →</Link>
            </div>
          </div>

          

        </div>
      </section>
        </div> ) }