import React from 'react';
import style from './style';


const CellHeader = (props) => {
	let className = 'weui_cell_hd';
	
	if(props.className) className += ` ${props.className}`;
	if(props.primary) className += ' weui_cell_primary';

	return (
		<span className={className}>
			{props.children}
		</span>
		);
}

CellHeader.propTypes = {
	className: React.PropTypes.string,
	primary: React.PropTypes.bool,
};

CellHeader.defaultProps = {
	className: '',
	primary: false
};

export default CellHeader;