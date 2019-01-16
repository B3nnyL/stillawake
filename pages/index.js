import React from "react";
import Link from "next/link";
import DesktopNav from "../components/desktopNav";
import MobileNav from "../components/mobileNav";
import PageNav from "../components/pageNav";
import Hero from "../components/hero";
import BrandContainer from "../components/brandContainer";
import WorkflowExample from "../components/workflowExample";
import QuoteContainer from "../components/quoteContainer";
import CtaContainer from "../components/ctaContainer";
import { BRANDS } from "../utils/brands";
import MediaQuery from "react-responsive";

const Home = () => (
  <div>
    <div>
      <MediaQuery query="(min-width:997px)">
        <DesktopNav />
      </MediaQuery>
      <MediaQuery query="(max-width: 996px)">
        <MobileNav />
      </MediaQuery>
      <PageNav />
      <Hero />
      <BrandContainer brands={BRANDS} />
      <WorkflowExample />
      <QuoteContainer />
      <CtaContainer>
        <h1>Just push and code</h1>
      </CtaContainer>
    </div>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          font-size: 14px;
          color: #444;
        }
        :global(*) {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        :global(h1) {
          font-weight: 500;
          font-size: 42px;
          margin-bottom: 4px;
          color: #000;
        }
        :global(h2) {
          font-weight: 500;
          font-size: 16px;
          margin-bottom: 4px;
          color: #000;
        }
        :global(h3) {
          font-weight: 500;
          font-size: 15px;
          margin-bottom: 4px;
          color: #000;
        }
        :global(a) {
          cursor: pointer;
        }
        :global(li) {
          list-style: none;
        }
      `}
    </style>
  </div>
);

export default Home;
