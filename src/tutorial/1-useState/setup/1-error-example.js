import React from "react";
//example why we need use state, even test updated, component don't rerender
const ErrorExample = () => {
  let title = "dipen is awesome";
  const handleClick = () => {
    title = "dipen is not too awesome";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change text
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
