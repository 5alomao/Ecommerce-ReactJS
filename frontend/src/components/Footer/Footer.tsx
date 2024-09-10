import React from "react";

import footerLogo from "../assets/logo_big.png";
import instagramIcon from "../assets/instagram_icon.png";
import pinterestIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

import * as S from "./styles";
export const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.FooterLogoWrapper>
        <S.FooterLogo src={footerLogo} alt="" />
        <S.Text>SHOPPER</S.Text>
      </S.FooterLogoWrapper>
      <S.LinksList>
        <S.LinkItem>Company</S.LinkItem>
        <S.LinkItem>Products</S.LinkItem>
        <S.LinkItem>Offices</S.LinkItem>
        <S.LinkItem>About</S.LinkItem>
        <S.LinkItem>Contact</S.LinkItem>
      </S.LinksList>
      <S.SocialIcon>
        <S.SocialIconContainer>
          <S.SocialIconImage src={instagramIcon} alt=""/>
        </S.SocialIconContainer>
        <S.SocialIconContainer>
          <S.SocialIconImage src={pinterestIcon} alt=""/>
        </S.SocialIconContainer>
        <S.SocialIconContainer>
          <S.SocialIconImage src={whatsappIcon} alt=""/>
        </S.SocialIconContainer>
      </S.SocialIcon>
      <S.Copyright>
        <S.HrElement />
        <S.CopyrightText>Copyright @ 2024 - All Right Reserved.</S.CopyrightText>
      </S.Copyright>
    </S.Container>
  );
};
