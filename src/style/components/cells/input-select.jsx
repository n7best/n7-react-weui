import React from 'react';
import events from '../utils/events';
import style from './style';


class Select extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: this.props.value
		}
	}

	renderItems(){
		return this.props.data.map((item,i)=>{
			return <option 
			value={item.value} 
			key={i}
			>
			{item.label}
			</option>
		});
	}

	handleChange(e){
		this.setState({value:e.target.value},()=>{
			if (this.props.onChange) this.props.onChange(event,this);
		});
	}
	
	render() {

		let className = "weui_select";
		if(this.props.className) className += ` ${this.props.className}`;
		return (
			<select 
			{...this.props}
			className={className}
			name={this.props.name}
			id={this.props.id}
			onChange={this.handleChange}
			value={this.state.value}>
			{this.renderItems()}
			</select>
		);
	}
}

Select.propTypes = {
	data: React.PropTypes.any,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.any,
    id:React.PropTypes.string,

};

Select.defaultProps = {
	checked: false,
    className: '',
    disabled: false,
    data: []
};

export default Select;