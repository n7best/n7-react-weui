import React from 'react';
import style from './style';
import CellHeader from './cell-header';
import CellBody from './cell-body';
import CellFooter from './cell-footer';
import events from '../utils/events';

class SwitchCell extends React.Component {
	
	constructor(props){
		super(props);
		this.handleInputClick = this.handleInputClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			checked: this.props.checked
		}
	}

	handleClick(e){
		events.pauseEvent(event);
		if(!this.props.disabled){
			this.handleChange(event);
		}
	}

	handleInputClick(e){
		events.pauseEvent(event);
	}

	handleChange(e){
		this.setState({checked: !this.state.checked},()=>{
			if (this.props.onChange) this.props.onChange(event,this);
		})
	}

	render() {
		let className="weui_cell weui_cell_switch";
		let inputClassName="weui_switch";
		let iconClassName="weui_icon_checked";
		if(this.props.className) className += ` ${this.props.className}`;

		return (
			<label className={className} htmlFor={this.props.id} onClick={this.handleClick}>
				<CellBody>
					{this.props.label}
				</CellBody>
				<CellFooter>
					<input 
					{...this.props}
					type="checkbox" 
					className={inputClassName}
					name={this.props.name}
					id={this.props.id}
					onChange={this.handleChange}
					onClick={this.handleInputClick}
					checked={this.state.checked}
					/>
					<i className={iconClassName}></i>
				</CellFooter>
			</label>
		);
	}
}


SwitchCell.propTypes = {
	className: React.PropTypes.string,
	checked: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	name:React.PropTypes.string,
	onChange:React.PropTypes.func,
	onClick:React.PropTypes.func,
	label:React.PropTypes.string

};

SwitchCell.defaultProps = {
	className: '',
	checked: false,
	disabled: false
};

export default SwitchCell;