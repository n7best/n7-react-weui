import React from 'react';
import style from './style';
import Mask from '../mask';


class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	show: this.props.show,
        	timeout: null
        }
    }

    componentDidMount(){
    	if(this.props.time){
	    	this.setState({timeout: setTimeout(()=>{
				this.setState({ show: false});
				if(this.props.onFinish) this.props.onFinish(this);
	    	},this.props.time)})
    	}
    }
	
    componentWillUnmount(){
    	clearTimeout(this.state.timeout);
    }
	

    renderloading(){
    	if(this.props.loading){
	    	return (
	    		<div className="weui_loading">
		            <div className="weui_loading_leaf weui_loading_leaf_0"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_1"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_2"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_3"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_4"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_5"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_6"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_7"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_8"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_9"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_10"></div>
		            <div className="weui_loading_leaf weui_loading_leaf_11"></div>
		        </div>
	    	);
    	}
    	
    }

    render() {
		let className = 'weui_toast';
		let contentClassName = 'weui_toast_content';
		let loadingClassName = this.props.loading ? 'weui_loading_toast' : null;
		let icon = (this.props.icon) ? this.props.icon : <i className="weui_icon_toast"></i>;
		if(this.props.loading) icon = null;

		if(this.props.className) className+= ` ${this.props.className}`;
		
		let toaststyle = {
			display: this.state.show ? 'block' : 'none'
		};
		
		return (
			<div id={this.props.id} className={loadingClassName} style={toaststyle}>
				<Mask show={this.state.show} transparent/>
				<div 
				{...this.props}
				className={className}
				onClick={this.props.onClick}
				>
				{icon}
				{this.renderloading()}
				<p className={contentClassName}>{this.props.children}</p>
				</div>
			</div>
			);
		
    }
}


Toast.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onFinish: React.PropTypes.func,
	show: React.PropTypes.bool,
	time: React.PropTypes.any,
	loading: React.PropTypes.bool,
	icon: React.PropTypes.any,
};

Toast.defaultProps = {
    className: '',
    fade: false,
    show: false,
    time: false,
    loading: false,
    icon: false,
};


export default Toast;
