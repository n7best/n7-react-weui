import React from 'react';
import style from './style';


const CellBody = (props) => {
	let className = 'weui_cell_hd';
	
	if(props.className) className += ` ${props.className}`;
	if(props.primary) className += ' weui_cell_primary';

	return (
		<span className={className}>
			{props.children}
		</span>
		);
}

CellBody.propTypes = {
	className: React.PropTypes.string,
	primary: React.PropTypes.bool,
};

CellBody.defaultProps = {
	className: '',
	primary: true
};

export default CellBody;