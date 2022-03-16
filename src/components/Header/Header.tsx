import { useTranslation } from "react-i18next";
import "./HeaderStyle.scss";
import "../../i18n/index";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Hamburguer from "../../images/hamburguer.png";
import Close from "../../images/close.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useContext(GlobalContext);
  const [menu, setMenu] = useState("-300px");
  const [hamburguer, setHamburguer] = useState(Hamburguer);

  const changeTheme = () => {
    if (state.theme === "DARK") {
      dispatch({
        type: "CHANGE_THEME",
        payload: {
          theme: "LIGHT",
          textFont: "#232323",
          titleFont: "#000",
          firstBackground: "#fff",
          secondBackground: "#ddd",
        },
      });
    } else {
      dispatch({
        type: "CHANGE_THEME",
        payload: {
          theme: "DARK",
          textFont: "#ddd",
          titleFont: "#fff",
          firstBackground: "#232323",
          secondBackground: "#332F2E",
        },
      });
    }
  };

  let imageURL = "";
  if (state.theme === "LIGHT") {
    imageURL = "https://img.icons8.com/ios-filled/26/000000/sun--v1.png";
  } else {
    imageURL =
      "https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/26/000000/external-moon-web-smashingstocks-glyph-smashing-stocks.png";
  }

  const handleOpenMenu = () => {
    if (menu === "-300px") {
      setMenu("58px");
      setHamburguer(Close);
    } else {
      setMenu("-300px");
      setHamburguer(Hamburguer);
    }
  };

  const handleMenuDisplay = () => {
    setMenu("-300px");
    setHamburguer(Hamburguer);
  };

  return (
    <header>
      <nav className="desktopMenu">
        <a className="start" href="#start">
          {t("header:home")}
        </a>
        <div className="headerRight">
          <a href="#portfolio" className="portfolio">
            {t("header:portfolio")}
          </a>
          <a href="#about" className="about">
            {t("header:about")}
          </a>
          <a href="#contact" className="contact">
            {t("header:contact")}
          </a>

          <div className="languageButtons">
            <a
              role="button"
              onClick={() => {
                i18n.changeLanguage("ptBR");
              }}
            >
              <img
                src={"https://img.icons8.com/office/20/000000/brazil.png"}
                alt="pt-BR"
              />
            </a>
            <a
              role="button"
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              <img
                src="https://img.icons8.com/office/20/000000/usa.png"
                alt="en"
              />
            </a>
          </div>

          <div className="themeSwitcher" onClick={changeTheme}>
            <img src={imageURL} />
          </div>
        </div>
      </nav>

      <nav className="menuMobile">
        <div className="hamburguer" onClick={handleOpenMenu}>
          <img src={hamburguer} />
        </div>
        <ul style={{ top: menu }}>
          <li>
            <a href="#start" onClick={handleMenuDisplay}>
              {t("header:home")}
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={handleMenuDisplay}>
              {t("header:portfolio")}
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleMenuDisplay}>
              {t("header:about")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuDisplay}>
              {t("header:contact")}
            </a>
          </li>

          <div className="languageButtons">
            <a
              role="button"
              onClick={() => {
                i18n.changeLanguage("ptBR");
              }}
            >
              <img
                src={"https://img.icons8.com/office/16/000000/brazil.png"}
                alt="pt-BR"
              />
            </a>
            <a
              role="button"
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              <img
                src="https://img.icons8.com/office/16/000000/usa.png"
                alt="en"
              />
            </a>
          </div>

          <div className="themeSwitcher" onClick={changeTheme}>
            <img src={imageURL} />
          </div>
        </ul>
      </nav>
    </header>
  );
}
