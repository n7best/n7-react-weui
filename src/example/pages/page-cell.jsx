import React from 'react';
import Cells from '../../style/components/cells';
import Cell from '../../style/components/cells/cell';
import CellHeader from '../../style/components/cells/cell-header';
import CellBody from '../../style/components/cells/cell-body';
import Page from '../components/page';

const PageCell = (props) => {

	return (
		<Page title="Cell" className="cell">
			<div className="bd">
				<CellBody title="带说明的列表项">

				</CellBody>
			</div>
		</Page>
		);
};


export default PageCell;