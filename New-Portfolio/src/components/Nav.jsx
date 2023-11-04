// import { Link, useLocation } from 'react-router-dom';

function Nav() {
	return (
		<nav className='navbar navbar-expand-lg bg-light'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					My Links
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarNavDropdown'
				>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a
								className='nav-link active'
								aria-current='page'
								href='/'
							>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/AboutMe'>
								About me
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/Projects'>
								Projects
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/Contact'>
								Contact me
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								External Links
							</a>
							<ul className='dropdown-menu'>
								<li>
									<a
										className='dropdown-item'
										href='https://www.linkedin.com/in/samuel-evans-98a2abb7/'
									>
										LinkedIn
									</a>
								</li>
								<li>
									<a
										className='dropdown-item'
										href='https://github.com/saevans86'
									>
										Github
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Nav;
