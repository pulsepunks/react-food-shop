export const Footer = () => {
	return (
		<footer className='page-footer green darken-1'>
			<div className='footer-copyright green darken-1'>
				<div className='container'>
					© {new Date().getFullYear()} Copyright Text
					<a
						className='grey-text text-lighten-4 right'
						href='#!'
					>
						Repo
					</a>
				</div>
			</div>
		</footer>
	);
};
