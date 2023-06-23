const Card = ({ img, name, price }) => {
	return (
		<div className='border rounded-3xl p-4 w-[210px] h-[260px]'>
			<img className='mx-auto' width={133} height={112} src={`/images/sneakers/${img}.jpg`} alt='Sneakers' />
			<h5 className='py-2'>{name}</h5>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col'>
					<span>Price:</span>
					<b>{price} $</b>
				</div>
				<button className='flex items-center justify-center h-8 w-8 border rounded-lg'>
					<img width={11} height={11} src='/images/plus.svg' alt='Plus' />
				</button>
			</div>
		</div>
	);
};

export default Card;
