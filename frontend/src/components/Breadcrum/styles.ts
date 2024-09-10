import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #5e5e5e;
  font-size: 1rem;
  font-weight: 600;
  margin: 2rem 5rem;
  text-transform: capitalize;

  @media (max-width: 1280px) {
    margin: 2rem 3rem;
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    margin: 2rem 2rem;
    font-size: 13px;
  }

  @media (max-width: 800px) {
    margin: 2rem 10px;
    font-size: 12px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const Text = styled.p``;

export const Arrow = styled.img``;
