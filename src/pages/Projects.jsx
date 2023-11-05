import { useState, useEffect } from 'react';


import Images from '../components/UI/projectpages/Images';


function Projects() {
	const [projectData] = useState([]);


	useEffect(() => {
	}, []);

	return (
		<div className='imageContainer'>
			{projectData.map((project) => (
				<Images
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
