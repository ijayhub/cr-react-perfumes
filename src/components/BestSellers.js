import React from 'react';
import { Carousel } from 'react-bootstrap';
import star from '../img/star-fill (1).svg';
import starHalf from '../img/star-half (1).svg';
import bright from '../img/bright_crystal.jpg';
import light from '../img/light_blue.jpg';
import jimmy from '../img/jc.jpg';
import eternity from '../img/eternity.jpg';
import viva from '../img/viva.jpg';
import pink from '../img/pink.jpg';
import Euphoria from '../img/calvin.jpg';
import red from '../img/red-door.jpg';
import happy from '../img/happy.jpg';
import white from '../img/white.jpg';

const BestSellers = () => {
    return (
			<div className='container'>
				<div className=' text-center  '>
					<h2 className='brandFragrance p-4'>Best Sellers</h2>
					<a href='' className='brandSmall'>
						See All
					</a>
				</div>
				<div>
					<Carousel className='px-5'>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={bright} alt='perfume1' />
							<h3 className='carousel'>Bright Crystal</h3>
							<p>By Versace </p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(987)</span>
							<p>As low as #6,276</p>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block h-25 w-25' src={light} alt='perfume2' />
							<h3 className='carousel'>Light Blue</h3>
							<p>By Dolce and Gabbana </p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(1663)</span>
							<p>As low as #7,752</p>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={jimmy} alt='perfume3' />
							<h3 className='carousel'>Fever</h3>
							<p>By Jimmy Choo</p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(606)</span>
							<p>As low as #4,879</p>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img
								className='d-block w-25 h-25'
								src={eternity}
								alt='perfume4'
							/>
							<h3 className='carousel'> Eternity</h3>
							<p>By Calvin Klein</p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(1100)</span>
							<p>As low as #7,752</p>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={viva} alt='perfume5' />
							<h3 className='carousel'>Viva La Juicy</h3>
							<p>By Juicy Couture</p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(594)</span>
							<p>As low as #7,752</p>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={pink} alt='perfume6' />
							<h3 className='carousel'>Pink Sugar</h3>
							<p>By Aquolina</p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(1005)</span>
							<p>As low as #1,448</p>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img
								className='d-block w-25 h-25'
								src={Euphoria}
								alt='perfume7'
							/>
							<h3 className='carousel'> Euphoria</h3>
							<p>By Calvin Klein</p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(1395)</span>
							<p>As low as #7,752</p>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={red} alt='perfume8' />
							<h3 className='carousel'>Red Door</h3>
							<p>By Elizabeth Arden</p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(715)</span>
							<p>As low as #4,822</p>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={happy} alt='perfume9' />
							<h3 className='carousel'>Happy</h3>
							<p>By Clinique</p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(456)</span>
							<p>As low as #7,752</p>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={white} alt='perfume10' />
							<h3 className='carousel'>White Diamond</h3>
							<p>By Elizabeth Taylor</p>
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={star} alt='rating' />
							<img src={starHalf} alt='rating' className='me-2' />
							<span>(900)</span>
							<p>As low as #6,276</p>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
}

export default BestSellers
