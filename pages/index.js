import React from "react";
import Link from "next/link";
import DesktopNav from "../components/desktopNav";
import MobileNav from "../components/mobileNav";
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
    </div>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          font-size: 14px;
        }
        :global(*) {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        :global(h2) {
          font-weight: 500;
          font-size: 16px;
          margin-bottom: 4px;
        }
        :global(h3) {
          font-weight: 500;
          font-size: 15px;
          margin-bottom: 4px;
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
