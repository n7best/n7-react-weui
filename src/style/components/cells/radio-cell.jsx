import React from 'react';
import style from './style';
import CellHeader from './cell-header';
import CellBody from './cell-body';
import CellFooter from './cell-footer';
import events from '../utils/events';
import classNames from 'classnames';

class RadioCell extends React.Component {
    constructor(props) {
        super(props);
		this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
    	if (!this.props.checked && this.props.onChange) {
	      this.props.onChange(event, this);
	    }
    }

    handleClick(event){
    	events.pauseEvent(event);
    	if(!this.props.checked && this.props.onChange){
    		this.props.onChange(event,this);
    	}
    }

    handleInputClick(event){
		events.pauseEvent(event);
    }

    render() {
    let className = classNames('weui_cell','weui_check_label',this.props.className);
		let iconClassName = "weui_icon_checked";
		let inputClassName = "weui_check";

		return (
			<label className={className} for={this.props.id} onClick={this.handleClick}>
				<CellBody>{this.props.label}</CellBody>
				<CellFooter>
					 <input
					 {...this.props}
					 type="radio"
					 className={inputClassName}
					 onChange={this.handleChange}
					 onClick={this.handleInputClick}
					 name={this.props.name}
					 id={this.props.id} />
           <span className={iconClassName}></span>
				</CellFooter>
			</label>
			);
    }
}


RadioCell.propTypes = {
	checked: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.any,
    id:React.PropTypes.string,

};

RadioCell.defaultProps = {
	checked: false,
    className: '',
    disabled: false
};

export default RadioCell;