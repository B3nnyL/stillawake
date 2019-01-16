import Proptypes from "prop-types";
import withPure from "./hoc/withPure";
import Button from "./button";

const content = (
  <p>
    Empowered by serverless solution, <b>Now</b> makes your design system
    building process smoother and faster
  </p>
);

const Hero = withPure(
  ({
    title = "Scale design system efficiently",
    content = "Empowered by serverless solution, Now makes your design system building process smoother and faster"
  }) => {
    return (
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero--title">{title}</h1>
          <p className="hero--content">{content}</p>
          <div className="hero--ctas">
            <Button size="large">Sign Up Free</Button>
            <Button color="white" size="large">
              Read Report
            </Button>
          </div>
        </div>
        <style jsx>
          {`
            .hero {
              text-align: center;
              width: 1018px;
              min-height: 150px;
              margin: 70px auto;
              display: grid;
              grid-template-columns: 150px auto 150px;
              z-index: 200;
            }
            .hero__container {
              grid-column: 2/3;
              justify-self: center;
            }
            .hero--title {
              font-size: 46px;
              text-align: center;
              font-weight: 600;
              line-height: 1.5;
              margin-bottom: 41px;
              text-transform: capitalize;
            }

            .hero--content {
              padding: 0 80px;
            }
            .hero--ctas {
              display: flex;
              padding: 80px 8px 0px;
              position: relative;
              justify-content: center;
            }

            @media screen and (max-width: 996px) {
              .hero {
                text-align: center;
                width: 100vw;
                min-height: 150px;
                margin: 70px auto;
                display: grid;
                grid-template-columns: 10px auto 10px;
                z-index: 200;
              }

              .hero--ctas {
                display: flex;
                flex-direction: column;
                padding: 80px 8px 0px;
                position: relative;
                margin: 0 auto;
                align-items: center;
                justify-content: space-evenly;
                height: 200px;
              }
            }
          `}
        </style>
      </div>
    );
  }
);

Hero.proptypes = {
  title: Proptypes.string,
  content: Proptypes.oneOfType([Proptypes.string, Proptypes.element])
};

export default Hero;
