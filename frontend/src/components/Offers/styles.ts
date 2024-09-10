import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  /* height: 60vh; */
  display: flex;
  margin: auto;
  padding: 0 10rem;
  margin-bottom: 10rem;
  overflow-y: hidden;
  background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);

  @media (max-width: 1280px) {
    padding: 0 5rem;
    margin-bottom: 7.5rem;
  }

  @media (max-width: 1024px) {
    padding: 0 4rem;
    margin-bottom: 5rem;
    /* height: 50vh; */
  }

  @media (max-width: 800px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 500px) {
    margin-bottom: 3rem;
    /* height: 25vh; */
  }
`;

export const OffersLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OffersRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 3rem;

  @media (max-width: 1280px) {
    padding-top: 2rem;
  }
`;

export const TitleLeft = styled.h1`
  color: #171717;
  font-size: 4rem;
  font-weight: 600;

  @media (max-width: 1280px) {
    font-size: 3rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const TextLeft = styled.p`
  color: #171717;
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 1280px) {
    font-size: 1.25rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const CheckNowButton = styled.button`
  width: 17.5rem;
  height: 4.5rem;
  border-radius: 2rem;
  background-color: #ff4141;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 2rem;
  cursor: pointer;

  @media (max-width: 1280px) {
    width: 14rem;
    height: 3rem;
    font-size: 1.25rem;
  }

  @media (max-width: 1024px) {
    width: 10rem;
    height: 2.5rem;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    width: 9rem;
    height: 2rem;
    font-size: 12px;
  }

  @media (max-width: 500px) {
    width: 8rem;
    height: 1.5rem;
    font-size: 10px;
  }
`;

export const ImageRight = styled.img`
  @media (max-width: 1280px) {
    width: 300px;
  }

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 800px) {
    width: 180px;
  }

  @media (max-width: 500px) {
    width: 150px;
  }
`;
