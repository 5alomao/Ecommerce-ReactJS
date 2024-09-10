import { Item } from "../Item/Item";
import newCollection from "../assets/new_collections";

import * as S from "./styles";

export const NewCollections: React.FC = () => {
  return (
    <S.Container>
      <S.Title>NEW COLLECTIONS</S.Title>
      <S.HrElement />
      <S.CollectionsItemList>
        {newCollection.map((item, i) => {
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
      </S.CollectionsItemList>
    </S.Container>
  );
};
