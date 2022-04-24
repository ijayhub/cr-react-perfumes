import React from 'react'
import dune from '../img/cdior.jpg';
import pink from '../img/pink.jpg';
import whiteGift from '../img/white-gift.jpg';
import sample from '../img/sample perfume.jpg';

const Shoppers = () => {
    return (
			<div>
				<div className='container' id="Shoppers">
					<h3 className='text-center brandFragrance mt-5'>Shop By Type</h3>
					<div className='row'>
						<div className='col-md-3'>
							<img src={dune} alt='' className='img-fluid' />
							<a
								href='#'
								className='d-flex justify-content-center shopperTester'>
								Testers
							</a>
						</div>
						<div className='col-md-3 pink'>
							<img src={pink} alt='' className='img-fluid' />
							<a
								href='#'
								className='d-flex justify-content-center shopperTester'>
								Travels Mini
							</a>
						</div>
						<div className='col-md-3 white'>
							<img src={whiteGift} alt='' className='img-fluid' />
							<a
								href='#'
								className='d-flex justify-content-center shopperTester'>
								Gift Sets
							</a>
						</div>
						<div className='col-md-3 pink'>
							<img src={sample} alt='' className='img-fluid' />
							<a
								href='#'
								className='d-flex justify-content-center shopperTester'>
								Samples
							</a>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Shoppers
