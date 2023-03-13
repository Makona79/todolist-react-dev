import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from '../App';

export type TaskType = {
	id: string,
	title: string,
	isDone: boolean
}

type PropsType = {
	title: string
	task: Array<TaskType>
	removeTask: (id: string) => void
	changeFilter: (value: FilterValuesType) => void
	addTask: (title: string) => void
}

function TodoList(props: PropsType) {
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			props.addTask(newTaskTitle);
			setNewTaskTitle('')
		}
	}
	const addTask = () => {
		props.addTask(newTaskTitle);
		setNewTaskTitle('')
	}
	const onAllClickHandler = () => props.changeFilter('all');
	const onAllActiveHandler = () => props.changeFilter('active');
	const onAllCompletedHandler = () => props.changeFilter('completed');

	return (
		<div className='box__item'>
			<h2 className='box__title'>{props.title}</h2>
			<div>
				<input type="text" value={newTaskTitle} onChange={onNewTitleChangeHandler}
					onKeyDown={onKeyPressHandler}
				/>
				<button onClick={addTask}>+</button>
			</div>
			<ul className='box__list'>
				{
					props.task.map(t => {
						const onRemoveHandler = () => props.removeTask(t.id);
						return (
							<li key={t.id}>
								<input type="checkbox" checked={t.isDone} />
								<span>{t.title} </span>
								<button onClick={onRemoveHandler}> x </button>
							</li>)
					})
				}
			</ul>
			<div className='box__buttons-box'>
				<button className='box__button' onClick={onAllClickHandler}>All</button>
				<button className='box__button' onClick={onAllActiveHandler}>Active</button>
				<button className='box__button' onClick={onAllCompletedHandler}>Completed</button>
			</div>
		</div>
	)
}
export default TodoList;