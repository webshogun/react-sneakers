import { useState, useEffect } from 'react';
import Card from './components/card';
import Header from './components/header';

export default function App() {
	const [sneakers, setSneakers] = useState([]);

	useEffect(() => {
		fetch('https://649178b12f2c7ee6c2c84676.mockapi.io/sneakers')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setSneakers(data);
			});
	}, []);

	return (
		<div className='bg-blue-100 py-20'>
			<div className='max-w-[1080px] mx-auto rounded-xl bg-white shadow-xl'>
				<Header />
				<main className='px-14'>
					<div className='flex justify-between items-center'>
						<h1 className='font-inter font-bold text-3xl'>All sneakers</h1>
						<div className='flex items-center gap-3 px-4 py-2 border rounded-lg'>
							<img src='/images/search.svg' alt='Search' />
							<input className='' placeholder='Search...' />
						</div>
					</div>
					<div className='flex flex-wrap gap-10 py-6 justify-center'>
						{sneakers?.map((item) => (
							<Card key={item.id} img={item.id} price={item.price} name={item.name} />
						))}
					</div>
				</main>
			</div>
		</div>
	);
}
