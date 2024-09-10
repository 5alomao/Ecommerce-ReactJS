import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 800px) {
    gap: 1.25rem;
  }
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 800px) {
    gap: 0.625rem;
    align-items: end;
  }
`;

export const FooterLogo = styled.img`
  @media (max-width: 800px) {
    width: 2.5rem;
  }
`;

export const Text = styled.p`
  color: #383838;
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;
  color: #252525;
  font-size: 1.25rem;

  @media (max-width: 800px) {
    font-size: 0.8rem;
    gap: 0.625rem;
  }
`;

export const LinkItem = styled.li`
  cursor: pointer;
`;

export const SocialIcon = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const SocialIconContainer = styled.div`
  padding: 0.625rem;
  padding-bottom: 0.5rem;
  background-color: #fbfbfb;
  border: 1px solid #ebebeb;
`;

export const SocialIconImage = styled.img`
  @media (max-width: 800px) {
    width: 1.5rem;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;

export const HrElement = styled.hr`
  width: 80%;
  border: none;
  border-radius: 0.625rem;
  height: 0.25rem;
  background: #c7c7c7;
`;

export const CopyrightText = styled.p`
  color: #1a1a1a;
  font-size: 1.25rem;

  @media (max-width: 800px) {
    font-size: 13px;
  }
`;
