import React from 'react'
import Card from 'react-bootstrap/Card';

const CardBrand = ({ brand }) => {
    return (
			<div>
				<Card
					style={{ width: '18rem' }}
					className='mb-3 img-fluid h-100 slide-in-bottom'>
					<Card.Img
						variant='top'
						src={brand.src}
						style={{ height: '100px', objectFit: 'contain' }}
					/>
					<Card.Body className='card-fill'>
						<Card.Link href={brand.link} className='text-dark'>
							{brand.name}
						</Card.Link>
					</Card.Body>
				</Card>
			</div>
		);
}

export default CardBrand
