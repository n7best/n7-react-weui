import React from 'react';
import style from './style';

const CellsTitle = (props) => {
	return (
		<div className="weui_cells_title">
		<p>{props.children}</p>
		</div>
		);
}


export default CellsTitle;