import { createSelector, createSlice } from '@reduxjs/toolkit';

const calculateResult = createSelector(
	state => state.num1,
	state => state.num2,
	state => state.resolve,
	(num1, num2, resolve) => {
		let total = 0;
		const number1 = Number(num1);
		const number2 = Number(num2);

		switch (resolve) {
			case '+':
				total = number1 + number2;
				break;
			case '-':
				total = number2 - number1;
				break;
			case 'x':
				total = number1 * number2;
				break;
			case '/':
				total = number2 / number1;
				break;
			default:
				break;
		}
		return total;
	}
);

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: {
		num1: '',
		resolve: 0,
		num2: 0,
		total: 0,
		equal: false,
		result: [],
		equal2: false,
	},

	reducers: {
		asignVal: (state, { payload }) => {
			state.num1 += payload;
			state.total = state.num1;
			state.result.push(state.total);
		},
		removeVal: state => {
			const newNumAsString = state.total.slice(0, -1);
			state.total = newNumAsString;
			state.num1 = newNumAsString;
			state.result = [state.total];
			if (state.num1 === '') {
				state.total = 0;
			}
		},
		asignSymbol: (state, { payload }) => {
			state.num2 = state.total;
			state.num1 = '';
			state.resolve = payload;
			state.equal = false;
		},
		calculate: state => {
			state.total = calculateResult(state);
			state.equal2 = true;
			state.equal = true;
		},
		reloadTotal: state => {
			state.num1 = '';
			state.resolve = 0;
			state.num2 = 0;
			state.total = 0;
			state.equal = false;
			state.result = [];
			state.equal2 = false;
		},
		resetCalculate: state => {
			state.num1 = '';
			state.resolve = 0;
			state.num2 = 0;
			state.total = 0;
			state.equal = false;
			state.result = [];
			state.equal2 = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	asignVal,
	asignSymbol,
	calculate,
	reloadTotal,
	resetCalculate,
	removeVal,
} = calculatorSlice.actions;
