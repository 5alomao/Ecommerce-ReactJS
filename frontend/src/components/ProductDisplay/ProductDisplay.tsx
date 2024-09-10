import React, { useContext } from "react";
import { ProductType, ShopContext } from "../../context/ShopContext";
import starIcon from "../assets/star_icon.png";
import starDullIcon from "../assets/star_dull_icon.png";
import * as S from "./styles";

interface ProductDisplayProps {
  product: ProductType;
}

export const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const context = useContext(ShopContext);

  if (!context) {
    return <>Loading...</>;
  }

  const { addToCart } = context;


  return (
    <S.Container>
      <S.DisplayLeft>
        <S.ImageList>
          <S.ProductImage src={product.image} alt="" />
          <S.ProductImage src={product.image} alt="" />
          <S.ProductImage src={product.image} alt="" />
          <S.ProductImage src={product.image} alt="" />
        </S.ImageList>
        <S.DisplayImage>
          <S.ProductMainImage src={product.image} alt="" />
        </S.DisplayImage>
      </S.DisplayLeft>
      <S.DisplayRight>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductStar>
          <S.StarIcon src={starIcon} alt="" />
          <S.StarIcon src={starIcon} alt="" />
          <S.StarIcon src={starIcon} alt="" />
          <S.StarIcon src={starIcon} alt="" />
          <S.StarDullIcon src={starDullIcon} alt="" />
          <S.Rating>(122)</S.Rating>
        </S.ProductStar>
        <S.DisplayPrices>
          <S.OldPrice>${product.old_price}</S.OldPrice>
          <S.NewPrice>${product.new_price}</S.NewPrice>
        </S.DisplayPrices>
        <S.ProductDescription>
          A lightweight, usually knitted, pullover shirt, close-fitting, and
          wish a round neckline and short sleeves, worn as an undershirt or
          outer garment
        </S.ProductDescription>
        <S.DisplaySizes>
          <S.SelectSize>Select Size</S.SelectSize>
          <S.ProductSizes>
            <S.Size>S</S.Size>
            <S.Size>M</S.Size>
            <S.Size>L</S.Size>
            <S.Size>XL</S.Size>
            <S.Size>XXL</S.Size>
          </S.ProductSizes>
        </S.DisplaySizes>
        <S.AddToCart onClick={() => addToCart(product.id)}>
          ADD TO CART
        </S.AddToCart>
        <S.CategoryTagsText>
          <S.CategoryTagsSpan>Category: </S.CategoryTagsSpan>
          Women, T-Shirt, Crop, Top
        </S.CategoryTagsText>
        <S.CategoryTagsText>
          <S.CategoryTagsSpan>Tags: </S.CategoryTagsSpan>
          Modern, Latest
        </S.CategoryTagsText>
      </S.DisplayRight>
    </S.Container>
  );
};
