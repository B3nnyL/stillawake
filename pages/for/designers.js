import React from "react";
import DesktopNav from "../../components/desktopNav";
import MobileNav from "../../components/mobileNav";
import PageNav from "../../components/pageNav";
import Hero from "../../components/hero";
import BrandContainer from "../../components/brandContainer";
import WorkflowExample from "../../components/workflowExample";
import TestExample from "../../components/testExample";
import QuoteContainer from "../../components/quoteContainer";
import CtaContainer from "../../components/ctaContainer";
import { BRANDS } from "../../utils/brands";
import { BRANDS as MOBILE_BRANDS } from "../../utils/mobileBrands";
import MediaQuery from "react-responsive";
import DocumentExample from "../../components/documentExample";
import CollaborateExample from "../../components/collaborateExample";
import TopBar from "../../components/topbar";
import ResourceContainer from "../../components/resourceContainer";
import Head from "../../components/head";
import Button from "../../components/button";
import DesignAnchorMenu from "../../components/designAnchorMenu";
import DataTestimonialContainer from "../../components/dataTestimonialContainer";
import NavContainer from "../../components/navContainer";
const Design = () => (
  <div>
    <Head title="For Designer - Now" />
    <TopBar>
      👩‍🎤 Make your serverless design system
      <a style={{ textDecoration: "underline", margin: "0px 10px" }}>
        Read more
      </a>
    </TopBar>
    <MediaQuery query="(min-width:997px)">
      <DesktopNav />
      <NavContainer />
      <Hero />
      <BrandContainer brands={BRANDS} />
      <WorkflowExample identity="workflow" />
      <TestExample identity="test" />
      <DocumentExample identity="documentation" />
      <QuoteContainer identity="quote" />
      <DataTestimonialContainer />
      <CollaborateExample identity="collaboration" />
      <ResourceContainer />
      <CtaContainer>
        <h1>Just design, code and push.</h1>
      </CtaContainer>
    </MediaQuery>
    <MediaQuery query="(max-width: 996px)">
      <MobileNav />
      <NavContainer />
      <Hero />
      <BrandContainer brands={BRANDS} />
      <WorkflowExample />
      <TestExample />
      <DocumentExample />
      <QuoteContainer identity="quote" />
      <DataTestimonialContainer />

      <CollaborateExample />
      <ResourceContainer />
      <CtaContainer>
        <h1>Just design, code and push.</h1>
      </CtaContainer>
    </MediaQuery>

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
          font-weight: 600;
          font-size: 42px;
          margin-bottom: 4px;
          color: #000;
        }
        :global(h2) {
          font-weight: 600;
          font-size: 28px;
          margin-bottom: 4px;
          color: #000;
        }
        :global(h3) {
          font-weight: 500;
          font-size: 18px;
          margin-bottom: 4px;
          color: #000;
        }

        :global(h4) {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 4px;
          color: #000;
          text-transform: uppercase;
        }
        :global(a) {
          cursor: pointer;
        }
        :global(li) {
          list-style: none;
        }
        :global(p) {
          line-height: 1.5;
          font-size: 14px;
        }

        :global(.content-enter) {
          opacity: 0;
        }
        :global(.content-enter-active) {
          opacity: 1;
          transition: all 500ms ease-in-out;
        }
        :global(.content-exit) {
          opacity: 0;
        }
        :global(.content-exit-active) {
          opacity: 0.01;
          transition: all 500ms ease-out;
        }

        @media screen and (max-width: 996px) {
           {
            /* :global(*) {
            overflow-x: hidden;
          } */
          }
          :global(h1) {
            text-align: center;
          }
          :global(p) {
            font-size: 16px;
          }
        }
      `}
    </style>
  </div>
);

export default Design;
