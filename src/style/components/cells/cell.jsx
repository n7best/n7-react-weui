import React from 'react';
import style from './style';
import CellHeader from './cell-header';
import CellBody from './cell-body';
import CellFooter from './cell-footer';

const Cell = (props) => {
	let className = 'weui_cell';
	
	if(props.className) className += ` ${props.className}`;
	


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
};

Cell.defaultProps = {
	className: '',
	link: 'javascript:;'
};

export default Cell;