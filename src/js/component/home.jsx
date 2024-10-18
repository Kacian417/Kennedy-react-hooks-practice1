import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// create a useState hook
		//variable.   //setter function      //useState function call with initial value within parentheses
	const [counter,   setCounter] =      		 useState(0);
	const [text, setText] = useState('hello');



	return (
		<>
		<div className="counter">
			<h1>{counter}</h1>
			<button onClick={() => {
				setCounter(counter + 1)
			}}>+1</button>

			<button onClick={() => {
				setCounter(counter - 1)
			}}>-1</button>
		</div>

		<div className="text-change">
			<h1>{text}</h1>
			<button onClick={() => {
				setText("Goodbye")
			}}>Change to "Goodbye"</button>
		</div>

		<div className="checkbox">
			<label>
				<input 
					type="checkbox"
					checked={like}
					onChange = {(e) => {
						setLike(e.target.checked)
					}}
				/>
				I like this
			</label>
			<p>You {like ? 'liked' : 'did not like'} this.</p>
		</div>
		</>
	);
};

export default Home;
