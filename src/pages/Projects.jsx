import { Link } from 'react-router-dom';
import React from 'react';
import ProjectPage from '../components/UI/projectpages/ProjectPage';
import ProjectList from '../components/UI/projectpages/ProjectList';

function Projects() {
	const projects = ProjectList();
	return (
		<div className='projectContainer'>
			{projects && projects.length > 0 ? (
				projects.map((project) => (
					<div key={project.id}>
						<ProjectPage
							title={project.title}
							image={project.image}
						/>

						<div>
							<Link to={project.repo}>{project.title} Repo </Link>
						</div>
						<div>
							<Link to={project.live}>Live/Demo</Link>
						</div>
					</div>
				))
			) : (
				<p>No projects available</p>
			)}
		</div>
	);
}

export default Projects;
