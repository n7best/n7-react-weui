import React from 'react';
import Cells from '../../style/components/cells/cells';
import Cell from '../../style/components/cells/cell';
import RadioCells from '../../style/components/cells/radio-cells';
import RadioCell from '../../style/components/cells/radio-cell';
import SwitchCell from '../../style/components/cells/switch-cell';
import CheckboxCell from '../../style/components/cells/checkbox-cell';
import CellHeader from '../../style/components/cells/cell-header';
import CellBody from '../../style/components/cells/cell-body';
import CellFooter from '../../style/components/cells/cell-footer';
import Page from '../components/page';

const PageCell = (props) => {
	
	let iconStyle = {
		width: '20px',
		marginRight: '5px',
		display: 'block'
	};

	let icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=";
	
	return (
		<Page title="Cell" className="cell">
			<div className="bd">
				<Cells title="带说明的列表项">
					<Cell>
						<CellBody>标题文字</CellBody>
						<CellFooter>说明文字</CellFooter>
					</Cell>
				</Cells>
				<Cells title="带图标、说明的列表项" split>
					<Cell>
						<CellHeader>
							<img style={iconStyle} src={icon}  />
						</CellHeader>
						<CellBody>标题文字</CellBody>
						<CellFooter>说明文字</CellFooter>
					</Cell>
					<Cell>
						<CellHeader>
							<img style={iconStyle} src={icon}  />
						</CellHeader>
						<CellBody>标题文字</CellBody>
						<CellFooter>说明文字</CellFooter>
					</Cell>
				</Cells>
				<Cells title="带跳转的列表项" access split access>
					<Cell >
						<CellBody>Cell Standard</CellBody>
						<CellFooter/>
					</Cell>
					<Cell>
						<CellBody>Cell Standard</CellBody>
						<CellFooter/>
					</Cell>
				</Cells>
				<Cells title="带说明、跳转的列表项" split access>
					<Cell>
						<CellHeader>
							<img style={iconStyle} src={icon}  />
						</CellHeader>
						<CellBody>标题文字</CellBody>
						<CellFooter>说明文字</CellFooter>
					</Cell>
					<Cell>
						<CellHeader>
							<img style={iconStyle} src={icon}  />
						</CellHeader>
						<CellBody>标题文字</CellBody>
						<CellFooter>说明文字</CellFooter>
					</Cell>
				</Cells>
				<Cells title="带图标、说明、跳转的列表项" split access>
					<Cell>
						<CellHeader>
							<img style={iconStyle} src={icon}  />
						</CellHeader>
						<CellBody>标题文字</CellBody>
						<CellFooter>说明文字</CellFooter>
					</Cell>
					<Cell>
						<CellHeader>
							<img style={iconStyle} src={icon}  />
						</CellHeader>
						<CellBody>标题文字</CellBody>
						<CellFooter>说明文字</CellFooter>
					</Cell>
				</Cells>
				<RadioCells  name='danxuan' value='1' title="带图标、说明、跳转的列表项" split>
					<RadioCell label='radio cell 1' value='1'/>
					<RadioCell label='radio cell 2' value='2'/>
				</RadioCells>
				<Cells title="复选列表项" split checkbox>
					<CheckboxCell name="checkbox1" id="s11" label="uncheck cell" />
					<CheckboxCell name="checkbox2" id="s12" label="checked cell" />
				</Cells>
				<Cells title="开关" form>
					<SwitchCell name="switch1" id="sw1" label="标题文字" />
				</Cells>
			</div>
		</Page>
		);
};


export default PageCell;