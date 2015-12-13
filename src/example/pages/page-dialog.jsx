import React from 'react';
import Button from '../../style/components/button';
import Page from '../../style/components/page';
import Dialog from '../../style/components/dialog';


class PageDialog extends React.Component {
    constructor(props) {
        super(props);
    }

  	toogleDialog1(){
  		let dialog1 = this.refs.dialog1;
  		dialog1.setState({show: !dialog1.state.show});
  	}

  	toogleDialog2(){
  		let dialog2 = this.refs.dialog2;
  		dialog2.setState({show: !dialog2.state.show});
  	}

    render() {
      let dialog1action = [
  			{label:"取消", onClick: this.toogleDialog1.bind(this)},
  			{label:"确定", onClick: this.toogleDialog1.bind(this), primary:true}
      	];

  		let dialog2action = [
  			{label:"确定", onClick: this.toogleDialog2.bind(this), primary:true}
      	];

      return (
    	  <Page title="Dialog" className="dialog">
  				<div className="bd spacing">
  					<Button
  					type="primary"
  					onClick={this.toogleDialog1.bind(this)}>
  						点击弹出Dialog样式一
  					</Button>
  					<Button
  					type="primary"
  					onClick={this.toogleDialog2.bind(this)}>
  						点击弹出Dialog样式二
  					</Button>
  				</div>
  				<Dialog title="弹窗标题" ref="dialog1" type="confirm" actions={dialog1action}>自定义弹窗内容<br/>...</Dialog>
  				<Dialog title="弹窗标题" ref="dialog2" actions={dialog2action}>弹窗内容，告知当前页面信息等</Dialog>
    		</Page>
  		);
    }
}

export default PageDialog;