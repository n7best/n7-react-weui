import React from 'react';
import style from './style';
import classNames from 'classnames';

const CellHeader = (props) => {
	let className = classNames('weui_cell_hd',{
		weui_cell_primary: props.primary
	},props.className);

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