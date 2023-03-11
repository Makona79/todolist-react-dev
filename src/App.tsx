import React, { useState } from 'react';

import './App.css';
import Accordion from './components/accordion';
import Rating from './components/rating';
import TodoList, { TaskType } from './components/TodoList';

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {
	let initTasks: Array<TaskType> = [
		{ id: 1, title: 'CSS + HTML', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'React', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
	]
	// let task2: Array<TaskType> = [
	// 	{ id: 1, title: 'Terminator', isDone: true },
	// 	{ id: 2, title: 'Hero', isDone: true },
	// 	{ id: 3, title: 'Fly', isDone: false },
	// ]

	const [tasks, setTasks] = useState<Array<TaskType>>(initTasks);
	const [filter, setFilter] = useState<FilterValuesType>('all');

	function removeTask(id: number) {
		let filterTasks = tasks.filter(t => (t.id !== id));
		setTasks(filterTasks);
	}
	function changeFilter(value: FilterValuesType) {
		setFilter(value);
	}
	let taskForTodoList = tasks;
	if (filter === 'completed') {
		taskForTodoList = tasks.filter(t => (t.isDone === true));
	}
	if (filter === 'active') {
		taskForTodoList = tasks.filter(t => (t.isDone === false));
	}

	return (
		<div className="app">
			<img className='app__image' src="https://i.pinimg.com/originals/ae/a1/e1/aea1e121c836c873ed614b53be21b0e8.png" alt="anime art" width={835} height={520} />
			<h1 className="title">This is app.</h1>
			<div className='box'>
				<TodoList title='What to learn' task={taskForTodoList} removeTask={removeTask} changeFilter={changeFilter} />
				{/* <TodoList title='Movies' task={task2} /> */}
				{/* <TodoList title='Songs' /> */}
			</div>
			{/* <Accordion title='Menu' />
			<Rating value={3} />
			<Rating value={4} /> */}
		</div>
	);
}


export default App;
