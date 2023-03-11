
type TitleAcordionType = {
	title:string
}
function Accordion(props:TitleAcordionType) {
	return (
		<>
			<AccordionTitle title={props.title} />
			<AccordionBody />
		</>

	)
}
function AccordionTitle(props:TitleAcordionType) {
	return (
		<h2 className="accordion__title">{props.title}</h2>
	)
}
function AccordionBody() {
	return (
		<ul className="accordion__list">
			<li className="accordion__item">1</li>
			<li className="accordion__item">2</li>
			<li className="accordion__item">3</li>
		</ul>
	)
}

export default Accordion;