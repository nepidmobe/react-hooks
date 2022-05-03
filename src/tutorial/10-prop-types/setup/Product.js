import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, price, name }) => {
  console.log(image);
  return (
    <article className="product">
      <h4>Single Product</h4>
      <img
        src={(image && image.url) || defaultImage}
        alt={name || "default name"}
      />
      {/* importantt line up */}
      <h4>{name || "default name"}</h4>
      <p>${price || 3.93}</p>
    </article>
  );
};

Product.protoTypes = {
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

// Product.defaultProps = {
//   image: defaultImage,
//   name: "default name",
//   price: 3.99,
// };
//each component has component propTypes(not PropTypes as imported).
//one is import from package and another is property on the component.

export default Product;
//one price missing and url is web link and if there is no img in that url or
//  url is not present on that site we get big flat error
//and last url is missing and you get error if try to display undefined
//so, need to return some static value becauseaccing dynamic value always throw error for above cases...
//now i need to set prop Type that will check missing or errornous type and i need default to replace such value...
//don't need to install prop-types package as it is given directly when we setup create react app...
