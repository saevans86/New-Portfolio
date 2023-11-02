import '../style/Style.css';


function Nav() {
	return (
		<div className='navbar'>
			<ul class='nav justify-content-center'>
				<li class='nav-item'>
				</li>
				<li class='nav-item'>
					<a class='nav-link' href='#'>
						About me
					</a>
				</li>
				<li class='nav-item'>
					<a class='nav-link' href='#'>
						My projects
					</a>
				</li>
				<li class='nav-item'>
					<a
						class='nav-link'
						href='https://www.linkedin.com/in/samuel-evans-98a2abb7/'
					>
						LinkedIn
					</a>
				</li>
				<li class='nav-item'>
					<a
						class='nav-link'
						href='https://github.com/saevans86'
					>
						Github
					</a>
				</li>
				<li class='nav-item'>
					<a class='nav-link' href='#'>
						Contact me
					</a>
				</li>
			</ul>
		</div>
	);
}
export default Nav;
