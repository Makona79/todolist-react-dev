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
	changeTaskStatus: (taskId: string, isDone: boolean) => void
	filter: FilterValuesType
}

function TodoList(props: PropsType) {
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [error, setError] = useState<string | null>('')

	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null);
		if (e.key === 'Enter') {
			props.addTask(newTaskTitle);
			setNewTaskTitle('')
		}
	}
	const addTask = () => {
		if (newTaskTitle.trim() !== '') {
			props.addTask(newTaskTitle.trim());
			setNewTaskTitle('')
		} else {
			setError('Title is required')

		}
	}
	const onAllClickHandler = () => props.changeFilter('all');
	const onAllActiveHandler = () => props.changeFilter('active');
	const onAllCompletedHandler = () => props.changeFilter('completed');

	return (
		<div className='box__item'>
			<h2 className='box__title'>{props.title}</h2>
			<div>
				<input type="text" value={newTaskTitle}
					onChange={onNewTitleChangeHandler}
					onKeyDown={onKeyPressHandler}
					className={error ? "error" : ''}
				/>
				<button onClick={addTask}>+</button>
				{error &&
					<div className="error-message">Fielf is required</div>}
			</div>
			<ul className='box__list'>
				{
					props.task.map(t => {
						const onRemoveHandler = () => props.removeTask(t.id);
						const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
							props.changeTaskStatus(t.id, e.currentTarget.checked);
							
						}
						return (
							<li key={t.id} className={t.isDone ? 'is-done' : ''}>
								<input type="checkbox" checked={t.isDone}
									onChange={onChangeHandler} />
								<span>{t.title} </span>
								<button onClick={onRemoveHandler}> x </button>
							</li>)
					})
				}
			</ul>
			<div className='box__buttons-box'>
				<button className={props.filter === "all" ? 'box__button active-filter' : 'box__button'}
					onClick={onAllClickHandler}>All</button>
				<button className={props.filter === "active" ? 'box__button active-filter' : 'box__button'}
					onClick={onAllActiveHandler}>Active</button>
				<button className={props.filter === "completed" ? 'box__button active-filter' : 'box__button'}
					onClick={onAllCompletedHandler}>Completed</button>
			</div>
		</div>
	)
}
export default TodoList;