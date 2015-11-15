import React from 'react';
import style from './style';
import CellsTitle from './cells-title';
import CellsTips from './cells-tips';


const Cells = (props) => {

	let className = "weui_cells";
	if(props.className) className += ` ${props.className}`;
	if(props.split) className += ' weui_cell_split';
	if(props.access) className += ' weui_cells_access';
	if(props.radio) className += ' weui_cells_radio';
	if(props.checkbox) className += ' weui_cells_checkbox';
	if(props.form) className += ' weui_cells_form';

	let cellsTitle,cellsTips;
	if(props.title)cellsTitle = <CellsTitle>{props.title}</CellsTitle>;
	if(props.tips)cellsTips = <CellsTips>{props.tips}</CellsTips>;

	return (
		<div>
			{cellsTitle}
			<div className={className}>
			{props.children}
			</div>
			{cellsTips}
		</div>
		);
}

Cells.propTypes = {
	className: React.PropTypes.string,
	title: React.PropTypes.string,
	tips: React.PropTypes.string,
	split: React.PropTypes.bool,
	access: React.PropTypes.bool,
	radio: React.PropTypes.bool,
	checkbox: React.PropTypes.bool,
	form: React.PropTypes.bool,
};

Cells.defaultProps = {
	className: '',
	split: false,
	access: false,
	radio: false,
	checkbox: false,
	form: false,
};

export default Cells;