import "./PortfolioStyle.scss";
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
          <div className="card" style={{ backgroundImage: "url(/portfolio.png)" }}>
            <div className="cardButtons">
              <a href="./" className="buttons buttonLeft">
                {t("portfolio:access")}
              </a>
              <a href="#" className="buttons buttonRight">
                {t("portfolio:code")}
              </a>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: "url(/movies.png)" }}>
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
          <div className="card" style={{ backgroundImage: "url(/starWars.png)" }}>
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
            style={{ backgroundImage: "url(/starbucks.png)" }}
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
            style={{ backgroundImage: "url(/mediacenter.png)" }}
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
          <div className="card" style={{ backgroundImage: "url(/apple.png)" }}>
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
