import 'i18next'
import translations from '../i18n/locales/index.ts'

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'pt-BR';
		resources: typeof translations;
	}
}