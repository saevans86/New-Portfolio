import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div>
			<ul className='nav nav-tabs --bs-success-border-subtle'>
				<li className='nav-item '>
					<Link to='/' className='nav-link'>
						About me
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/Projects' className='nav-link'>
						Projects
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/ContactMe' className='nav-link'>
						Contact Me
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/Resume' className='nav-link'>
						Resume
					</Link>
				</li>
			</ul>
		</div>
	);
}
export default Nav;
