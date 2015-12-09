import React from 'react';
import style from './style';
import CellsTitle from './cells-title';
import CellsTips from './cells-tips';
import classNames from 'classnames';

const Cells = (props) => {

	let className = classNames('weui_cells', {
		weui_cells_access : props.access,
		weui_cells_radio : props.radio,
		weui_cells_checkbox : props.checkbox,
		weui_cells_form : props.form,
	}, props.className);

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
	access: React.PropTypes.bool,
	radio: React.PropTypes.bool,
	checkbox: React.PropTypes.bool,
	form: React.PropTypes.bool,
};

Cells.defaultProps = {
	className: '',
	access: false,
	radio: false,
	checkbox: false,
	form: false,
};

export default Cells;