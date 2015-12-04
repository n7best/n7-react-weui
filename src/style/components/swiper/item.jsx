import React from 'react';
import style from './style';
import classNames from 'classnames';

const SwiperItem = (props) => {
	let className = classNames('item',props.className);
	
	return (
		<div className={className}>
			{props.children}
		</div>
		);
}

SwiperItem.propTypes = {
	className: React.PropTypes.string,
};

SwiperItem.defaultProps = {
	className: '',
};

export default SwiperItem;