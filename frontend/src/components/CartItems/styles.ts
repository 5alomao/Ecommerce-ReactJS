import styled from "styled-components";

export const Container = styled.section`
  margin: 6.25rem 5rem;
`;

export const FormatMain = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  place-items: center;
  /* gap: 4.5rem; */
  padding: 1.5rem 0;
  font-size: 1.2rem;
  color: #454545;
  font-weight: 600;
`;

export const InfoTitle = styled.p``;

export const HrElement = styled.hr`
  height: 3px;
  background-color: #e2e2e2;
  border: 0;
`;

export const FormatWrapper = styled.div``;

export const Format = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  place-items: center;
  /* gap: 4.5rem; */
  padding: 1.5rem 0;
  font-size: 1rem;
  color: #454545;
  font-weight: 500;
`;

export const FImage = styled.img`
  height: 4rem;
`;

export const FText = styled.p``;

export const FQuantity = styled.button`
  height: 3rem;
  border: 2px solid #ebebeb;
  background-color: #fff;
  width: 4rem;
`;

export const FRemoveIcon = styled.img`
  width: 1rem;
  margin: 0 2.5rem;
  cursor: pointer;
`;

export const Down = styled.div`
  display: flex;
  margin: 6.25rem 0;
`;

export const Total = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 12.5rem;
  gap: 2.5rem;
`;

export const DownTitle = styled.h1``;

export const Wrapper = styled.div``;

export const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const TotalItemText = styled.p``;

export const TotalItemTextH3 = styled.h3``;

export const TotalItemHr = styled.hr``;

// 8 16 24 32 40 48 56 64 72 80

export const CheckoutButton = styled.button`
  width: 16.5rem;
  height: 3.5rem;
  outline: none;
  border: none;
  background-color: #ff5a5a;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
`;

export const Promocode = styled.div`
  flex: 1;
  font-size: 1rem;
  font-weight: 500;
`;

export const PromoText = styled.p`
  color: #555;
`;

export const PromoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  margin-top: 1rem;
  padding-left: 1.25rem;
  height: 3.5rem;
  background-color: #eaeaea;
`;

export const PromoInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  width: 20rem;
  height: 3rem;
`;

export const PromoSubmit = styled.button`
  width: 10rem;
  height: 3.5rem;
  background: black;
  color: white;
  cursor: pointer;
`;
