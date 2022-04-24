import React from 'react' 
import { Carousel } from 'react-bootstrap';
import star from '../img/star-fill (1).svg';
import starHalf from '../img/star-half (1).svg';
import lolita from '../img/lolita.jpg';
import leau from "../img/l'eau d'issey.jpg";
import mont from '../img/montB.jpg';
import angel from '../img/angel.jpg';
import dolce from '../img/dolce$gabbanaPerfume.jpg';
import Euphoria from '../img/calvin.jpg';
import La from '../img/la.jpg';
import invictus from '../img/invictus.jpg';
import acqua from '../img/acqua.jpg'
import chrome from '../img/chrome.jpg'
import viva from '../img/viva.jpg';
import light from '../img/light_blue.jpg';
import million from '../img/1 million.jpg'
import armani from '../img/armani.jpg'
import jean from '../img/jean.jpg'

const TopPicks = () => {
    return (
			<div className='container'>
				<div>
					<h4 className='brandFragrance text-center p-4'>Top Picks For You</h4>
				</div>

				<div>
					<Carousel>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={chrome} alt='perfume1' />
							<div className='px-5'>
								<h3 className='carousel'>Chrome</h3>
								<p>By Azzoro</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(856)</span>
								<p>As low as #8,949</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={leau} alt='perfume2' />
							<div className='p-5'>
								<h3 className='carousel'>L'eau D'issey</h3>
								<p>By Iseey Miyake</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(695)</span>
								<p>As low as #13,424</p>
							</div>
						</Carousel.Item>

						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={mont} alt='perfume3' />
							<div className='p-5'>
								<h3 className='carousel'>Montblanc Legend</h3>
								<p>By Mont Blanc</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(492)</span>
								<p>As low as #12,614</p>
							</div>
						</Carousel.Item>

						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={angel} alt='perfume4' />
							<div className='px-5'>
								<h3 className='carousel'>Angel</h3>
								<p>By Thierry Muglar</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(1242)</span>
								<p>As low as #30,113</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={dolce} alt='perfume5' />
							<div className='px-5'>
								<h3 className='carousel'>K</h3>
								<p>By Dolce and Gabbana</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(503)</span>
								<p>As low as #40,999</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img
								className='d-block w-25 h-25'
								src={Euphoria}
								alt='perfume6'
							/>
							<div className='px-5'>
								<h3 className='carousel'> Euphoria</h3>
								<p>By Calvin Klein</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(1395)</span>
								<p>As low as #7,752</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={La} alt='perfume7' />
							<div className='px-5'>
								<h3 className='carousel'>La Vie Est Belle</h3>
								<p>By Lancome</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(453)</span>
								<p>As low as #36,702</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img
								className='d-block w-25 h-25'
								src={invictus}
								alt='perfume8'
							/>
							<div className='px-5'>
								<h3 className='carousel'>Invictus</h3>
								<p>By Paco Rabanne</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(453)</span>
								<p>As low as #13,446</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={acqua} alt='perfume7' />
							<div className='px-5'>
								<h3 className='carousel'>Acqua Di Gio</h3>
								<p>By Giorgio Armani</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(1127)</span>
								<p>As low as #17,077</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={lolita} alt='perfume10' />
							<div className='px-5'>
								<h3 className='carousel'>Lolita Lempicka</h3>
								<p>By Lolita Lempicka</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(841)</span>
								<p>As low as #18,718</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={viva} alt='perfume11' />
							<div className='px-5'>
								<h3 className='carousel'>Viva La Juicy</h3>
								<p>By Juicy Couture</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(594)</span>
								<p>As low as #12,106</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={light} alt='perfume12' />
							<div className='px-5'>
								<h3 className='carousel'>Light Blue</h3>
								<p>By Dolce and Gabbana</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(502)</span>
								<p>As low as #20,343</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img
								className='d-block w-25 h-25'
								src={million}
								alt='perfume13'
							/>
							<div className='px-5'>
								<h3 className='carousel'>1 Million</h3>
								<p>By Paco Rabanne</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(609)</span>
								<p>As low as #13,423</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={armani} alt='perfume13' />
							<div className='px-5'>
								<h3 className='carousel'>Armani Code</h3>
								<p>By Giorgio Armani</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(489)</span>
								<p>As low as #31,333</p>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={20000}>
							<img className='d-block w-25 h-25' src={jean} alt='perfume13' />
							<div className='px-5'>
								<h3 className='carousel'>Jean Paul Gauliter</h3>
								<p>By Jean Paul Gauliter</p>
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={star} alt='rating' />
								<img src={starHalf} alt='rating' className='me-2' />
								<span>(777)</span>
								<p>As low as #31,931</p>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
}

export default TopPicks
