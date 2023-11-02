import brazilFlag from '../../static/brazil.svg'
import usFlag from '../../static/us.svg'
import { useTranslation } from 'react-i18next'

export default function LanguageButton () {
	const { i18n, t } = useTranslation()

	function handleClick () {
		i18n.changeLanguage(i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR')
	}

	function getImageUrl () {
		return i18n.language === 'pt-BR' ? brazilFlag : usFlag
	}

	return (
		<div className="fixed bottom-[6rem] right-4">
			<button
				className="px-2 rounded-full h-16 bg-slate-900 dark:bg-slate-100 group flex items-center"
				onClick={handleClick}
			>
				<img
					src={getImageUrl()}
					alt="Selected language country flag"
					className="w-12 object-cover rounded-full items-center"
				></img>
				<span
					className="text-slate-100 dark:text-slate-900 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          {t('buttons.language')}
        </span>
			</button>
		</div>
	)
}
