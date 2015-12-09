import React from 'react';
import style from './style';
import classNames from 'classnames';

const CellFooter = (props) => {
	let className = classNames('weui_cell_ft',{
		weui_cell_primary: props.primary
	},props.className);

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