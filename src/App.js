import { useState, useEffect, createContext } from 'react';
import Header from './components/header';
import Drawer from './components/drawer';
import { Outlet } from 'react-router-dom';

export const AppContext = createContext({});

export default function App() {
	const [opened, setOpened] = useState(false);
	const [sneakers, setSneakers] = useState([]);

	useEffect(() => {
		try {
			fetch('https://649178b12f2c7ee6c2c84676.mockapi.io/sneakers')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					setSneakers(data);
				});
		} catch (error) {
			alert('Error when requesting data ;(');
			console.error(error);
		}
	}, []);

	return (
		<AppContext.Provider value={sneakers}>
			<Drawer opened={opened} onClose={() => setOpened(false)} />
			<div className='max-w-[1080px] mx-auto my-12 rounded-xl bg-white shadow-xl'>
				<Header onOpen={() => setOpened(true)} />
				<Outlet />
			</div>
		</AppContext.Provider>
	);
}
