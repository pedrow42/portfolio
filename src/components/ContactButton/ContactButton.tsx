import "./ContactButtonStyle.scss";
import Chat from "../../images/chat.png";
import { useTranslation } from "react-i18next";

export default function ContactButton() {
  const { t } = useTranslation();
  return (
    <a href="mailto:pedro_lopes98@hotmail.com">
      <div className="getInTouch">
        <div>
          <img src={Chat} />
        </div>
        <span>{t("getInTouch:message")}</span>
      </div>
    </a>
  );
}
