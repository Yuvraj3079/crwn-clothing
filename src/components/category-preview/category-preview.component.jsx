import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span>{title}</span>
      </h2>
      {
        //console.log(products)
      }
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
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
