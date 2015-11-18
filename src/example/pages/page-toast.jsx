import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../style/components/button'
import Page from '../components/page';
import Toast from '../../style/components/toast'


const toast1 = {
		text: "已完",
		loading: false,
		time:3000
      };
const toast2 = {
		text: "数据加载中",
		loading: true,
		time: 1500
	  };

class PageToast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	toast:null
        };
    }

	showToast(toast){
		let container = document.getElementById('toasts')
		ReactDOM.unmountComponentAtNode(container);
		let toastinstance = ReactDOM.render(<Toast show loading={toast.loading} time={toast.time}>{toast.text}</Toast>,container);
	}

    /*renderToast(){
    	console.log(this.state.toast);
		if(this.state.toast !== null){
			return (<Toast show loading={this.state.toast.loading}>{this.state.toast.text}</Toast>);
		}
    }*/

    render() {
        return (
	        <Page title="Toast" className="toast">
				<div className="bd spacing">
					<Button 
					type="primary" 
					onClick={this.showToast.bind(this,toast1)}>
						点击弹出Toast
					</Button>
					<Button 
					type="primary" 
					onClick={this.showToast.bind(this,toast2)}>
						点击弹出Loading Toast
					</Button>
				</div>
				<div id="toasts" />
			</Page>
		);
    }
}


export default PageToast;