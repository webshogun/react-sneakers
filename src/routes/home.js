import { useContext } from 'react';
import { AppContext } from '../app';
import Card from '../components/card';

const Home = () => {
	const sneakers = useContext(AppContext);
	return (
		<main className='px-14'>
			<div className='flex justify-between items-center'>
				<h1 className='font-bold text-3xl'>All sneakers</h1>
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
	);
};

export default Home;
