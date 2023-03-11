import React from 'react';

export type TaskType = {
	id: number,
	title: string,
	isDone: boolean
}

type PropsType = {
	title: string
	task: Array<TaskType>
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
				<li><input type="checkbox" checked={props.task[0].isDone} /><span>{props.task[0].title}</span></li>
				<li><input type="checkbox" checked={props.task[1].isDone} /><span>{props.task[1].title}</span></li>
				<li><input type="checkbox" checked={props.task[2].isDone} /><span>{props.task[2].title}</span></li>
			</ul>
			<div className='box__buttons-box'>
				<button className='box__button'>All</button>
				<button className='box__button'>Active</button>
				<button className='box__button'>Completed</button>
			</div>
		</div>
	)
}
export default TodoList;