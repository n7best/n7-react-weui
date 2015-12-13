import React from 'react';
import style from './style';
import classNames from 'classnames';

var Button = (props) => {
	let className = classNames('weui_btn',{
		[`weui_btn_${props.type}`]: !props.plain,
		[`weui_btn_plain_${props.type}`]: props.plain,
		weui_btn_disabled: props.disabled,
		weui_btn_mini: props.mini
	});

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