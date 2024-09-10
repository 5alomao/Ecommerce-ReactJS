import React from "react";
import dataProduct from "../assets/data";

import * as S from "./styles";
import { Item } from "../Item/Item";

export const RelatedProducts: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Related Products</S.Title>
      <S.HrElement />
      <S.RelatedProductsList>
        {dataProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </S.RelatedProductsList>
    </S.Container>
  );
};
