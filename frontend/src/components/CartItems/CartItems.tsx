import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";
import * as S from "./styles";

export const CartItems: React.FC = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return <>Loading ...</>;
  }

  const { allProducts, cartItems, removeFromCart, getTotalCartAmount } =
    context;

  return (
    <S.Container>
      <S.FormatMain>
        <S.InfoTitle>Products</S.InfoTitle>
        <S.InfoTitle>Title</S.InfoTitle>
        <S.InfoTitle>Price</S.InfoTitle>
        <S.InfoTitle>Quantity</S.InfoTitle>
        <S.InfoTitle>Total</S.InfoTitle>
        <S.InfoTitle>Remove</S.InfoTitle>
      </S.FormatMain>
      <S.HrElement />
      {allProducts.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <S.FormatWrapper>
              <S.Format>
                <S.FImage src={product.image} alt="" />
                <S.FText>{product.name}</S.FText>
                <S.FText>${product.new_price}</S.FText>
                <S.FQuantity>{cartItems[product.id]}</S.FQuantity>
                <S.FText>${product.new_price * cartItems[product.id]}</S.FText>
                <S.FRemoveIcon
                  src={removeIcon}
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                  alt=""
                />
              </S.Format>
              <S.HrElement />
            </S.FormatWrapper>
          );
        }
        return null;
      })}
      <S.Down>
        <S.Total>
          <S.DownTitle>cart Totals</S.DownTitle>
          <S.Wrapper>
            <S.TotalItem>
              <S.TotalItemText>Subtotal</S.TotalItemText>
              <S.TotalItemText>${getTotalCartAmount()}</S.TotalItemText>
            </S.TotalItem>
            <S.TotalItemHr />
            <S.TotalItem>
              <S.TotalItemText>Shipping Fee</S.TotalItemText>
              <S.TotalItemText>Free</S.TotalItemText>
            </S.TotalItem>
            <S.TotalItemHr />
            <S.TotalItem>
              <S.TotalItemTextH3>Total</S.TotalItemTextH3>
              <S.TotalItemTextH3>${getTotalCartAmount()}</S.TotalItemTextH3>
            </S.TotalItem>
          </S.Wrapper>
          <S.CheckoutButton>PROCEED TO CHECKOUT</S.CheckoutButton>
        </S.Total>
        <S.Promocode>
          <S.PromoText>If you have a promo code, Enter it here</S.PromoText>
          <S.PromoBox>
            <S.PromoInput type="text" placeholder="promo code" />
            <S.PromoSubmit>Submit</S.PromoSubmit>
          </S.PromoBox>
        </S.Promocode>
      </S.Down>
    </S.Container>
  );
};
