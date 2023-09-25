import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDcouments } from "../utils/firebase/firebase.util";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  /*
to get the data in FireStore
  useEffect(() => {
    addCollectionAndDcouments("categories", SHOP_DATA);
  }, []);
*/
  useEffect(() => {
    const getCategoriesMap = async () => {
      const catgoryMap = await getCategoriesAndDcouments();
      //console.log(catgoryMap);
      setCategoriesMap(catgoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  //console.log(value);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
