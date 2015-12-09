import React from 'react';
import style from './style';
import classNames from 'classnames';

const CellBody = (props) => {
	let className = classNames('weui_cell_bd',{
		weui_cell_primary : props.primary
	},props.className)

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