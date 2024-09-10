import React from "react";
import exclusiveImage from "../assets/exclusive_image.png"
import * as S from "./styles";
export const Offers: React.FC = () => {
  return (
    <S.Container>
      <S.OffersLeft>
        <S.TitleLeft>Exclusive</S.TitleLeft>
        <S.TitleLeft>Offers For You</S.TitleLeft>
        <S.TextLeft>ONLY ON BEST SELLERS PRODUCTS</S.TextLeft>
        <S.CheckNowButton>Check Now</S.CheckNowButton>
      </S.OffersLeft>
      <S.OffersRight>
        <S.ImageRight src={exclusiveImage} alt="" />
      </S.OffersRight>
    </S.Container>
  );
};
