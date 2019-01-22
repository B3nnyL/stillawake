import Proptypes from "prop-types";
import withPure from "./hoc/withPure";

const Mobile = withPure(({ brands }) => {
  return (
    <div className="brands">
      {brands.map((brand, i) => (
        <li key={i}>
          <div className="brand__container" style={{ animationDelay: `400ms` }}>
            {brand}
          </div>
        </li>
      ))}
      <style jsx>
        {`
          .brands {
            text-align: center;
            width: 1018px;
            min-height: 80px;
            margin: 20px auto;
            display: flex;
            z-index: 200;
            justify-content: space-around;
          }
          .brand__container {
            max-width: 123px;
            max-height: 80px;
            justify-self: center;
            justify-content: center;
            opacity: 0;
            animation-name: example;
            animation-duration: 800ms;
            animation-fill-mode: forwards;
            position: relative;
          }

          @keyframes example {
            to {
              opacity: 1;
            }
          }

          @media screen and (max-width: 996px) {
            .brands {
              width: 90vw;
              margin: 10px auto;
              flex-wrap: nowrap;
              padding: 0px;
            }
            .brand__container {
              max-width: 60px;
              max-height: 40px;
              justify-content: space-evenly;
              opacity: 0;
              animation-name: example;
              animation-duration: 800ms;
              animation-fill-mode: forwards;
              position: relative;
            }
            .brand__container svg {
              width: 66px;
            }
          }
        `}
      </style>
    </div>
  );
});

BrandContainer.proptypes = {
  brands: Proptypes.arrayOf(Proptypes.element)
};

export default BrandContainer;
