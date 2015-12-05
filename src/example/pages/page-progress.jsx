import React from 'react';
import Progress from '../../style/components/progress';
import Page from '../../style/components/page';

class PageProgress extends React.Component {
    constructor(props) {
        super(props);
    	this.state = {
    		prg1: null,
    		prg1percent :0
    	};
    	this.toggleloading = this.toggleloading.bind(this);
    }

    toggleloading(){
		if(this.state.prg1 !== null){
			clearInterval(this.state.prg1);
			this.setState({prg1:null});
		}else{
			this.setState({prg1:setInterval(()=>{
				if(this.state.prg1percent > 99) this.setState({prg1percent:0})
				this.setState({prg1percent: this.state.prg1percent + 1});
			},50)})
		}
    }

    componentDidMount(){
		this.setState({prg1:setInterval(()=>{
			if(this.state.prg1percent > 99) this.setState({prg1percent:0})
			this.setState({prg1percent: this.state.prg1percent + 1});
		},50)})
    }

    componentWillUnmount(){
    	clearInterval(this.state.prg1);
    }

    render() {
        return (
	        <Page title="Progress" className="progress">
	        	<div className="bd spacing">
					<Progress><i className="weui_icon_cancel"></i></Progress>
					<br/>
					<Progress percent={50}><i className="weui_icon_cancel"></i></Progress>
					<br/>
					<Progress percent={80}><i className="weui_icon_cancel"></i></Progress>
					<br/>
					<Progress percent={100}><i className="weui_icon_success"></i></Progress>
					<br/>
					<Progress percent={this.state.prg1percent}><i className="weui_icon_cancel" onClick={this.toggleloading}></i></Progress>
				</div>
			</Page>
		);
    }
}


export default PageProgress;