import React from 'react'
import Navigation from './Navigation';
import Hero from './Hero';
import Brands from './Brands';
import BestSellers from './BestSellers';
import Shoppers from './Shoppers';
import Testimonials from './Testimonials';
import Arrival from './Arrival';
import TopPicks from './TopPicks';
import JoinReg from './JoinReg';
import CR from './CR';
import Coupon from './Coupon';
import Footer from './Footer';



const Home = () => {
  return (
		<div>
			<Navigation />
			<Hero />
			<Brands />
			<BestSellers />
			<Shoppers />
			<Testimonials />
			<Arrival />
			<TopPicks />
			<JoinReg />
			<CR />
			<Coupon />
            <Footer />
            
		</div>
	);
}

export default Home
