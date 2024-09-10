import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  box-shadow: 0 1px 3px -2px black;
  align-items:center;

  @media (max-width: 1280px) {
    padding: 12px 50px;
  }

  @media (max-width: 1024px) {
    padding: 12px 30px;
  }

  @media (max-width: 800px) {
    padding: 10px 0;
  }

  @media (max-width: 500px) {
    padding: 8px 0;
    gap: 0;
  }
`;

export const NavBrandWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 500px) {
    transform: scale(0.8);
  }
`;

export const NavBrandImage = styled.img`
  @media (max-width: 1280px) {
    width: 2.5rem;
  }
`;

export const NavBrandText = styled.h1`
  color: #171717;
  font-weight: 600;
  font-size: 2rem;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
`;

interface DropdownProps {
  $isOpen: boolean;
}

export const Dropdown = styled.img<DropdownProps>`
  display: none;
  @media (max-width: 800px) {
    display: block;
    object-fit: contain;
    rotate: ${({ $isOpen }) => ($isOpen ? "0" : "-90deg")};
    transition: 0.5s;
  }
`;

interface NavMenuProps {
  $isOpen: boolean;
}

export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 3rem;
  color: #626262;
  font-size: 1.25rem;
  font-weight: 500;

  @media (max-width: 1280px) {
    gap: 2rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    height: 5rem;
    width: 100%;
    position: absolute;
    background-color: white;
    justify-content: center;
    top: 3rem;
  }

  @media (max-width: 500px) {
    height: 4.5rem;
  }
`;

export const MenuItem = styled.li`
  a {
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;
  }
`;

export const ItemClicked = styled.hr`
  border: none;
  width: 80%;
  height: 0.25rem;
  border-radius: 0.625rem;
  background-color: #ff4141;
`;

export const LoginCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1280px) {
    gap: 2rem;
  }

  @media (max-width: 500px) {
    transform: scale(0.8);
  }
`;

export const Login = styled.button`
  width: 8rem;
  height: 2.5rem;
  outline: none;
  border: 1px solid #7a7a7a;
  border-radius: 4.5rem;
  font-size: 1.25rem;
  color: #515151;
  font-weight: 500;
  background-color: white;
  cursor: pointer;

  &:active {
    background-color: #f3f3f3;
  }

  @media (max-width: 1280px) {
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    width: 5rem;
    height: 2rem;
    font-size: 14px;
  }
`;

export const Cart = styled.img`
  @media (max-width: 1024px) {
    width: 2rem;
  }
`;

export const CartCount = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
  margin-left: -3.5rem;
  border-radius: 50%;
  font-size: 0.8rem;
  background-color: red;
  color: white;

  @media (max-width: 1280px) {
    margin-left: -2.5rem;
    font-size: 12px;
  }
  @media (max-width: 1024px) {
    width: 18px;
    height: 18px;
  }
`;
