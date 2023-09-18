import { useContext } from "react";
import "./shop.styles.scss";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
export const Shop = () => {
  const products = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.products.map((product) => (
        <ProductCard key={product.id} products={product}>
          {" "}
        </ProductCard>
      ))}
    </div>
  );
};
