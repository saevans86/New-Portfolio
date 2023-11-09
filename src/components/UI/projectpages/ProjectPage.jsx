
export default function ProjectPage(project) {
	const { title, image, repo, live } = project;

	return (
		<div key={project.id}>
			<h3>{project.title}</h3>
			<div>
				<img src={project.image} alt={project.title} />
			</div>
			<a href={project.repo}></a>
			<a href={project.live}></a>
		</div>
	);
}

