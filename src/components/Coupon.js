import React from 'react'
import InputLogo from './InputLogo';
import star from '../img/star-fill (1).svg'

const Coupon = () => {
    return (
			<div className='coupon '>
				<div className='container'>
					<div className='row '>
						<div className='col-md-3'>
							<h6 className='mt-5 text-white  couponHeader'>Shop</h6>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Best Sellers
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className=' couponList text-decoration-none '>
									{' '}
									New Arrival
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Celebrity Scents
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Hard to Find
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Testers
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Travel Size Mini's
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Perfume Samples
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Cologne Samples
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Valentine's Day Gift
								</a>
							</p>
						</div>
						<div className='col-md-3'>
							<h6 className='mt-5 text-white  couponHeader'>
								More Ways To Shop
							</h6>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Deodorant
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className=' couponList text-decoration-none '>
									{' '}
									After Shave
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Shower Gel
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									After Shave Balm
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Body Cream
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Pure perfume
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Body Lotion
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none mb-5 '>
									{' '}
									Gift Sets
								</a>
							</p>
							<div>
								<p className='text-white couponHeader'>
									<span>
										<img src={star} alt="" />
									</span>
									TrustPilot
								</p>
							</div>
						</div>
						<div className='col-md-3'>
							<h6 className='mt-5 text-white  couponHeader'>Help</h6>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Order Status
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className=' couponList text-decoration-none '>
									{' '}
									Shipping Info
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Return Info
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Contact Info
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									FAQ'S
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Earn Rewards
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Join Coupon List
								</a>
							</p>
						</div>
						<div className='col-md-3'>
							<h6 className='mt-5 text-white  couponHeader'>More Help</h6>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Affiliates
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className=' couponList text-decoration-none '>
									{' '}
									Wholesale information
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Customer Testimonials
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Safe Shopping Guarantee
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Blog
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Privacy
								</a>
							</p>
							<p className='couponList'>
								<a href='#' className='couponList text-decoration-none '>
									{' '}
									Site Map
								</a>
							</p>
						</div>
					</div>
					<InputLogo />
				</div>
			</div>
		);
}

export default Coupon
