import React from 'react';
import style from './style';
import Mask from '../mask';
import classNames from 'classnames';

class Actionsheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	show: this.props.show,
    }
  }

	componentDidMount(){
		this.toogleActionsheet();
	}

	componentDidUpdate(){
		this.toogleActionsheet();
	}

	toogleActionsheet(){
		let node = this.refs.actionsheet;
		if(this.state.show){
			node.className = node.className + ' weui_actionsheet_toggle';
		}else{
			node.className = 'weui_actionsheet';
		}
	}

  renderActions(){
  	let actions = this.props.actions.map((action,idx)=>{
  		let className = classNames('weui_actionsheet_cell',action.className);
  		return (<div href="javascript:;" key={idx} {...action} className={className}>{action.label}</div>);
  	});

  	return (
  		<div className="weui_actionsheet_action">
  			{actions}
  		</div>
  	)
  }

	renderMenus(){
    	let menus = this.props.menus.map((menu,idx)=>{
  			let className = classNames('weui_actionsheet_cell',menu.className);
  			return (<div href="javascript:;" key={idx} {...menu} className={className}>{menu.label}</div>);
    	});

    	return (
  			<div className="weui_actionsheet_menu">
  				{menus}
  			</div>
    	)
    }

  render() {
  	let className = classNames('weui_actionsheet',this.props.className);

  	return (
  		<div>
  			<Mask show={this.state.show} fade onClick={this.props.onMaskClick}/>
  			<div
  			id={this.props.id}
  			className={className}
  			ref="actionsheet">
  				{this.renderMenus()}
  				{this.renderActions()}
  			</div>
  		</div>
  	);
  }
}

Actionsheet.propTypes = {
  className: React.PropTypes.string,
	show: React.PropTypes.bool,
	actions: React.PropTypes.array,
	menus: React.PropTypes.array,
	onMaskClick: React.PropTypes.func
};

Actionsheet.defaultProps = {
	actions:[],
	menus:[],
  className: '',
  show:false,
};

export default Actionsheet;
