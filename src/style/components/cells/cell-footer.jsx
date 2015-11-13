import React from 'react';
import style from './style';


const CellFooter = (props) => {
	let className = 'weui_cell_hd';
	
	if(props.className) className += ` ${props.className}`;
	if(props.primary) className += ' weui_cell_primary';

	return (
		<span className={className}>
			{props.children}
		</span>
		);
}

CellFooter.propTypes = {
	className: React.PropTypes.string,
	primary: React.PropTypes.bool,
};

CellFooter.defaultProps = {
	className: '',
	primary: false
};

export default CellFooter;