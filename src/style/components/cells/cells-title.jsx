import React from 'react';
import style from './style';
import classNames from 'classnames';

const CellsTitle = (props) => {
  let className = classNames('weui_cells_title', props.className);
	return (
		<div
    {...props}
    className={className}>
		<p>{props.children}</p>
		</div>
		);
}


export default CellsTitle;