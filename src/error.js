import { useRouteError } from 'react-router-dom';

const Error = () => {
	const error = useRouteError();
	return (
		<div className='flex h-screen justify-center items-center'>
			<div className='text-center'>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</div>
	);
};

export default Error;
