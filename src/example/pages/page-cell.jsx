import React from 'react';
import Cells from '../../style/components/cells/cells';
import Cell from '../../style/components/cells/cell';
import RadioCells from '../../style/components/cells/radio-cells';
import RadioCell from '../../style/components/cells/radio-cell';
import SwitchCell from '../../style/components/cells/switch-cell';
import CheckboxCell from '../../style/components/cells/checkbox-cell';
import InputCell from '../../style/components/cells/input-cell';
import CellHeader from '../../style/components/cells/cell-header';
import CellBody from '../../style/components/cells/cell-body';
import CellFooter from '../../style/components/cells/cell-footer';
import Button from '../../style/components/button';
import ButtonArea from '../../style/components/button/button-area';
import Select from '../../style/components/cells/input-select';
import Page from '../../style/components/page';

const PageCell = (props) => {
	
	let iconStyle = {
		width: '20px',
		marginRight: '5px',
		display: 'block'
	};

	let icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=";
	
	let select1data = [
		{
			value:"1",
			label:"+86"
		},
		{
			value:"2",
			label:"+80"
		},
		{
			value:"3",
			label:"+84"
		},
		{
			value:"4",
			label:"+87"
		}
	];
	let select1 = <Select data={select1data} value="1" name="select1"/>;

	let select2data=[
		{
			value:"1",
			label:"微信号"
		},
		{
			value:"2",
			label:"QQ号"
		},
		{
			value:"3",
			label:"Email"
		}
	];
	let select2 = <Select data={select2data} value="1" name="select2"/>;

	let select3data=[
		{
			value:"1",
			label:"中国"
		},
		{
			value:"2",
			label:"美国"
		},
		{
			value:"3",
			label:"英国"
		}
	];
	let select3 = <Select data={select3data} value="2" name="select3"/>;

	return (
		<Page title="Cell" className="cell">
			<div className="bd">
				<Cells title="带说明的列表项">
					<Cell>
						<CellBody>标题文字</CellBody>
						<CellFooter>说明文字</CellFooter>
					</Cell>
				</Cells>
				<Cells title="带图标、说明的列表项">
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
				<Cells title="带跳转的列表项" access access>
					<Cell >
						<CellBody>Cell Standard</CellBody>
						<CellFooter/>
					</Cell>
					<Cell>
						<CellBody>Cell Standard</CellBody>
						<CellFooter/>
					</Cell>
				</Cells>
				<Cells title="带说明、跳转的列表项" access>
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
				<Cells title="带图标、说明、跳转的列表项" access>
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
				<Cells title="复选列表项" checkbox>
					<CheckboxCell name="checkbox1" id="s11" label="uncheck cell" />
					<CheckboxCell name="checkbox2" id="s12" label="checked cell" />
				</Cells>
				<Cells title="开关" form>
					<SwitchCell name="switch1" id="sw1" label="标题文字" />
				</Cells>
				<Cells title="表单" tips="底部说明文字底部说明文字" form>
					<InputCell name="textqq" type="number" id="text1" label="QQ" placeholder="请输入qq号" />
					<InputCell name="textvcode" type="text" id="text2" label="验证码" placeholder="请输入验证码" vcode="./images/vcode.jpg"/>
					<InputCell name="textbank" type="number" id="text3" label="银行卡" placeholder="请输入银行卡号" />
					<InputCell name="textvcode2" type="text" id="text4" label="验证码" placeholder="请输入验证码" vcode="./images/vcode.jpg" error/>
				</Cells>
				<ButtonArea>
					<Button type="primary">确定</Button>
				</ButtonArea>
				<Cells title="表单报错" form>
					<InputCell name="textbank2" type="number" id="text5" label="银行卡" placeholder="请输入银行卡号" error/>
					<InputCell name="textdate" type="date" id="text6" label="日期" />
					<InputCell name="textdatetime" type="datetime-local" id="text7" label="时间" />
				</Cells>
				<Cells title="选择">
					<InputCell header={select1} name="selecttext" type="text" id="selecttext" placeholder="请输入号码" selectBefore/>
					<Cell select><CellBody>{select2}</CellBody></Cell>
					<Cell selectAfter><CellHeader>国家/地区</CellHeader><CellBody>{select3}</CellBody></Cell>
				</Cells>
			</div>
		</Page>
		);
};


export default PageCell;