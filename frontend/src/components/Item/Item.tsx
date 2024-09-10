import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

interface ItemProps {
  id: number;
  image: string;
  name: string;
  newPrice: number;
  oldPrice: number;
}

export const Item: React.FC<ItemProps> = ({
  id,
  image,
  name,
  newPrice,
  oldPrice,
}) => {
  return (
    <S.Container>
      <Link to={`/product/${id}`}>
        <S.ItemImage onClick={() => window.scrollTo(0, 0)} src={image} />
      </Link>
      <S.ItemName>{name}</S.ItemName>
      <S.PricesWrapper>
        <S.ItemPriceNew>${newPrice}</S.ItemPriceNew>
        <S.ItemPriceOld>${oldPrice}</S.ItemPriceOld>
      </S.PricesWrapper>
    </S.Container>
  );
};
