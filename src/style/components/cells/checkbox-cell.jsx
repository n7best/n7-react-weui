import React from 'react';
import style from './style';
import CellHeader from './cell-header';
import CellBody from './cell-body';
import CellFooter from './cell-footer';
import events from '../utils/events';

class CheckboxCell extends React.Component {
	
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
		if(!this.props.disabled && this.onClick){
			this.onClick(event,this);
		}
	}

	handleInputClick(e){
		events.pauseEvent(event);
	}

	handleChange(e){
		this.setState({checked: !this.state.checked},()=>{
			if (this.props.onChange) this.props.onChange(e,this);
		})
		
	}

	render() {
		let className="weui_cell weui_check_label";
		let inputClassName="weui_check";
		let iconClassName="weui_icon_checked";
		if(this.props.className) className += ` ${this.props.className}`;

		return (
			<label className={className} htmlFor={this.props.id} onClick={this.handleClick}>
				<CellHeader>
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
				</CellHeader>
				<CellBody>
					<p style={this.props.style}>{this.props.label}</p>
				</CellBody>
			</label>
		);
	}
}


CheckboxCell.propTypes = {
	className: React.PropTypes.string,
	checked: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	name:React.PropTypes.string,
	onChange:React.PropTypes.func,
	onClick:React.PropTypes.func,
	label:React.PropTypes.string

};

CheckboxCell.defaultProps = {
	className: '',
	checked: false,
	disabled: false
};

export default CheckboxCell;