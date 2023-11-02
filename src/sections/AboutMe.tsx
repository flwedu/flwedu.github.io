import { ProfilePic } from '../components/ProfilePic'
import { useTranslation } from 'react-i18next'

export function AboutMe () {

	const { t } = useTranslation();

	return (
		<section id="about" className="max-h-screen">
			<h1>{t('sections.about.h1')}</h1>
			<div className="justify-items-center grid grid-cols-1 p-2  items-center md:grid-cols-2">
				<ProfilePic/>
				<p className="text-center sm:text-left max-w-prose">{t('sections.about.p')}</p>
			</div>
		</section>
	)
}
