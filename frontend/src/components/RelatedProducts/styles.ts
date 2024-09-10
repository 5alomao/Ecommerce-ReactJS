import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
`;

export const Title = styled.h1`
  color: #171717;
  font-size: 3rem;
  font-weight: 600;
`;

export const HrElement = styled.hr`
  width: 12.5rem;
  height: 6px;
  border-radius: 0.625rem;
  background-color: #252525;
`;

export const RelatedProductsList = styled.div`
  display: flex;
  margin: 3rem 0;
  gap: 2rem;
`;
