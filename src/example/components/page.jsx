import React from 'react';
import PageHeader from './page-header';

const Page = (props) => {
	let className = "page";
	if(props.className) className += ` ${props.className}`;
	return (
		<div className={className}>
			<PageHeader title={props.title} desc={props.desc} />
			{props.children}
		</div>
		);
};


export default Page;