import React from "react";
import * as S from "./StyledComponents/LoginSignup";

export const LoginSignup: React.FC = () => {
  return (
    <S.Container>
      <S.SignUpWrapper>
        <S.Title>Sign Up</S.Title>
        <S.SignUpForm>
          <S.FormInput type="text" placeholder="Your Name" />
          <S.FormInput type="email" placeholder="Email Address" />
          <S.FormInput type="password" placeholder="Password" />
        </S.SignUpForm>
        <S.ContinueButton>Continue</S.ContinueButton>
        <S.HaveAccountText>
          Already have an account? <S.LoginHere>Login here</S.LoginHere>
        </S.HaveAccountText>
        <S.Agree>
          <S.CheckboxInput type="checkbox" name="" id=""/>
          <S.TermsText>By continuing, I agree to the terms of use & privacy policy.</S.TermsText>
        </S.Agree>
      </S.SignUpWrapper>
    </S.Container>
  );
};
