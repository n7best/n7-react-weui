import React from 'react';
import style from './style';
import CellHeader from './cell-header';
import CellBody from './cell-body';
import CellFooter from './cell-footer';
import events from '../utils/events';

class InputCell extends React.Component {
    constructor(props) {
        super(props);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: this.props.value
		};
    }

    handleChange(event){
    	this.setState({value: event.target.value},()=>{
    		if(this.props.onChange) this.props.onChange(event,this);
    	});
    }

    renderHeader(){
    	if(!this.props.header){
    		let labelClassName = "weui_label";
    		if(this.props.label){
				return (
					<CellHeader>
						<label className={labelClassName}>{this.props.label}</label>
					</CellHeader>
					);
			}
    	}else{
    		return (
			<CellHeader>
				{this.props.header}
			</CellHeader>
			);
    	}
    }

    
	renderVCode(){
		if(this.props.vcode) return <img src={this.props.vcode} />;
	}

	renderErrorIcon(){
		let iconClassName="weui_icon_warn";
		if(this.props.error) return <i className={iconClassName} />
	}
    renderFooter(){

		return (
			<CellFooter>
				{this.renderErrorIcon()}
				{this.renderVCode()}
			</CellFooter>
			);
    	
    }


    render() {

		let className = "weui_cell";
		let inputClassName = "weui_input";
		
		if(this.props.className) className+= ` ${this.props.className}`;
		if(this.props.vcode) className+= ' weui_vcode';
		if(this.props.error) className+= ' weui_cell_warn';
		if(this.props.select || this.props.selectBefore || this.props.selectAfter) className+= ' weui_cell_select';
		if(this.props.selectBefore) className+= '  weui_select_before';
		if(this.props.selectBefore) className+= ' weui_select_before';
		return (
			<label className={className} htmlFor={this.props.id} onClick={this.handleClick}>
				{this.renderHeader()}
				<CellBody>
					 <input 
					 {...this.props}
					 role="input" 
					 className={inputClassName} 
					 onChange={this.handleChange}
					 name={this.props.name} 
					 id={this.props.id} 
					 value={this.state.value}
					 placeholder={this.props.placeholder} />
				</CellBody>
				{this.renderFooter()}
			</label>
			);
		
    }
}


InputCell.propTypes = {
	error: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.any,
    id:React.PropTypes.string,
    onKeyPress: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    required: React.PropTypes.bool,
	label: React.PropTypes.string,
	header: React.PropTypes.any,
	placeholder:React.PropTypes.string,
	vcode: React.PropTypes.string,
	select: React.PropTypes.bool,
	selectBefore: React.PropTypes.bool,
	selectAfter: React.PropTypes.bool,
};

InputCell.defaultProps = {
	error: false,
    className: '',
    disabled: false,
    select: false,
    selectBefore: false,
    selectAfter: false,
};

export default InputCell;