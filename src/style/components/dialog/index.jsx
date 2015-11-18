import React from 'react';
import style from './style';
import Mask from '../mask';
import classNames from 'classnames';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	show: this.props.show,
        }
    }

    renderActions(){
    	return this.props.actions.map((action,idx)=>{
			let className = classNames('weui_btn_dialog',{
				default: !action.primary,
				primary: action.primary
			});
			if(action.className) className+= ` ${action.className}`;
			return (<a href="javascript:;" key={idx} {...action} className={className}>{action.label}</a>);
    	});
    }
	
    render() {
		let className = classNames({
			weui_dialog_alert: this.props.type == 'alert',
			weui_dialog_confirm: this.props.type == 'confirm'
		});

		let contentClassName = 'weui_dialog';
		if(this.props.className) contentClassName+= ` ${this.props.className}`;
		
		let dialogstyle = {
			display: this.state.show ? 'block' : 'none'
		};
		
		return (
			<div id={this.props.id} className={className} style={dialogstyle}>
				<Mask show={this.state.show} onClick={this.props.onMaskClick}/>
				<div 
				{...this.props}
				className={contentClassName}
				>
					<div className="weui_dialog_hd">
					{this.props.title ? <strong className="weui_dialog_title">{this.props.title}</strong> : null}
					{this.props.header}
					</div>
					<div className="weui_dialog_bd">{this.props.children}</div>
					<div className="weui_dialog_ft">
						{this.renderActions()}
					</div>
				</div>
			</div>
			);
		
    }
}


Dialog.propTypes = {
    className: React.PropTypes.string,
	show: React.PropTypes.bool,
	type: React.PropTypes.string,
	header: React.PropTypes.any,
	title: React.PropTypes.string,
	actions: React.PropTypes.array,
	onMaskClick: React.PropTypes.func
};

Dialog.defaultProps = {
	actions:[],
    className: '',
    show:false,
    type:'alert',
};


export default Dialog;
