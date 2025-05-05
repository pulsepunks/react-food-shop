import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header>
			<nav className='green darken-1'>
				<div className='nav-wrapper container'>
					<Link
						className='brand-logo'
						to='/'
					>
						React Food Shop
					</Link>
					<ul
						id='nav-mobile'
						className='right hide-on-med-and-down'
					>
						<li>
							<a href='!#'>Repo</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
