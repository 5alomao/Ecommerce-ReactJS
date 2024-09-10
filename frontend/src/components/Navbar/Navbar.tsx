import { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart_icon.png";
import navDropdown from "../assets/dropdown_icon.png";
import * as S from "./styles";

export const Navbar: React.FC = () => {
  const [menu, setMenu] = useState("shop");
  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setNavMenu(false);
      }
    };

    // Adiciona o listener de evento para resize
    window.addEventListener('resize', handleResize);

    // Define o estado inicial baseado na largura da janela
    handleResize();

    // Remove o listener de evento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuRef = useRef<HTMLUListElement>(null);

  const context = useContext(ShopContext);

  if (!context) {
    return <>Loading...</>;
  }

  const { getTotalCartItems } = context;


  return (
    <S.Container>
      <S.NavBrandWrapper>
        <S.NavBrandImage src={logo} alt="" />
        <S.NavBrandText>SHOPPER</S.NavBrandText>
      </S.NavBrandWrapper>
      <S.Dropdown  $isOpen={navMenu} onClick={()=>setNavMenu(!navMenu)} src={navDropdown} alt="" />
      <S.NavMenu $isOpen={navMenu} ref={menuRef}>
        <S.MenuItem onClick={() => setMenu("shop")}>
          <Link to="/">Shop {menu === "shop" ? <S.ItemClicked /> : <></>}</Link>
        </S.MenuItem>
        <S.MenuItem onClick={() => setMenu("mens")}>
          <Link to="/mens">
            Men {menu === "mens" ? <S.ItemClicked /> : <></>}
          </Link>
        </S.MenuItem>
        <S.MenuItem onClick={() => setMenu("womens")}>
          <Link to="/womens">
            Women {menu === "womens" ? <S.ItemClicked /> : <></>}
          </Link>
        </S.MenuItem>
        <S.MenuItem onClick={() => setMenu("kids")}>
          <Link to="/kids">
            Kids {menu === "kids" ? <S.ItemClicked /> : <></>}
          </Link>
        </S.MenuItem>
      </S.NavMenu>
      <S.LoginCartWrapper>
        <Link to="/login">
          <S.Login>Login</S.Login>
        </Link>
        <Link to="/cart">
          <S.Cart src={cartIcon} alt="" />
        </Link>
        <S.CartCount>{getTotalCartItems()}</S.CartCount>
      </S.LoginCartWrapper>
    </S.Container>
  );
};
