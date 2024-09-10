import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 3rem 9rem;
  margin-bottom: 10rem;
  background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
  gap: 2rem;

  @media (max-width: 1280px) {
    padding: 2.5rem 5rem;
    margin-bottom: 8rem;
    gap: 1.25rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 500px) {
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  color: #454545;
  font-size: 3rem;
  font-weight: 600;

  @media (max-width: 1280px) {
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  color: #454545;
  font-size: 1.25rem;

  @media (max-width: 1280px) {
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
  }

  @media (max-width: 500px) {
    max-width: 200px;
    text-align: center;
    font-size: 13px;
  }
`;

export const NewsLetterForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 45rem;
  border-radius: 5rem;
  height: 4.5rem;
  border: 1px solid #e3e3e3;

  @media (max-width: 1280px) {
    width: 600px;
    height: 4rem;
  }

  @media (max-width: 1024px) {
    width: 500px;
    height: 3rem;
  }

  @media (max-width: 800px) {
    width: 400px;
    height: 2.5rem;
  }

  @media (max-width: 500px) {
    width: 290px;
  }
`;

export const EmailInput = styled.input`
  width: 30rem;
  margin-left: 2rem;
  border: none;
  outline: none;
  color: #616161;
  font-size: 1rem;

  @media (max-width: 1280px) {
    width: 400px;
  }

  @media (max-width: 1024px) {
    width: 300px;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    width: 200px;
    font-size: 13px;
  }

  @media (max-width: 800px) {
    width: 130px;
  }
`;

export const SubscribeButton = styled.button`
  width: 12.5rem;
  height: 4.5rem;
  border-radius: 5rem;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 1280px) {
    width: 160px;
    height: 4rem;
  }

  @media (max-width: 1024px) {
    width: 120px;
    height: 3rem;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    width: 100px;
    height: 2.5rem;
    font-size: 12px;
  }

`;
