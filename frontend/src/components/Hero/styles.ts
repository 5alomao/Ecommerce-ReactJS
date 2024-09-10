import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100vh;
  background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  padding-left: 11.25rem;
  line-height: 1.5;

  @media (max-width: 1280px) {
    padding-left: 7rem;
  }

  @media (max-width: 1024px) {
    padding-left: 6rem;
  }

  @media (max-width: 800px) {
    padding-left: 3rem;
  }
`;

export const Title = styled.h2`
  color: #090909;
  font-size: 1.5rem;

  @media (max-width: 1280px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const Wrapper = styled.div``;

export const HandHandIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const Text = styled.p`
  color: #171717;
  font-size: 3.5rem;
  font-weight: 600;

  @media (max-width: 1280px) {
    font-size: 3rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 800px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const HandHandIconImage = styled.img`
  width: 5.25rem;

  @media (max-width: 1280px) {
    width: 4.5rem;
  }

  @media (max-width: 1024px) {
    width: 4rem;
  }
  @media (max-width: 500px) {
    width: 3.5rem;
  }
`;

export const LatestButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  width: 15rem;
  border-radius: 4.5rem;
  background-color: #ff4141;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 1280px) {
    gap: 0.625rem;
    width: 14rem;
    font-size: 15px;
  }

  @media (max-width: 1024px) {
    width: 13rem;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    width: 12rem;
    font-size: 13px;
  }
`;

export const LatestTitle = styled.h3`
  color: white;
`;

export const LatestImage = styled.img``;

export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const HeroImage = styled.img`
  width: 500px;
  display: block;

  @media (max-width: 1280px) {
    width: 400px;
  }
  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 800px) {
    width: 290px;
  }
`;
