import { useState, useEffect } from 'react';


import ProjectPage from '../components/UI/projectpages/ProjectPage';
import ProjectList from '../components/UI/projectpages/ProjectList';
//todo work in the project list to the thang

function Projects() {
	const [projectData] = useState([]);


	useEffect(() => {
	}, []);

	return (
		<div className='imageContainer'>
			{projectData.map((project) => (
				<ProjectPage
					key={project.title}
					title={project.title}
					image={project.image}
					projectDetails={project.projectDetails}
				/>
			))}
		</div>
	);
}

export default Projects;
