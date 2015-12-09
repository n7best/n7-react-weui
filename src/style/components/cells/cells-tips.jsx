import React from 'react';
import style from './style';
import classNames from 'classnames';

const CellsTips = (props) => {
  let className = classNames('weui_cells_tips', props.className);
	return (
    <div
    {...props}
    className={className}>
		<p>{props.children}</p>
		</div>
		);
}

export default CellsTips;