import { useState } from 'react';
import { VALUES, PRODUCTS, SERVICES, AMCS } from '../data';
import Distributor from '../images/logo.png';

const Head = ({ id, title, sub }) => (
  <div className="head">
    <h2 id={id}>{title}</h2>
    {sub && <p>{sub}</p>}
  </div>
);

const Grid = ({ items }) => (
  <div className="grid">
    {items.map(([t, d]) => (
      <article className="card" key={t}>
        <h3>{t}</h3>
        <p>{d}</p>
      </article>
    ))}
  </div>
);

export const About = () => (
  <section id="about">
    <Head title="About Jay Somnath Financial Services" />

    <div className="about">
      {/* About Content */}
      <div className="about-content">

        <p>
          At <strong>Jay Somnath Financial Services</strong>, we help
          individuals and families make informed investment decisions through
          goal-based financial planning and mutual fund distribution.
        </p>

        <p>
          We understand that every investor has different financial goals—
          whether it is building wealth, planning for a child's education,
          purchasing a home, creating a retirement corpus, or preparing for
          future financial needs. Our approach is to understand your goals,
          investment horizon, and risk profile before helping you choose
          suitable investment solutions.
        </p>

        <p>
          As a <strong>Mutual Fund Distributor</strong>, we provide access to
          mutual fund schemes from various Asset Management Companies (AMCs)
          and assist investors throughout their investment journey, from
          selecting suitable schemes to ongoing portfolio reviews and support.
        </p>

        {/* Our Approach */}
        {/* <div className="about-approach">
          <h3>Our Approach</h3>

          <ul>
            <li>
              <strong>Goal-Based Planning</strong>
              <span>
                We connect investments with your specific financial goals.
              </span>
            </li>

            <li>
              <strong>Investor Education</strong>
              <span>
                We help you understand mutual funds, risks, returns, and
                investment options.
              </span>
            </li>

            <li>
              <strong>Diversification</strong>
              <span>
                We help build diversified portfolios based on your investment
                requirements.
              </span>
            </li>

            <li>
              <strong>Long-Term Focus</strong>
              <span>
                We encourage disciplined investing and long-term wealth
                creation.
              </span>
            </li>

            <li>
              <strong>Continuous Support</strong>
              <span>
                We remain available to assist with investment-related queries
                and portfolio reviews.
              </span>
            </li>
          </ul>
        </div> */}

        {/* Mission */}
        {/* <div className="mission">
          <h3>Our Mission</h3>

          <p>
            Our mission is to make investing <strong>simple, transparent,
            and understandable</strong>, helping investors develop disciplined
            investment habits while working toward their long-term financial
            goals.
          </p>
        </div> */}

        {/* Disclaimer */}
        <p className="about-disclaimer">
          Mutual fund investments are subject to market risks. Read all scheme
          related documents carefully. Past performance is not indicative of
          future returns.
        </p>
      </div>

      {/* Distributor Photo */}
      <div className="about-photo">
        <img
          src={Distributor} width="200px" height="200px"
          alt="Jay Somnath Financial Services Mutual Fund Distributor"
        />

        <div className="distributor-info">
          <h3>Mutual Fund Distributor</h3>
          <p>Jay Somnath Financial Services</p>
        </div>
      </div>
    </div>
  </section>
);

export const Values = () => (
  <section id="values" className="alt">
    <Head title="Our core values" />
    <Grid items={VALUES} />
  </section>
);

export const Products = () => (
  <section id="products">
    <Head
      title="Diversified financial instruments"
      sub="Investment products and assets, all under one roof."
    />
    <Grid items={PRODUCTS} />
  </section>
);

export const Services = () => (
  <section id="services" className="alt">
    <Head title="Services we provide" />
    <Grid items={SERVICES} />
  </section>
);

function AmcCard({ name, local, remote }) {
  const sources = ['/amc-logos/' + local, remote]
  const [i, setI] = useState(0)
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()

  return (
    <article className="amc">
      <div className="amc-logo">
        {i >= sources.length ? (
          <span className="amc-initials" aria-hidden="true">{initials}</span>
        ) : (
          <img
            key={i}
            src={sources[i]}
            alt={name + ' logo'}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setI(i + 1)}
          />
        )}
      </div>
      <h3 className="amc-name">{name}</h3>
    </article>
  )
}
export const AMCs = () => (
  <section id="amcs">
    <Head
      title="Associated asset management companies"
      sub="We distribute schemes from India’s leading fund houses."
    />
    <div className="amcs">
      {AMCS.map(a => <AmcCard key={a.name} {...a} />)}
    </div>
  </section>
)