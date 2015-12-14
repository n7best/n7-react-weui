import React from 'react';
import Cells from '../../style/components/cells/cells';
import Cell from '../../style/components/cells/cell';
import CellHeader from '../../style/components/cells/cell-header';
import CellBody from '../../style/components/cells/cell-body';
import CellFooter from '../../style/components/cells/cell-footer';
import Page from '../../style/components/page';

const App = (props) => {

	return (
		<Page title="React WeUI" desc="为微信Web服务量身设计">
			<Cells access className="global_navs" title="官方组件">
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
				<Cell link="#/toast">
					<CellHeader>
						<img src="./images/icon_nav_toast.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Toast</CellBody>
					<CellFooter />
				</Cell>
				<Cell link="#/dialog">
					<CellHeader>
						<img src="./images/icon_nav_dialog.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Dialog</CellBody>
					<CellFooter />
				</Cell>
				<Cell link="#/progress">
					<CellHeader>
						<img src="./images/icon_nav_button.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Progress</CellBody>
					<CellFooter />
				</Cell>
				<Cell link="#/message">
					<CellHeader>
						<img src="./images/icon_nav_msg.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Msg Page</CellBody>
					<CellFooter />
				</Cell>
				<Cell link="#/article">
					<CellHeader>
						<img src="./images/icon_nav_article.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Article Page</CellBody>
					<CellFooter />
				</Cell>
				<Cell link="#/actionsheet">
					<CellHeader>
						<img src="./images/icon_nav_actionSheet.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Actionsheet</CellBody>
					<CellFooter />
				</Cell>
				
			</Cells>
			<Cells access className="global_navs" title="第三方组件">
				<Cell link="#/swiper">
					<CellHeader>
						<img src="./images/icon_nav_button.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Swiper</CellBody>
					<CellFooter />
				</Cell>
				<Cell link="#/ptr">
					<CellHeader>
						<img src="./images/icon_nav_button.png" className="icon_nav" />
					</CellHeader>
					<CellBody>Pull To Refresh</CellBody>
					<CellFooter />
				</Cell>
			</Cells>
		</Page>
		);
};


export default App;