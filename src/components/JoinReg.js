import React from 'react'
import cash from '../img/cashCopy.svg';
import wallet from '../img/wallet.svg';

const JoinReg = () => {
    return (
			<div className='mt-5'>
				<div className='container'>
					<div className='row '>
						<div className='col-md-5 joinReg d-flex text-center mb-2'>
							<div className='mt-5'>
								<img src={cash} alt='' />
							</div>
							<div className=' mt-3 px-3 lh-lg '>
								<h5>Earn Points. Save Money</h5>
								<p>
									Earn one point for every naira you spend with us and start
									saving on all future purchases.
								</p>
								<button className='btnJoin text-white border-0 w-50 p-1 rounded mb-3'>
									Join Now
								</button>
							</div>
						</div>
						<div className='col-md-5 joinReg mx-lg-3 d-flex text-center'>
							<div className=' mt-5'>
								<img src={wallet} alt='' />
							</div>
							<div className=' mt-3 px-3 lh-lg '>
								<h5>Reseller? Buy Wholesale Perfume</h5>
								<p>
									If you have a store or sell perfume online, register to buy
									wholesale perfume.
								</p>
								<button className='btnJoin text-white border-0 w-50 p-1 rounded mb-3'>
									Register Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default JoinReg
