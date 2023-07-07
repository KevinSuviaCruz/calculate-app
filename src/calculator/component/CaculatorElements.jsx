import { useDispatch, useSelector } from 'react-redux';
import {
	asignSymbol,
	asignVal,
	calculate,
	reloadTotal,
	removeVal,
	resetCalculate,
} from '../../store/calculator/calculatorSlice';

export const CaculatorElements = ({ value }) => {
	const dispatch = useDispatch();
	const { equal2, equal, total, result, num1, num2 } = useSelector(
		state => state.calculator
	);
	const hasMultipleDots = result.filter(item => item.split('.').length - 1 > 0);
	const handleVal = num => {
		const number = Number(num);
		if (
			(total > 0 &&
				num === '.' &&
				hasMultipleDots.length === 0 &&
				num1 !== '') ||
			number ||
			(total.length > 0 && number === 0)
		) {
			dispatch(asignVal(num));
		}
		if (
			(total === 0 && num1 === '' && num2 > 0 && num !== 'DEL' && num1 === 0) ||
			(num === '.' && total === 0)
		) {
			dispatch(asignVal('0' + num));
		}
		if (
			num.length === 1 &&
			!number &&
			num !== '.' &&
			num !== '=' &&
			num !== '0'
		) {
			dispatch(asignSymbol(num));
		}

		if (num === '=') {
			dispatch(calculate(num));
		}

		if (equal2 && number && equal) {
			dispatch(reloadTotal());
			dispatch(asignVal(num));
		}
		if (number === 0 && equal2 && equal) {
			dispatch(reloadTotal());
		}

		if (num === '.' && equal) {
			dispatch(reloadTotal());
			dispatch(asignVal('0' + num));
		}

		if (num === 'RESET') {
			dispatch(resetCalculate());
		}
		if (num === 'DEL' && total !== 0 && !equal) {
			dispatch(removeVal());
		}
	};
	return (
		<li
			className={`rounded-md  ${
				value.reset || value.equal || value.deletePrevious
					? value.reset
						? 'bg-Desaturated-dark-blue col-span-2 text-white'
						: value.equal
						? 'bg-Red-key col-span-2 text-white'
						: 'bg-Desaturated-dark-blue text-white'
					: 'bg-Grayish-orange text-Very-dark-grayish-blue'
			}
		    `}
		>
			<button
				className={`p-2 w-full h-full text-2xl font-black 
                        `}
				onClick={() => handleVal(value.valCalculator)}
			>
				{value.valCalculator}
			</button>
		</li>
	);
};
