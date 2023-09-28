import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      {
        //console.log(products)
      }
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
/*
      {Object.keys(products).map((product) => {
        console.log(product);
        product.map();
      })}

<div className="category-preview-container">
<h2>
  <span>{title.toUpperCase()}</span>
</h2>
{console.log(title)}
{console.log(products)}
<div className="preview">
  {products
    .filter((_, idx) => idx < 4)
    .map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
</div>
</div>*/
