import { Fragment } from "react";
const CustomisedHead = ({ title, description }) => (
  <Fragment>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title || "Made with Next.js"}</title>
    <meta name="description" content={description || "Here's the app"} />
  </Fragment>
);

export default CustomisedHead;
