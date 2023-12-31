const Drawer = ({ opened, onClose }) => {
	return (
		<div
			className={` ${
				opened
					? 'absolute top-0 left-0 w-full h-full bg-black/[.5] z-10 visible'
					: 'invisible opacity-0 transition-opacity'
			}`}
		>
			<div className='absolute right-0 flex flex-col bg-white h-full w-1/5 p-7'>
				<div className='flex items-center justify-between'>
					<h2 className=' font-bold text-2xl'>Cart</h2>
					<button className='flex items-center justify-center h-8 w-8 border rounded-lg' onClick={onClose}>
						<img className='' width={11} height={11} src='/images/remove.svg' alt='Close' />
					</button>
				</div>
				<div className='flex flex-col flex-1'>
					<div className='flex-1 my-7'>
						<div className='flex border rounded-3xl items-center p-3'>
							<img className='' width={70} height={70} src='/images/sneakers/1.jpg' alt='Sneakers' />
							<div className='w-44 mx-auto'>
								<h5 className='text-sm'>Men's Nike Blazer Mid Suede Sneakers</h5>
								<b className=' text-sm'>699$</b>
							</div>
							<button className='flex items-center justify-center h-8 w-8 border rounded-lg'>
								<img className='' src='images/remove.svg' alt='Remove' />
							</button>
						</div>
					</div>
					<div className='flex flex-col gap-5'>
						<ul className='flex flex-col gap-4'>
							<li className='flex items-center justify-between'>
								<span className='text-base'>Total:</span>
								<div className='h-px border-b border-dashed relative flex-1 mx-2'></div>
								<b className='text-base font-semibold'>699 $</b>
							</li>
							<li className='flex items-center justify-between'>
								<span>Tax 5%:</span>
								<div className='h-px border-b border-dashed relative flex-1 mx-2'></div>
								<b>34.95 $</b>
							</li>
						</ul>
						<button className='flex items-center w-full bg-green-400 rounded-2xl h-12 gap-4 text-white font-inter font-semibold text-base justify-center'>
							Place an order <img src='images/arrow.svg' alt='Arrow' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
