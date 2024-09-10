import React, { useContext } from "react";
import { ProductType, ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../components/DescriptionBox/DescriptionBox";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts";

const useProduct = (productId: number): ProductType | undefined => {
  const context = useContext(ShopContext);

  if (context) {
    const { allProducts } = context;
    const product = allProducts.find((p) => p.id === productId);

    if (!product) {
      throw new Error("Produto não encontrado");
    }

    return product;
  }
};

export const Product: React.FC = () => {
  const { productId } = useParams();

  const product = useProduct(Number(productId));

  return (
    <>
      {product ? (
        <>
          <Breadcrum product={product} />
          <ProductDisplay product={product} />
          <DescriptionBox />
          <RelatedProducts />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
