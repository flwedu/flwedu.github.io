import "i18next";
import type translations from "../i18n/translations.json";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: "translations";
		resources: (typeof translations)["pt-BR"];
	}
}
