import "./PortfolioStyle.scss";

import Apple from "../../images/apple.png";
import Mediacenter from "../../images/mediacenter.png";
import Movies from "../../images/movies.png";
import Port from "../../images/portfolio.png";
import Starbucks from "../../images/starbucks.png";
import StarWars from "../../images/starWars.png";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function Portfolio() {
  const { t } = useTranslation();
  const { state } = useContext(GlobalContext);

  return (
    <section id="portfolio" style={{ backgroundColor: state.secondBackground }}>
      <div className="portfolioSection">
        <div className="sectionTitle">
          <h1 className={state.theme.toLowerCase()}>{t("portfolio:title")}</h1>
          <div className="titleBar"></div>
        </div>

        <div className="portfolioProjects">
          <div className="card" style={{ backgroundImage: `url(${Port})` }}>
            <div className="cardButtons">
              <a href="./" className="buttons buttonLeft">
                {t("portfolio:access")}
              </a>
              <a href="#" className="buttons buttonRight">
                {t("portfolio:code")}
              </a>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${Movies})` }}>
            <div className="cardButtons">
              <a
                href="https://movie-store-react.vercel.app/"
                className="buttons buttonLeft"
              >
                {t("portfolio:access")}
              </a>
              <a
                href="https://github.com/pedrow42/movie-store"
                className="buttons buttonRight"
              >
                {t("portfolio:code")}
              </a>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${StarWars})` }}>
            <div className="cardButtons">
              <a
                href="https://starwarscatalog.vercel.app/"
                className="buttons buttonLeft"
              >
                {t("portfolio:access")}
              </a>
              <a
                href="https://github.com/pedrow42/Star-Wars_Catalog"
                className="buttons buttonRight"
              >
                {t("portfolio:code")}
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundImage: `url(${Starbucks})` }}
          >
            <div className="cardButtons">
              <a
                href="https://starbucks-jet.vercel.app/"
                className="buttons buttonLeft"
              >
                {t("portfolio:access")}
              </a>
              <a
                href="https://github.com/pedrow42/starbucks"
                className="buttons buttonRight"
              >
                {t("portfolio:code")}
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundImage: `url(${Mediacenter})` }}
          >
            <div className="cardButtons">
              <a
                href="https://mediacenter.vercel.app/"
                className="buttons buttonLeft"
              >
                {t("portfolio:access")}
              </a>
              <a
                href="https://github.com/pedrow42/mediacenter"
                className="buttons buttonRight"
              >
                {t("portfolio:code")}
              </a>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${Apple})` }}>
            <div className="cardButtons">
              <a
                href="https://apple-snowy.vercel.app/"
                className="buttons buttonLeft"
              >
                {t("portfolio:access")}
              </a>
              <a
                href="https://github.com/pedrow42/apple-site-clone"
                className="buttons buttonRight"
              >
                {t("portfolio:code")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
