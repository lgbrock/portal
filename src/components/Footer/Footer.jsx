import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<p>&copy; 2020</p>
					</div>
					<div className='col-md-6'>
						<ul className='list-inline'>
							<li className='list-inline-item'>
								<a href='#'>Privacy</a>
							</li>
							<li className='list-inline-item'>
								<a href='#'>Terms</a>
							</li>
							<li className='list-inline-item'>
								<a href='#'>FAQ</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
