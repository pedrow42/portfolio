import "./MainStyle.scss";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Arrow from "../../images/down-arrow.png";

export default function Main() {
  const { state } = useContext(GlobalContext);
  let imageColor = state.theme.toLowerCase();

  return (
    <main id="start" style={{ backgroundColor: state.firstBackground }}>
      <div className="box">
        <div className="title">
          <span className="block"></span>
          <h1 style={{ color: state.titleFont }}>
            Pedro Lopes<span></span>
          </h1>
        </div>

        <div className="role">
          <div className="block"></div>
          <p style={{ color: state.textFont }}>Frontend Developer</p>
        </div>
      </div>
      <a href="#portfolio" className="downArrow">
        <img className={`${imageColor}Image`} src={Arrow} />
      </a>
    </main>
  );
}
