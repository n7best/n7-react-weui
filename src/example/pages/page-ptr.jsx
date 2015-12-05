import React from 'react';
import Page from '../../style/components/page';
import Cells from '../../style/components/cells/cells';
import Cell from '../../style/components/cells/cell';
import CellHeader from '../../style/components/cells/cell-header';
import CellBody from '../../style/components/cells/cell-body';
import CellFooter from '../../style/components/cells/cell-footer';

class PageSwiper extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	status : 'Normal',
        	refreshing: 'No',
        };
    }

    refresh(el,event){
    	this.setState({status:'Refreshing'});
    	this.setState({refreshing:'Yes'});
    	setTimeout(()=>{
    		el.ptrDone(event);
    		this.setState({refreshing:'no'});
    	},2000);
    }

    render(){
    	return (
		<Page title="Pull To Refresh" className="pageptr"
		ptr
		onPullRefreshStart={()=>this.setState({status:'Pull Start'})}
		onPullRefreshMove={()=>this.setState({status:'Pull Moving'})}
		onPullRefreshEnd={()=>this.setState({status:'Pull End'})}
		onRefresh={this.refresh.bind(this)}
		onRefreshDone={()=>this.setState({status:'Refresh Done'})}
		>
			<Cells split tips="This is the end">
				<Cell><CellBody>Event Illstruation:</CellBody></Cell>
				<Cell><CellBody>Pull Status: {this.state.status}</CellBody></Cell>
				<Cell><CellBody>Refreshing: {this.state.refreshing}</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
				<Cell><CellBody>Item</CellBody></Cell>
			</Cells>
		</Page>
		);
    }
}

export default PageSwiper;