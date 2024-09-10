import React from "react";
import * as S from "./styles";
export const DescriptionBox: React.FC = () => {
  return (
    <S.Container>
      <S.Navigator>
        <S.NavboxDescription>Description</S.NavboxDescription>
        <S.NavboxReviews>Reviews (122)</S.NavboxReviews>
      </S.Navigator>

      <S.Description>
        <S.DescriptionText>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over the internet servers as a virtual
          marketplace where businesses and individual showcase their products,
          interact with customers, and conduces transactions without the need
          for a physical presence. E-commerce websites have gained immense
          popularity due to their convenial accessibility, and the global reach
          they offer.
        </S.DescriptionText>
        <S.DescriptionText>
          E-commerce webistes typically display products or services a detailed
          descriptions, images, prices, and any available var(e.g, sizes,
          colors). Each product usually has it own dedicated with relevant
          information.
        </S.DescriptionText>
      </S.Description>
    </S.Container>
  );
};
