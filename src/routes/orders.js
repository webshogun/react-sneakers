import { useContext } from 'react';
import { AppContext } from '../app';
import Card from '../components/card';

const Orders = () => {
  const sneakers = useContext(AppContext);
	return (
		<div className='px-14'>
			<h1 className='font-bold text-3xl'>My orders</h1>
			<div className='flex flex-wrap gap-10 py-6 justify-center'>
				{sneakers?.map((item) => (
					<Card key={item.id} img={item.id} price={item.price} name={item.name} />
				))}
			</div>
		</div>
	);
};

export default Orders;
