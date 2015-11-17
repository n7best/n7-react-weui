import React from 'react';
import Cells from '../../style/components/cells/cells';
import Cell from '../../style/components/cells/cell';
import CellHeader from '../../style/components/cells/cell-header';
import CellBody from '../../style/components/cells/cell-body';
import CellFooter from '../../style/components/cells/cell-footer';
import Page from '../components/page';

const App = (props) => {

	return (
		<Page title="React WeUI" desc="为微信Web服务量身设计">
			<Cells split access className="global_navs" title="示例">
				<Cell link="#/todo">
					<CellHeader>
						<img src="./images/icon_nav_cell.png" className="icon_nav" />
					</CellHeader>
					<CellBody>记事本</CellBody>
					<CellFooter />
				</Cell>
			</Cells>
			<Cells split access className="global_navs" title="组件">
				<Cell link="#/button">
					<CellHeader>
						<img src="./images/icon_nav_button.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Button</CellBody>
					<CellFooter />
				</Cell>
				<Cell link="#/cell">
					<CellHeader>
						<img src="./images/icon_nav_cell.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Cell</CellBody>
					<CellFooter />
				</Cell>
			</Cells>
		</Page>
		);
};


export default App;