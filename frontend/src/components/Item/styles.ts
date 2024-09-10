import styled from "styled-components";

export const Container = styled.section`
  width: 18rem; 
  &:hover {
    transform: scale(1.05);
    transition: 0.6s;
  }

  @media (max-width: 1280px) {
    width: 14rem;
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    width: 10rem;
    font-size: 13px;
  }

  @media (max-width: 800px) {
    width: 8rem;
    font-size: 12px;
  }

  @media (max-width: 500px) {
    width: 10rem;
  }
`;

export const ItemImage = styled.img`
  width: 18rem;

  @media (max-width: 1280px) {
    width: 14rem;
  }

  @media (max-width: 1024px) {
    width: 10rem;
  }

  @media (max-width: 800px) {
    width: 8rem;
  }

  @media (max-width: 500px) {
    width: 10rem;
  }
`;

export const ItemName = styled.p`
  margin: 0.5rem 0;
`;

export const PricesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const ItemPriceNew = styled.strong`
  color: #374151;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ItemPriceOld = styled.p`
  color: #8c8c8c;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: line-through;

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;
