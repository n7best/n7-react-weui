import React from 'react';
import Button from '../../style/components/button';
import Page from '../../style/components/page';

const PageButton = (props) => {

	return (
		<Page title="Button" className="button" transition="fadeInRight">
			<div className="bd spacing">
				<Button type="primary">按钮</Button>
				<Button type="primary" disabled>按钮</Button>
				<Button type="warn">确认</Button>
				<Button type="warn" disabled>确认</Button>
				<Button>确认</Button>
				<Button disabled>确认</Button>
				<div className="button_sp_area">
					<Button plain>按钮</Button>
					<Button type="primary" plain>按钮</Button>
					<Button type="primary" mini>按钮</Button>
					<Button mini>按钮</Button>
				</div>
			</div>
		</Page>
		);
};


export default PageButton;