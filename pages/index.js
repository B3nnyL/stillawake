import React from 'react'
import Link from 'next/link'

const Home = () => (
  <div>

    <div className="hero">
      <h1 className="title">Welcome to Next.js with Jest and Enzyme!</h1>
      <p className="description">
        To get started with testing, edit test examples from <code>component/tests</code> and then run <code>yarn test</code>.
      </p>

      <div className="row">
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a className="card">
            <h3>Next.js</h3>
            <p>Learn more about Next</p>
          </a>
        </Link>
        <Link href="https://jestjs.io/docs/">
          <a className="card">
            <h3>Jest with react</h3>
            <p>
              Learn more about Jest
            </p>
          </a>
        </Link>
        <Link href="https://airbnb.io/enzyme/">
          <a className="card">
            <h3>Test with Enzyme</h3>
            <p>Learn more about DOM test with Enzyme</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
