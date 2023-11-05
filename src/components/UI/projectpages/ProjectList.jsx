export default function ProjectList({ title, image, projectDetails }) {
	return (
		<div class='img-fluid' alt='Responsive image'>
			<h3 className=''>
				{title}
				Readme Generator
			</h3>
			<div className=''>
				{image}
				<img
					src='https://user-images.githubusercontent.com/130856120/261325813-186b7d7f-5593-4ed5-b007-d904f7d49256.png'
					alt='readme generator'
				/>
			</div>

			<p className=''>
				{projectDetails} insert stuff about the project
			</p>
			<h3>NoSQL Social Media API </h3>
			<img
				src='https://user-images.githubusercontent.com/130856120/280527234-04310dc2-cbfc-443c-8de4-45fbe449702c.png'
				alt='back-end api'
			/>
			<p> insert stuff about the project </p>
			<h3> SQL Employee manager </h3>
			<img
				src='https://raw.githubusercontent.com/saevans86/SQL-employee-manager/main/assets/Screenshot%202023-09-14%20084841.png'
				alt='Node js SQL employee manager'
			/>
			<p> insert stuff about the project </p>
		</div>
	);
}
