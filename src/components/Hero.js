import React from 'react'
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
		<div className='heroCollection text-center'>
			<h1 className='heroHeader'>Welcome To CR Fragrance</h1>
			<div className='text-center pt-5'>
				<Button variant='primary' size='lg'>
					<h3>Reliable Online Store</h3> 
				</Button>{' '}
			</div>
		</div>
	);
}

export default Hero
