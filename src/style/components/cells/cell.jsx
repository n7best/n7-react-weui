import React from 'react';
import style from './style';
import CellHeader from './cell-header';
import CellBody from './cell-body';
import CellFooter from './cell-footer';

const Cell = (props) => {
	let className = 'weui_cell';
	
	if(props.className) className += ` ${props.className}`;
	if(props.select || props.selectAfter || props.selectBefore) className+= ' weui_cell_select';
	if(props.selectAfter) className+=' weui_select_after';
	if(props.selectBefore) className+= ' weui_select_before';

	if(props.link){
		return (
		<a href={props.link} className={className}>
			{props.children}
		</a>);
	}else{
		return (
		<div className={className}>
			{props.children}
		</div>);
	}
}

Cell.propTypes = {
	className: React.PropTypes.string,
	link: React.PropTypes.string,
	select: React.PropTypes.bool,
	selectAfter: React.PropTypes.bool,
	selectBefore: React.PropTypes.bool,
};

Cell.defaultProps = {
	className: '',
	link: null,
	select: false,
	selectAfter: false,
	selectBefore: false
};

export default Cell;