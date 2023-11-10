import { React } from 'react';
import resume from '../assets/resume.pdf';
export default function Resume() {
	return (
		<div className='resumeContainer'>
			<div className='resume'>
				<iframe src={resume} width='100%' height='500px' />
			</div>
		</div>
	);
}
