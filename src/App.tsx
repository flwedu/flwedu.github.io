import './i18n/config.ts'
import { HashRouter, Route, Routes } from 'react-router-dom'
import DarkModeButton from './components/DarkModeButton'
import LanguageButton from './components/LanguageButton'
import { DarkModeContextProvider } from './contexts/providers/darkmode-provider'
import { NavHeader } from './layout/NavHeader'
import { AboutMe } from './sections/AboutMe'
import { Links } from './sections/Links'
import { ProjectsList } from './sections/ProjectsList'
import { Technologies } from './sections/Technologies'
import './styles.css'
import './tailwind.css'

function App () {

	return (
		<div className="App">
			<main>
				<HashRouter>
					<NavHeader/>
					<Routes>
						<Route path="/" element={<AboutMe/>}/>
						<Route path="technologies" element={<Technologies/>}/>
						<Route path="projects" element={<ProjectsList/>}/>
						<Route path="links" element={<Links/>}/>
					</Routes>
				</HashRouter>
			</main>
			<LanguageButton/>
			<DarkModeContextProvider>
				<DarkModeButton/>
			</DarkModeContextProvider>
		</div>
	)
}

export { App }
