import React from 'react';
import { FilterValuesType } from '../App';

export type TaskType = {
	id: number,
	title: string,
	isDone: boolean
}

type PropsType = {
	title: string
	task: Array<TaskType>
	removeTask: (id: number) => void
	changeFilter: (value: FilterValuesType) => void
}

function TodoList(props: PropsType) {

	return (
		<div className='box__item'>
			<h2 className='box__title'>{props.title}</h2>
			<div>
				<input type="text" />
				<button>+</button>
			</div>
			<ul className='box__list'>
				{
					props.task.map(t => <li><input type="checkbox" checked={t.isDone} /> <span>{t.title} </span>
						<button onClick={() => props.removeTask(t.id)}> x </button>
					</li>)
				}
			</ul>
			<div className='box__buttons-box'>
				<button className='box__button' onClick={() => props.changeFilter('all')}>All</button>
				<button className='box__button' onClick={() => props.changeFilter('active')}>Active</button>
				<button className='box__button' onClick={() => props.changeFilter('completed')}>Completed</button>
			</div>
		</div>
	)
}
export default TodoList;