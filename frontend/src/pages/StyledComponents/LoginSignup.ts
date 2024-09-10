import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  /* height: 80vh; */
  background-color: #fce3fe;
  padding: 6rem 0;
`;

export const SignUpWrapper = styled.div`
  width: 35rem;
  /* height: 36rem; */
  background-color: white;
  margin: auto;
  padding: 2.5rem 3.5rem;

  @media (max-width: 1280px) {
    max-width: 500px;
    width: auto;
  }

  @media (max-width: 800px) {
    padding: 20px 30px;
  }
`;

export const Title = styled.h1`
  margin: 1.25rem 0;

  @media (max-width: 1280px) {
    margin: 10px 0;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1280px) {
    margin-top: 20px;
    gap: 20px;
  }

  @media (max-width: 800px) {
    margin-top: 20px;
  }
`;

export const FormInput = styled.input`
  height: 4.5rem;
  width: 100%;
  padding: 1.25rem;
  border: 1px solid #c9c9c9;
  font-size: 1.1rem;
  outline: none;
  color: #5c5c5c;

  @media (max-width: 1280px) {
    height: 4rem;
  }

  @media (max-width: 800px) {
    height: 3rem;
  }
`;

export const ContinueButton = styled.button`
  width: 100%;
  height: 2.5rem;
  color: white;
  background-color: #ff4141;
  margin: 2rem 0 0 0;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  border: none;

  @media (max-width: 1280px) {
    font-size: 1.3rem;
  }

  @media (max-width: 800px) {
    height: 3rem;
    font-size: 1rem;
  }
`;

export const HaveAccountText = styled.p`
  margin-top: 1.25rem;
  color: #5c5c5c;
  font-size: 1.1rem;
  font-weight: 500;

  @media (max-width: 1280px) {
    font-size: 1rem;
  }
`;

export const LoginHere = styled.span`
  color: #ff4141;
  font-weight: 600;
`;

export const Agree = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1.25rem;
  font-size: 1.1rem;
  color: #5c5c5c;
  font-weight: 500;

  @media (max-width: 1280px) {
    font-size: 14px;
    gap: 10px;
  }
`;

export const CheckboxInput = styled.input``;

export const TermsText = styled.p``;
