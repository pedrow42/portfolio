import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../../context/GlobalState';
import './AboutStyle.scss';

export default function About() {
    const {t} = useTranslation()
    const {state} = useContext(GlobalContext);

    return (
        <section id='about' style={{backgroundColor: state.firstBackground, color: state.textFont}}>
            <div className="aboutSection">
                <div className="sectionTitle">
                    <h1 className={state.theme.toLowerCase()}>{t("about:title")}</h1>
                    <div className="titleBar"></div>
                </div>
                <p>{t("about:text")}</p>
                <div className="skillsList">
                    <p style={{color: state.titleFont}}>{t("about:canHelp")}</p>
                    <ul>
                        <li>
                            <h4>{t("about:site")}</h4>
                        </li>
                        <li>
                            <h4>{t("about:portfolioSite")}</h4>
                        </li>
                        <li>
                            <h4>WordPress / Blog</h4>
                        </li>
                        <li>
                            <h4>{t("about:ecommerce")}</h4>
                        </li>
                    </ul>
                </div>
                <p>{t("about:skills")}</p>
                <div className="skills">
                    <div className="skill">
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/36/000000/external-html-computer-science-flaticons-lineal-color-flat-icons.png" />
                        <span>HTML</span>
                    </div>
                    <div className="skill">
                        <img src={"https://img.icons8.com/color/36/000000/sass.png"} />
                        <span>Sass</span>
                    </div>
                    <div className="skill">
                        <img src={"https://img.icons8.com/color/36/000000/javascript--v1.png"} />
                        <span>JavaScript</span>
                    </div>
                    <div className="skill">
                        <img src={"https://img.icons8.com/office/36/000000/react.png"} />
                        <span>React</span>
                    </div>
                    <div className="skill">
                        <img src={"https://img.icons8.com/fluency/36/000000/node-js.png"} />
                        <span>Node</span>
                    </div>
                    <div className="skill">
                        <img src={"https://img.icons8.com/color/36/000000/bootstrap.png"} />
                        <span>Bootstrap</span>
                    </div>

                </div>
                <span>{t("about:andOthers")}</span>
            </div>
        </section>
    )
}
