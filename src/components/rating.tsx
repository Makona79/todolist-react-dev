import React from 'react';

type RatingPropsType = {
	value: number
}

function Rating(props: RatingPropsType) {
	if (props.value === 1) {
		return (
			<div>
				<p className="descr">star-box:</p>
				<div className="star-box">
					<Star selected={true} />
					<Star selected={false} />
					<Star selected={false} />
					<Star selected={false} />
					<Star selected={false} />
				</div>
			</div>
		)
	}
	if (props.value === 2) {
		<div>
			<p className="descr">star-box:</p>
			<div className="star-box">
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={false} />
				<Star selected={false} />
				<Star selected={false} />
			</div>
		</div>
	}
	if (props.value === 3) {
		return (
			<div>
				<p className="descr">star-box:</p>
				<div className="star-box">
					<Star selected={true} />
					<Star selected={true} />
					<Star selected={true} />
					<Star selected={false} />
					<Star selected={false} />
				</div>
			</div>
		)
	}
	if (props.value === 4) {
		return (
			<div>
				<p className="descr">star-box:</p>
				<div className="star-box">
					<Star selected={true} />
					<Star selected={true} />
					<Star selected={true} />
					<Star selected={true} />
					<Star selected={false} />
				</div>
			</div>
		)
	}
	if (props.value === 5) {
		return (
			<div>
				<p className="descr">star-box:</p>
				<div className="star-box">
					<Star selected={true} />
					<Star selected={true} />
					<Star selected={true} />
					<Star selected={true} />
					<Star selected={true} />
				</div>
			</div>
		)
	} else {
		return (
			<div>
				<p className="descr">star-box:</p>
				<div className="star-box">
					<Star selected={false} />
					<Star selected={false} />
					<Star selected={false} />
					<Star selected={false} />
					<Star selected={false} />
				</div>
			</div>
		)
	}
}
type StarPropsType = {
	selected: boolean
}
function Star(props: StarPropsType) {
	if (props.selected === true) {
		return <span className="star-full">star-full</span>
	} else {
		return <span className="star-emty">star-emty</span>
	}

}

export default Rating;