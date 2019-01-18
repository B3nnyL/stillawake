import React from "react";
import DesktopNav from "../components/desktopNav";
import MobileNav from "../components/mobileNav";
import PageNav from "../components/pageNav";
import MediaQuery from "react-responsive";
import TopBar from "../components/topbar";
import Head from "../components/head";

const Home = () => (
  <div>
    <Head title="Now" />
    <TopBar>
      👩‍🎤 Make your serverless design system
      <a style={{ textDecoration: "underline", margin: "0px 10px" }}>
        Read The Case Study
      </a>
    </TopBar>
    <MediaQuery query="(min-width:997px)">
      <DesktopNav />
      <PageNav />
    </MediaQuery>
    <MediaQuery query="(max-width: 996px)">
      <MobileNav />
      <PageNav />
    </MediaQuery>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          font-size: 14px;
          color: #444;
          overflow-x: hidden;
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
        :global(p) {
          line-height: 1.5;
          font-size: 14px;
        }

        :global(.message-enter) {
          opacity: 0.01;
          transform: translateY(50%);
        }
        :global(.message-enter-active) {
          opacity: 1;
          transform: translateY(0%);
          transition: all 300ms ease-out;
        }
        :global(.message-exit) {
          opacity: 1;
          transform: translateY(0%);
        }
        :global(.message-exit-active) {
          opacity: 0.01;
          transform: translateY(50%);
          transition: all 300ms ease-out;
        }
        @media screen and (max-width: 699px) {
          :global(*) {
            overflow-x: hidden;
          }
          :global(h1) {
            text-align: center;
          }
          :global(p) {
            font-size: 16px;
          }
          :global(body) {
            scroll-behavior: smooth;
          }
        }
      `}
    </style>
  </div>
);

export default Home;
