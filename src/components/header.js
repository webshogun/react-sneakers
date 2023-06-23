const Header = ({ onOpen }) => {
	return (
		<header className='border-b px-14 py-10'>
			<div className='flex items-center justify-between '>
				<a className='flex items-center gap-4' href='/'>
					<img src='images/logo.png' alt='Logo' />
					<div>
						<h3 className='text-xl font-bold'>React Sneakers</h3>
						<p className='text-sm font-normal text-gray-600'>Store for the best sneakers</p>
					</div>
				</a>
				<nav className='flex gap-7'>
					<div className='flex gap-3 cursor-pointer' onClick={onOpen}>
						<img src='images/cart.svg' alt='Cart' />
						<span className='text-sm font-semibold text-gray-700'>1205$</span>
					</div>
					<a href='/favorites'>
						<img src='images/heart.svg' alt='Bookmarks' />
					</a>
					<a href='/orders'>
						<img src='images/user.svg' alt='User' />
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
