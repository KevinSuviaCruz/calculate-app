import { useSelector } from 'react-redux';
import { Calculator } from './calculator/component/Calculator';

export const App = () => {
	const { num1, resolve, num2, equal2, total } = useSelector(
		state => state.calculator
	);
	return (
		<div className='bg-Very-dark-desaturated-blue-main h-screen flex items-center'>
			<div className='w-1/4 mx-auto h-2/3'>
				<header>
					<h2 className='text-white text-xl mb-2 font-bold'>Calc</h2>
				</header>
				<main className='h-full'>
					<div className='bg-Very-dark-desaturated-blue-screen rounded-md flex justify-end py-8'>
						<div className='flex flex-col mx-2'>
							<div className=''>
								{resolve !== 0 && (
									<h1
										className={`text-Very-dark-grayish-blue text-xl font-black`}
									>
										{equal2
											? `${num2} ${resolve} ${num1} =`
											: `${num2} ${resolve}`}
										{/* {num2} {resolve} {equal && '='} */}
									</h1>
								)}
							</div>
							<div className='flex justify-end'>
								<h1 className='text-white text-3xl font-black'>{total}</h1>
							</div>
						</div>
					</div>

					<div className='mt-4'>
						<Calculator />
					</div>
				</main>
			</div>
		</div>
	);
};
