import "i18next";
import type translations from "../i18n/locales/index.ts";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: "translations";
		resources: (typeof translations)["pt-BR"];
	}
}
