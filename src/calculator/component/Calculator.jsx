import { calculator } from '../../components/calculator/calculator';
import { CaculatorElements } from './CaculatorElements';

export const Calculator = () => {
	return (
		<ul className='grid h-96 grid-rows-4 grid-cols-4 gap-4 p-5 bg-Very-dark-desaturated-blue-toggle rounded-md'>
			{calculator.map(value => (
				<CaculatorElements key={value.valCalculator} value={value} />
			))}
		</ul>
	);
};
