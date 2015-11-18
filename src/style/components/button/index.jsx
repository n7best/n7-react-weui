import React from 'react';
import style from './style';

const Button = (props) => {
	let className = 'weui_btn';
	//es7 const { disabled, plain, mini, type } = props;
	className += props.plain ? ` weui_btn_plain_${props.type}` : ` weui_btn_${props.type}`;
	if(props.className) className += ` ${props.className}`;
	if(props.disabled || props.loading) className += ' weui_btn_disabled';
	if(props.mini) className += ' weui_btn_mini';

	return (
		<a 
		{...props}
		href={props.href} 
		className={className}
		disabled={props.disabled || props.loading}
		>
		{props.children}
		</a>
		);
}
	//type: primary warn default
	//state: disabled
	//visual plain
	//mini
Button.propTypes = {
	className: React.PropTypes.string,
	href: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	plain: React.PropTypes.bool,
	mini: React.PropTypes.bool,
	loading: React.PropTypes.bool,
	type: React.PropTypes.string
};

Button.defaultProps = {
	className: '',
	disabled: false,
	plain: false,
	min: false,
	loading: false,
	type: 'default',
	href: 'javascript:;'
};

export default Button;