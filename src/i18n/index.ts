import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from "./translations/en.json";
import ptBRJson from "./translations/ptBR.json";

i18n.use(initReactI18next).init({
    lng: 'ptBR',
    ns: ['enJson', 'ptBRJson'],
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources:{
        en: enJson,
        ptBR: ptBRJson
    }
});