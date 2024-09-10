import styled from "styled-components";

export const Container = styled.section``;

export const Banner = styled.img`
  display: block;
  margin: 2rem auto;
  width: 80%;

  @media (max-width: 1280px) {
    margin: 1.25rem auto;
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const IndexSort = styled.div`
  display: flex;
  margin: 0 10rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    width: 90%;
    margin: auto;
  }
`;

export const Text = styled.p`
  @media (max-width: 1280px) {
    font-size: 12px;
  }
`;

export const TextSpan = styled.span`
  font-weight: 600;
`;

export const Sort = styled.div`
  padding: 0.625rem 1.25rem;
  border-radius: 2.5rem;
  border: 1px solid #888;

  @media (max-width: 1280px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

export const SortImage = styled.img``;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  row-gap: 5rem;
  margin: 1.25rem 0;

  @media (max-width: 1280px) {
    width: 90%;
    margin: 10px auto;
    row-gap: 2.5rem;
  }

  @media (max-width: 800px) {
    width: 95%;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

`;

export const LoadMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7rem auto;

  @media (max-width: 1280px) {
    margin: 6rem auto;
  }

  @media (max-width: 800px) {
    margin: 4rem auto;
  }
`;

export const LoadMore = styled.button`
  border: none;
  width: 15rem;
  height: 4.5rem;
  background-color: #ededed;
  color: #787878;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 4.5rem;

  @media (max-width: 1280px) {
    width: 200px;
    height: 4rem;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    width: 150px;
    height: 2.5rem;
    font-size: 13px;
  }
`;
