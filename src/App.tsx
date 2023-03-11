import React from 'react';

import './App.css';
import Accordion from './components/accordion';
import Rating from './components/rating';
import TodoList, { TaskType } from './components/TodoList';



function App() {
	let task1: Array<TaskType> = [
		{ id: 1, title: 'CSS + HTML', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'React', isDone: false },
	]
	let task2: Array<TaskType> = [
		{ id: 1, title: 'Terminator', isDone: true },
		{ id: 2, title: 'Hero', isDone: true },
		{ id: 3, title: 'Fly', isDone: false },
	]

	return (
		<div className="app">
			<img className='app__image' src="https://i.pinimg.com/originals/ae/a1/e1/aea1e121c836c873ed614b53be21b0e8.png" alt="anime art" width={835} height={520} />
			<h1 className="title">This is app.</h1>
			<div className='box'>
				<TodoList title='What to learn' task={task1} />
				<TodoList title='Movies' task={task2} />
				{/* <TodoList title='Songs' /> */}
			</div>
			<Accordion title='Menu' />
			<Rating value={3} />
			<Rating value={4} />
		</div>
	);
}


export default App;
