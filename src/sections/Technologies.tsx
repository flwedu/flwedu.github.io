import { useTranslation } from 'react-i18next'

export function Technologies () {
	const { t } = useTranslation<'translations'>()

	return (
		<section id="technologies" className="">
			<h1>{t('sections.technologies.h1')}</h1>
			<p>{t('sections.technologies.p')}</p>
			<div className="grid text-center mt-2 text-xl sm:grid-cols-2 text-mainPurple-500 dark:text-slate-300">
				<ul>
					<li>Javascript</li>
					<li>Node.js</li>
					<li>Typescript</li>
					<li>React.js</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
				<ul>
					<li>Java & Spring</li>
					<li>GIT & Github</li>
					<li>Maven & Gradle</li>
					<li>JUnit</li>
					<li>GraphQL</li>
					<li>API Rest</li>
				</ul>
			</div>
		</section>
	)
}
