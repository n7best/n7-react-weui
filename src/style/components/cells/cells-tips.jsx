import React from 'react';
import style from './style';

const CellsTips = (props) => {
	return (
		<div className="weui_cells_tips">
		<p>{props.children}</p>
		</div>
		);
}


export default CellsTips;