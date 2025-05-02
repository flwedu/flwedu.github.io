import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translations from "./translations.json";

/**
 * Configuração do i18n para internacionalização da aplicação
 * @type {Object}
 */
const i18nConfig = {
	resources: translations,
	fallbackLng: "pt-BR",
	defaultNS: "translations",
	interpolation: {
		escapeValue: false, // React já escapa os valores por padrão
	},
	detection: {
		order: ["localStorage", "navigator"],
		caches: ["localStorage"],
	},
	react: {
		useSuspense: false, // Evita problemas com SSR
	},
};

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
