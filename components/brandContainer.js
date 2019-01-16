import Proptypes from "prop-types";
import withPure from "./hoc/withPure";

const BrandContainer = withPure(({ brands }) => {
  return (
    <div className="brands">
      {brands.map(brand => (
        <li key={brand}>
          <div className="brand__container">{brand}</div>
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
            padding: 0px 80px;
            justify-content: space-around;
          }
          .brand__container {
            max-width: 123px;
            max-height: 80px;
            justify-self: center;
            justify-content: center;
          }

          @media screen and (max-width: 996px) {
            .brands {
              width: 100vw;
              margin: 10px auto;
              flex-wrap: nowrap;
              padding: 0px;
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
