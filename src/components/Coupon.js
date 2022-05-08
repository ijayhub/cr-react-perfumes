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
								<div className='couponList '> Best Sellers</div>
							</p>
							<p className='couponList'>
								<div className=' couponList '> New Arrival</div>
							</p>
							<p className='couponList'>
								<div className='couponList'> Celebrity Scents</div>
							</p>
							<p className='couponList text-decoration-none'>
								<div className='couponList'> Hard to Find</div>
							</p>
							<p className='couponList'>
								<div className='couponList '> Testers</div>
							</p>
							<p className='couponList'>
								<div className='couponList '> Travel Size Mini's</div>
							</p>
							<p className='couponList text-decoration-none'>
								<div className='couponList '> Perfume Samples</div>
							</p>
							<p className='couponList text-decoration-none'>
								<div className='couponList  '> Cologne Samples</div>
							</p>
							<p className='couponList text-decoration-none'>
								<div className='couponList '> Valentine's Day Gift</div>
							</p>
						</div>
						<div className='col-md-3'>
							<h6 className='mt-5 text-white  couponHeader'>
								More Ways To Shop
							</h6>
							<p className='couponList'>
								<div className='couponList  '> Deodorant</div>
							</p>
							<p className='couponList'>
								<div className=' couponList '> After Shave</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Shower Gel
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									After Shave Balm
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Body Cream
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Pure perfume
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Body Lotion
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none mb-5 '>
									{' '}
									Gift Sets
								</div>
							</p>
							<div>
								<p className='text-white couponHeader text-decoration-none'>
									<span>
										<img src={star} alt='' />
									</span>
									TrustPilot
								</p>
							</div>
						</div>
						<div className='col-md-3'>
							<h6 className='mt-5 text-white  couponHeader'>Help</h6>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Order Status
								</div>
								<p className='couponList'></p>
								<div className=' couponList text-decoration-none '>
									{' '}
									Shipping Info
								</div>
								<p className='couponList'></p>
								<div className='couponList text-decoration-none '>
									{' '}
									Return Info
								</div>
								<p className='couponList'></p>{' '}
								<div className='couponList text-decoration-none '>
									Contact Info
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '> FAQ'S</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Earn Rewards
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Join Coupon List
								</div>
							</p>
						</div>
						<div className='col-md-3'>
							<h6 className='mt-5 text-white  couponHeader'>More Help</h6>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Affiliates
								</div>
							</p>
							<p className='couponList'>
								<div className=' couponList text-decoration-none '>
									{' '}
									Wholesale information
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Customer Testimonials
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Safe Shopping Guarantee
								</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '> Blog</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '> Privacy</div>
							</p>
							<p className='couponList'>
								<div className='couponList text-decoration-none '>
									{' '}
									Site Map
								</div>
							</p>
						</div>
					</div>
					<InputLogo />
				</div>
			</div>
		);
}

export default Coupon
