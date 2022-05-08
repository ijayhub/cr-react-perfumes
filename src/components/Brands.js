import React from 'react';

import CardBrand from './CardBrand'


const Brands = () => {
	const brands = [
		{
			id: '1',
			name: 'Dolce and Gabbana',
			src: require("../img/dolce and gabbana.jpg"),
			link: 'https://www.fragrantica.com/perfume/Dolce-Gabbana/The-Only-One-Eau-de-Parfum-Intense-59312.html'
		},
		{
			id: '2',
			name: 'Euphoria Calvin Klein',
			src: require("../img/calvin.jpg"),
			link: 'https://www.fragrantica.com/perfume/Calvin-Klein/Euphoria-253.html'
		},
		{
			id: '3',
			name: 'Mont Blanc',
			src: require('../img/montB.jpg'),
			link: 'https://www.amazon.com/MONTBLANC-Legend-Eau-Toilette-fl-oz/dp/B0050EB0Q4',
		},
		{
			id: '4',
			name: 'Christian Dior',
			src: require('../img/cdior.jpg'),
			link: 'https://www.fragrantica.com/perfume/Dior/Dune-221.html'
		},
		{
			id: '5',
			name: 'Jimmy Choco',
			src: require('../img/jc.jpg'),
			link: 'https://perfumeplugng.com/product/jimmy-choo-fever-edp-100ml-perfume-for-women/?v=4874ed2a3309'
		},
		{
			id: '6',
			name: 'Versace',
			src: require('../img/versace.jpg'),
			link: 'https://www.fragrantica.com/perfume/Versace/Versace-Pour-Homme-Dylan-Blue-40031.html'
		}
	];
    return (
			<div className='brandSection mt-5'>
				<div className='container '>
					<div className='text-center '>
						<h1 className='brandFragrance p-4'>Top Fragrance Brand </h1>
						<div className='brandSmall'>
							View All Brand
						</div>
						<div className='row'>
							{brands.map((brand) => (
								<div className='col-md-4 mb-3' key={brand.id}>
									<CardBrand brand={brand} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
}

export default Brands
