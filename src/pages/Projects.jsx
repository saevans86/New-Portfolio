import { Link } from 'react-router-dom';
import React from 'react';
import ProjectPage from '../components/UI/projectpages/ProjectPage';
import ProjectList from '../components/UI/projectpages/ProjectList';

function Projects() {
	const projects = ProjectList();
	return (
		<div className='imageContainer'>
			{projects && projects.length > 0 ? (
				projects.map((project) => (
					<div key={project.id}>
						<ProjectPage
							project={project.project}
							title={project.title}
							image={project.image}
				
						/>
				

						<Link to={project.repo}>View Repo</Link>

						<Link to={project.repo}>View Demo/Live</Link>
					</div>
				))
			) : (
				<p>No projects available</p>
			)}
		</div>
	);
}

export default Projects;
