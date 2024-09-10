import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 5% 0;
  /* height: 100vh; */

  @media (max-width: 1280px) {
    /* height: 80vh; */
  }

  @media (max-width: 1024px) {
    /* height: 70vh; */
  }

  @media (max-width: 500px) {
    /* height: 100vh; */
    gap: 0.5rem;
  }
`;

export const Title = styled.h1`
  color: #171717;
  font-size: 3rem;
  font-weight: 600;

  @media (max-width: 1280px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    font-size: 1.25rem;
  }
`;

export const HrElement = styled.hr`
  width: 12.5rem;
  height: 0.5rem;
  border-radius: 0.625rem;
  background-color: #252525;

  @media (max-width: 1280px) {
    width: 10rem;
    height: 0.25rem;
  }

  @media (max-width: 1024px) {
    width: 7.5rem;
    height: 0.2rem;
  }

  @media (max-width: 800px) {
    width: 6rem;
  }
`;

export const PopularItemList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3%;
  margin-top: 3rem;
  gap: 2rem;

  @media (max-width: 1280px) {
    gap: 1.25rem;
    margin-top: 2rem;
  }

  @media (max-width: 1024px) {
    gap: 1rem;
    margin-top: 1.25rem;
  }

  @media (max-width: 800px) {
    gap: 0.5rem;
  }

  @media (max-width: 570px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    place-items: center;
  }
`;
