import Button from "./button";
import withPure from "./hoc/withPure";

const CtaContainer = withPure(({ children }) => (
  <div className="cta-container">
    <div className="cta-container__slogan">{children}</div>
    <div className="cta-container__btns">
      <Button size="large"> Try it free</Button>
      <Button size="large" color="white">
        About Now
      </Button>
    </div>
    <style jsx>
      {`
        .cta-container {
          max-width: 1012px;
          max-height: 500px;
          margin: 20px auto;
          padding: 46px 0px;
          display: flex;
          justify-content: space-around;
        }
        .cta-container__slogan {
          max-width: 300px;
          font-weight: 600;
        }
        .cta-container__btns {
          display: flex;
          width: 464px;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 996px) {
          .cta-container {
            width: 90vw;
            max-height: 500px;
            margin: 0px auto;
            padding: 40px 0px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .cta-container__slogan {
            max-width: 90vw;
            padding-bottom: 40px;
            margin: 0 auto;
          }
          .cta-container__btns {
            display: flex;
            flex-direction: column;
            height: 150px;
            width: 100%;
            justify-content: space-around;
            align-items: center;
          }
        }
      `}
    </style>
  </div>
));

export default CtaContainer;
