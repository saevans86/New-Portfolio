import { React } from 'react';
import selfie from '../assets/picture.png';
function AboutMe() {
	return (
		<>
			<div className='card bg-transparent'>
				<img
					src={selfie}
					className='card-img-top'
					alt='picture of sam'
				/>
				<div className='card-body'>
					<p className='card-text'>
						Cat dad, gym enthusiast, full stack web developer
					</p>
				</div>
			</div>
			<div className='container-fluid'>
				<p>
					With over 13 years of experience in the dynamic
					landscape of the medical field, I've honed my skills
					across various areas. My journey began with a
					fascination for development and coding, sparked during
					my early gaming days.
				</p>

				<p>
					Delving into the intricacies behind the scenes has
					always captivated me. Now, I'm eager to embrace a
					change of pace, leveraging my diverse background to
					contribute in new and innovative ways.
				</p>
				<p>
					My favorite parts of web development are enjoying
					challenge of troubleshooting bugs and tinkering with
					code to achieve the desired outcome, making it my
					favorite part of web development. It's incredibly
					rewarding to hit upon a solution after dedicating an
					entire day to resolving a problem.
				</p>
				<p>
					Please check out my top project picks on the dedicated
					page and navigate to my Github account using the link
					provided below or on the project pages.
				</p>
			</div>
		</>
	);
}

export default AboutMe;
