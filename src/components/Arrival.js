import React from 'react'
import { Carousel } from 'react-bootstrap';
import veryPink from '../img/very pink.jpg';
import veryPurple from '../img/veryPurple.jpg';
import afnan from '../img/afnan.jpg';
import swiss from '../img/swiss.jpg';
import lamoni from '../img/lamoni.jpg';
import musc from '../img/musc.jpg';
import lipP from '../img/lipstickP.jpg'
import rue from '../img/rue.jpg';
import tributeP from '../img/tributeP.jpg';
import supremacy from '../img/supremacy.jpg';

import ruePride from '../img/ruePride.jpg'
import ruePent from '../img/ruePent.jpg'
import rueV from '../img/rueVersaillles.jpg';
import afnanPurple from '../img/afnanPurple.jpg'
import gucci from '../img/gucci.jpg'
import gucciS from '../img/gucciSong.jpg'
import riiffs from '../img/infamons.jpg'
import riiffsO from '../img/riiffO.jpg'
import abercrombie from '../img/a&f.jpg'

const Arrival = () => {
    return (
			<div>
				<div className='container'>
					<div className='arrival text-center pt-5'>
						<h4 className='brandFragrance'>New Arrival</h4>
						<div className='brandSmall '>
							
								See all
							
						</div>
					</div>
					<div className='arrivalCarousel'>
						<Carousel>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={veryPink}
									alt='perfume1'
								/>
								<h3 className='carousel'>Perry Ellis Very Pink</h3>
								<p>By Perry Ellis </p>

								<p>As low as #16,752</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block h-25 w-25'
									src={veryPurple}
									alt='perfume2'
								/>
								<h3 className='carousel'>Perry Ellis Very purple</h3>
								<p>By Perry Ellis</p>

								<p>As low as #16,952</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img className='d-block w-25 h-25' src={afnan} alt='perfume3' />
								<h3 className='carousel'>Afnan Turathi Red</h3>
								<p>By Afnan</p>

								<p>As low as #19,374</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img className='d-block w-25 h-25' src={swiss} alt='perfume4' />
								<h3 className='carousel'>Swiss Army First Snow</h3>
								<p>By Victorinox</p>

								<p>As low as #22,766</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={lamoni}
									alt='perfume6'
								/>
								<h3 className='carousel'>Lamoni Victorie</h3>
								<p>By Lamoni</p>

								<p>As low as #8,134</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img className='d-block w-25 h-25' src={musc} alt='perfume7' />
								<h3 className='carousel'>Musc Invisible</h3>
								<p>By Juliette Has A Gun</p>

								<p>As low as #38,754</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img className='d-block w-25 h-25' src={lipP} alt='perfume8' />
								<h3 className='carousel'>Lipstick Fever</h3>
								<p>By Juliette Has A Gun</p>

								<p>As low as #58,191</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img className='d-block w-25 h-25' src={rue} alt='perfume9' />
								<h3 className='carousel'>Rue Broca Theoreme</h3>
								<p>By Rue Broca</p>

								<p>As low as #13,076</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={tributeP}
									alt='perfume10'
								/>
								<h3 className='carousel'>Afnan Tribute White</h3>
								<p>By Afnan</p>

								<p>As low as #16,467</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={supremacy}
									alt='perfume11'
								/>
								<h3 className='carousel'>Supremacy Pink</h3>
								<p>By Afnan</p>

								<p>As low as #18,308</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={ruePride}
									alt='perfume12'
								/>
								<h3 className='carousel'>Rue Broca Pride</h3>
								<p>By Rue Broca</p>

								<p>As low as #9,684</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={ruePent}
									alt='perfume13'
								/>
								<h3 className='carousel'>Penthouse Dsor</h3>
								<p>By Rue Broca</p>

								<p>As low as #13,076</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img className='d-block w-25 h-25' src={rueV} alt='perfume14' />
								<h3 className='carousel'>Penthouse Versailles</h3>
								<p>By Rue Broca</p>

								<p>As low as #13,076</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={afnanPurple}
									alt='perfume15'
								/>
								<h3 className='carousel'>Afnan Turathi Purple</h3>
								<p>By Afnan</p>

								<p>As low as #19,374</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={gucci}
									alt='perfume16'
								/>
								<h3 className='carousel'>Gucci The Voice OF Snake</h3>
								<p>By Gucci</p>

								<p>As low as #169,569</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={gucciS}
									alt='perfume17'
								/>
								<h3 className='carousel'>Gucci A Song For Rose</h3>
								<p>By Gucci</p>

								<p>As low as #169,569</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={riiffs}
									alt='perfume17'
								/>
								<h3 className='carousel'>Riiffs Infamous </h3>
								<p>By Riiffs</p>

								<p>As low as #14,529</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={riiffsO}
									alt='perfume18'
								/>
								<h3 className='carousel'>Riiffs Exotic Oud </h3>
								<p>By Riiffs</p>

								<p>As low as #13,560</p>
							</Carousel.Item>
							<Carousel.Item interval={20000}>
								<img
									className='d-block w-25 h-25'
									src={abercrombie}
									alt='perfume18'
								/>
								<h3 className='carousel'>
									Abercrombie $ Fitch Authentic Night
								</h3>
								<p>Abercrombie $ Fitch</p>

								<p>As low as #24,413</p>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
		);
}

export default Arrival
