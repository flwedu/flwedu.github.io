import { useEffect, useState } from 'react'
import projectsListJson from '../../static/res/projects.json'

import { ProjectCard } from '../components/ProjectCard'
import { useTranslation } from 'react-i18next'

export function ProjectsList () {
	const { t, i18n } = useTranslation();

	const [projectsList, setProjectsList] = useState<
		(typeof projectsListJson)['pt-br']
	>(projectsListJson['pt-br'])

	useEffect(() => {
		if (i18n.language == 'pt-BR') return setProjectsList(projectsListJson['pt-br'])
		return setProjectsList(projectsListJson['en'])
	}, [i18n.language])

	return (
		<section id="projects" className="">
			<h1>{t('sections.projects.h1')}</h1>

			<p>{t('sections.projects.p')}</p>
			<div className="grid grid-cols-1 md:grid-cols-2 content-center">
				{projectsList.map((el) => (
					<ProjectCard project={el} key={el.title}/>
				))}
			</div>
		</section>
	)
}
