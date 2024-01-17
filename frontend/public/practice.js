// console.log('first-practice')

// console.log('single-quote-test');
// console.log('semi-colon-test');
// function test() {
// 	console.log('function-test');
// }

import React, { useState } from 'react';

function practice() {
	const [count, setCount] = useState(0);

	const onIncrease = () => {
		setCount(count => count + 1);
	};

	const onDecrease = () => {
		setCount(count => count - 1);
	};

	return (
		<>
			<h1>practice</h1>
			<h2>{count}</h2>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</>
	);
}

export default practice;
