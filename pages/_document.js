import Document, { Head, Main, NextScript } from "next/document";
import CustomisedHead from "../components/customisedHead";
export default class Site extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <CustomisedHead />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
