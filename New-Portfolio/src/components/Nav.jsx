import { Link } from 'react-router-dom';

function Nav() {
	
	return (
	

		<ul className='nav nav-tabs'>
			<li className='nav-item'>
				<Link to='/' className='nav-link'>
					Home
				</Link>
			</li>
			<li className='nav-item'>
				<Link to='/AboutMe' className='nav-link'>
					About me
				</Link>
			</li>
			<li className='nav-item'>
				<Link to='/Projects' className='nav-link'>
					Projects
				</Link>
			</li>
			<li className='nav-item'>
				<Link to='/Contact' className='nav-link'>
					Contact
				</Link>
			</li>
			{/* <li className='nav-item'>
				<a
					className='nav-link'
					to='https://github.com/saevans86'
				>
					Github
				</a>
			</li> */}

		</ul>
	);
}
export default Nav
