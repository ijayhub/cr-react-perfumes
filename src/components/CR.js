import React from 'react'
import top from '../img/top.png'

const CR = () => {
    return (
			<div>
				<div className='container mt-5 slide-in-left'>
					<div className='text-center'>
						<h3 className='brandFragrance '>
							The <span className='crHeader'>CR</span> Factor
						</h3>
						<p className='brandSmall'>
							The Fragrance that makes the Difference
						</p>
					</div>
					<div className='row mt-5'>
						<div className='col-md-3'>
							<div>
								<h6>Same Day Free Shipping</h6>
								<p>
									Orders ship on the day that you place them and arrive within
									days
								</p>
							</div>
						</div>
						<div className='col-md-3'>
							<h6>Trusted since 2001</h6>
							<p>
								100% authentic fragrances. You won't find knockoffs or
								imitations here.
							</p>
						</div>
						<div className='col-md-3 '>
							<div>
								<h6>5 Star Customer Ratings</h6>
								<p>Over 20 million satisfied customers.</p>
							</div>
						</div>
						<div className='col-md-3'>
							<div>
								<h6>Safe & Secure Checkout</h6>
								<p>
									100% safe and secure checkout. Your information is protected.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-5'>
						<h6>Shop the Best Perfume Store Online</h6>
						<p>
							At Cr fragrance, our mission is to provide you with the largest
							selection of perfumes and colognes at the lowest prices.{' '}
							
						</p>
					</div>
					<div className='d-flex justify-content-end mb-4'>
						<a href='#top'>
						<img src={top} alt={top}/>
						</a>
					</div>
				</div>
			</div>
		);
}
							
						

export default CR
