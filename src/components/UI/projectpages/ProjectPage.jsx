import ProjectList from './ProjectList';

export default function Images({ project: {title, image, projectDetails }}) {
	return (
		<>
			<div className='imageContainer'>
				
			<h3>{title}</h3>
			<div className="img-fluid' alt='Responsive image">
				{image && <img src={image} alt={title} />}
			</div>
			<p className='body'>{projectDetails}</p>
		</div>
		</>
	);
}

