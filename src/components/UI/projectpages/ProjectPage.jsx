// import ProjectList from './ProjectList';
export default function ProjectPage(projects ) {
	const { id, title, image, projectDetails } = projects
	console.log(id, title, image, projectDetails);
	return (
		<div key={projects.id}>
			<h3>{projects.title}</h3>
			<div>
				<img src={projects.image} alt={projects.title} />
			</div>
			<p>{projects.projectDetails}</p>
		</div>
	);
}

