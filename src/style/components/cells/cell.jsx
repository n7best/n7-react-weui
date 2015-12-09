import React from 'react';
import style from './style';
import CellHeader from './cell-header';
import CellBody from './cell-body';
import CellFooter from './cell-footer';
import classNames from 'classnames';

const Cell = (props) => {
	let className = classNames('weui_cell',{
		weui_cell_select : props.select || props.selectAfter || props.selectBefore,
		weui_select_after : props.selectAfter,
		weui_select_before : props.selectBefore
	}, props.className);

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