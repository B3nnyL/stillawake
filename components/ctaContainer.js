import Button from "./button";
import withPure from "./hoc/withPure";

const CtaContainer = withPure(({ children }) => (
  <div className="cta-container">
    <div className="cta-container__slogan">{children}</div>
    <div className="cta-container__btns">
      <Button size="large"> Yo</Button>
      <Button size="large" color="white">
        Wats up
      </Button>
    </div>
    <style jsx>
      {`
        .cta-container {
          width: 1017px;
          max-height: 136px;
          margin: 20px auto;
          display: flex;
          justify-content: space-between;
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
      `}
    </style>
  </div>
));

export default CtaContainer;
