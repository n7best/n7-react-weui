import React from 'react';

const PageHeader = (props) => {
	let desc = props.desc ? <p className="page_desc">{props.desc}</p> : null;
	return (
		<div className="hd">
			<h1 className="page_title">{props.title}</h1>
            {desc}
		</div>
		)
};

export default PageHeader;