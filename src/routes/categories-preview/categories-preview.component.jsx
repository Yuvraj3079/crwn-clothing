import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

export const CategoriesPreview = () => {
  const categoriesMap = useContext(CategoriesContext);
  const newCategoriesMap = categoriesMap.categoriesMap;
  //console.log(newCategoriesMap);

  return (
    <Fragment>
      {Object.keys(newCategoriesMap).map((title) => {
        const products = newCategoriesMap[title];

        //const products = Object.values(categoriesMap[title]);
        //console.log(title);
        //console.log(products);
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
