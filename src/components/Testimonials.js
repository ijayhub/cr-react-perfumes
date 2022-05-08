import React from 'react'
import { Carousel } from 'react-bootstrap'
import perf from '../img/illustration-perfume.jpg'
import illustration from '../img/illustration.png'

const Testimonials = () => {
    return (
			<div className='mt-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 testimonialBg'>
							<Carousel>
								<Carousel.Item className='text-center testimonial p-5'>
									<p>
										"I've shopped with CR fragrance for years and have always
										found what I was looking for. This is the only place I shop
										for cologne...wouldn't go elsewhere."
									</p>
									<small>Fummi A.</small>
								</Carousel.Item>
								<Carousel.Item className='text-center testimonial p-5'>
									<p>
										"A great site to buy gifts for family! They have a great
										selection and it’s so easy to place an order. The delivery
										time is exceptional!"
									</p>
									<small>Godwin B.</small>
								</Carousel.Item>
								<Carousel.Item className='text-center testimonial p-5'>
									<p>
										"A variety of products at competitive discount prices.
										Website is easy to use. Checkout process is fast. Shipping
										is free at a low minimum cost. "
									</p>
									<small>Mrs Mustapha</small>
								</Carousel.Item>
								<Carousel.Item className='text-center testimonial p-5'>
									<p>
										"Products are high quality and come in great packaging.
										Scents match to expectations and would buy again. Very
										satisfied with my order."
									</p>
									<small>Hassan K.</small>
								</Carousel.Item>
							</Carousel>
						</div>
						<div className='col-md-6 d-none d-md-block d-lg-block'>
							<div className='d-flex pt-5'>
								<img src={perf} alt='' className='img-fluid w-50 h-50 mb-3' />
								<p className='p-5'>
									<div className='hardFragrance'>
										Hard to find fragrance
									</div>
								</p>
							</div>
							<div className='d-flex'>
								<img
									src={illustration}
									alt={illustration}
									className='img-fluid w-50 h-50 '
								/>
								<p className='p-4'>
									<div className='hardFragrance '>
										Celebrity Scents
									</div>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Testimonials

						
					