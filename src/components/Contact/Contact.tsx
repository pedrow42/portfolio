import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../context/GlobalState";
import "./ContactStyle.scss";

import Whatsapp from "../../images/whatsapp.png";
import Email from "../../images/email.png";
import Linkedin from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";

export default function Contact() {
  const { t } = useTranslation();
  const { state } = useContext(GlobalContext);
  return (
    <section
      id="contact"
      style={{ backgroundColor: state.secondBackground, color: state.textFont }}
    >
      <div className="contactSection">
        <h1 className={state.theme.toLowerCase()}>{t("contact:title")}</h1>
        <div className="titleBar"></div>
        <div className="contacts">
          <p>{t("contact:message")}</p>
          <ul>
            <li>
              <a href="https://wa.me/5553999037982">
                <img
                  className={`${state.theme.toLowerCase()}Logo`}
                  src={Whatsapp}
                />
                (53)999037982
              </a>
            </li>
            <li>
              <a href="mailto:pedro_lopes98@hotmail.com">
                <img
                  className={`${state.theme.toLowerCase()}Logo`}
                  src={Email}
                />
                pedro_lopes98@hotmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pedro-lopes/">
                <img
                  className={`${state.theme.toLowerCase()}Logo`}
                  src={Linkedin}
                />
                https://www.linkedin.com/in/pedro-lopes/
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pedrow42">
                <img
                  className={`${state.theme.toLowerCase()}Logo`}
                  src={Instagram}
                />{" "}
                @pedrow42/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
