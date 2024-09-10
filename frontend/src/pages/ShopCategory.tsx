import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

import dropdownIcon from "../components/assets/dropdown_icon.png";

import * as S from "./StyledComponents/ShopCategory";
import { Item } from "../components/Item/Item";

interface ShopCategoryProps {
  banner: string;
  category: string;
}

export const ShopCategory: React.FC<ShopCategoryProps> = ({
  banner,
  category,
}) => {
  const context = useContext(ShopContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { allProducts } = context;

  return (
    <S.Container>
      <S.Banner src={banner} alt="" />
      <S.IndexSort>
        <S.Text>
          <S.TextSpan>Showing 1-12</S.TextSpan> out of 36 products
        </S.Text>
        <S.Sort>
          <>Sort by</> <S.SortImage src={dropdownIcon} alt="" />
        </S.Sort>
      </S.IndexSort>
      <S.ProductsList>
        {allProducts.map((item, i) => {
          if (category === item.category) {
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
          } else {
            return null;
          }
        })}
      </S.ProductsList>
      <S.LoadMoreWrapper>
        <S.LoadMore>Explore More</S.LoadMore>
      </S.LoadMoreWrapper>
    </S.Container>
  );
};
