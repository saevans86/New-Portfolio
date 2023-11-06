import { Link } from 'react-router-dom';
import React from 'react';
import ProjectPage from '../components/UI/projectpages/ProjectPage';
import ProjectList from '../components/UI/projectpages/ProjectList';

function Projects() {
	const projectData = ProjectList;

	return (
		<div className='imageContainer'>
			{projectData && projectData.length > 0 ? (
				projectData.map((project) => (
					<div key={project.id}>
						<ProjectPage
							key={project.id}
							title={project.title}
							image={project.image}
							projectDetails={project.projectDetails}
						/>
						<Link to={`/Projects/${project.id}`} className=''>
							View Details
						</Link>
					</div>
				))
			) : (
				<p>No projects available</p>
			)}
		</div>
	);
}

export default Projects;
