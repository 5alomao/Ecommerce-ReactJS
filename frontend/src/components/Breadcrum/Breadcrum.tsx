import React from "react";
import { ProductType } from "../../context/ShopContext";
import arrowIcon from "../assets/breadcrum_arrow.png";
import * as S from "./styles";

interface BreadcrumProps {
  product: ProductType;
}

export const Breadcrum: React.FC<BreadcrumProps> = ({ product }) => {
  return (
    <S.Container>
      <S.Text>HOME</S.Text>
      <S.Arrow src={arrowIcon} alt="" />

      <S.Text>SHOP</S.Text>
      <S.Arrow src={arrowIcon} alt="" />

      <S.Text>{product.category}</S.Text>
      <S.Arrow src={arrowIcon} alt="" />

      <S.Text>{product.name}</S.Text>
    </S.Container>
  );
};
