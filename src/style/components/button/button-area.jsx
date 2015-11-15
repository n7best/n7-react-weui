import React from 'react';
import style from './style';


const ButtonArea = (props) => {
	let className = 'weui_btn_area';
	
	if(props.className) className += ` ${props.className}`;

	return (
		<div className={className}>
			{props.children}
		</div>
		);
}

ButtonArea.propTypes = {
	className: React.PropTypes.string,
};

ButtonArea.defaultProps = {
	className: '',
};

export default ButtonArea;