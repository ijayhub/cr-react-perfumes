import React from 'react'
import mcafee from '../img/mcafee-logo.svg'
// import star from '../img/star-fill (1).svg'
// import starHalf from '../img/star-half (1).svg'

const InputLogo = () => {
    return (
			<div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<img src={mcafee} alt='' />
						</div>
						<div className='col-md-6 text-white align-items-end justify-content-end'>
							<h3>Join Our Coupon List</h3>
							<p>
								Get the best deals and discounts on name brand fragrances and
								more.
							</p>
							<form>
								<input
									type='text'
									placeholder='Enter email address'
									className=' p-2 mb-3 w-50'
								/>
								<span>
									<button className='p-2 bg-warning border-0 text-white'>
										Sign Up
									</button>
								</span>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
}

export default InputLogo
