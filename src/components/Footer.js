import React from 'react'

const Footer = () => {
	const link = 'http://github.com/ijayhub'
    return (
			<div>
				<footer className='navBg text-white text-center '>
					<p className=' p-4 '>
						Copyright © 2022{' '}
						<a
							href={link}
							className='text-white text-decoration-none'>
							Ijay
						</a>{' '}
						All Rights Reserved.
					</p>
				</footer>
			</div>
		);
}

export default Footer
