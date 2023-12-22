
export default function ProjectPage(project) {
	const { title, image, repo, live } = project;

	return (
		<div>
			
			<h3>{title}</h3>
				<img
					className='img'
					src={image}
					alt='"Responsive image'
			/>
			<div></div>
			<a href={repo}></a>
			<a href={live}></a>
			
		</div>
	);
}

