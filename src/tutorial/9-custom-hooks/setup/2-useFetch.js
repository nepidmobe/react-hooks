import { useState, useEffect } from "react";
// When we create our own custom hooks you need to use the use eg useFetch in GitHub customs
//  hooks. This is because we made hooks using hooks like useState and useEffect and
//  we are not allowed to use hooks inside regular function so, either function need to be a
//  component starting with uppercase or need to be custom hook starting with use.

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  //we want to run one time when we invoke function and when we change url
  return { loading, products };
};
