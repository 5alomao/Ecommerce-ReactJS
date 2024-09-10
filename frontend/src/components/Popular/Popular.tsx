import React from "react";
import * as S from "./styles";

import dataProduct from "../assets/data";
import { Item } from "../Item/Item";

export const Popular: React.FC = () => {
  return (
    <S.Container>
      <S.Title>POPULAR IN WOMEN</S.Title>
      <S.HrElement />
      <S.PopularItemList>
        {dataProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </S.PopularItemList>
    </S.Container>
  );
};
