import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDcouments } from "../utils/firebase/firebase.util";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  /*
to get the data in FireStore
  useEffect(() => {
    addCollectionAndDcouments("categories", SHOP_DATA);
  }, []);
*/
  useEffect(() => {
    const getCategoriesMap = async () => {
      const catgoryMap = await getCategoriesAndDcouments();
      console.log(catgoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
