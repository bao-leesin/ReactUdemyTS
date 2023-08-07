import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import vietnamese from "../resource/Resource.vn"
import english from "../resource/Resource.en";


export const resources = {
  en : {
    translation: english
  },
  vi : {
    translation: vietnamese
  }
}


i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next).init({
    resources,
    lng: 'vi',
    fallbackLng: 'vi',
    debug: true,
    interpolation: {
      escapeValue: false, 
    }
  });
  
