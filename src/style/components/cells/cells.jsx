import React from 'react';
import style from './style';
import CellsTitle from './cells-title';


const Cells = (props) => {

	let className = "weui_cells";
	if(props.className) className += ` ${props.className}`;
	if(props.split) className += ' weui_cell_split';
	if(props.access) className += ' weui_cells_access';
	if(props.radio) className += ' weui_cells_radio';

	let cellsTitle;
	if(props.title !== null) {
		cellsTitle = <CellsTitle>{props.title}</CellsTitle>;
	} else {
		cellsTitle = null;
	}

	return (
		<div>
			{cellsTitle}
			<div className={className}>
			{props.children}
			</div>
		</div>
		);
}

Cells.propTypes = {
	className: React.PropTypes.string,
	title: React.PropTypes.string,
	split: React.PropTypes.bool,
	access: React.PropTypes.bool,
	radio: React.PropTypes.bool
};

Cells.defaultProps = {
	className: '',
	title: null,
	split: false,
	access: false,
	radio: false,
};

export default Cells;