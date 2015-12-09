import React from 'react';
import style from './style';
import CellsTitle from './cells-title';
import CellsTips from './cells-tips';
import RadioCell from './radio-cell';
import classNames from 'classnames';

class RadioCells extends React.Component {
    constructor(props) {
      super(props);
			this.state = {
				value: this.props.value
			};

    }

    handleChange(value, event){
    	 this.setState({ value }, () => {
		    if (this.props.onChange) this.props.onChange(event, this);
		 });
    }

    renderRadioCells(){
    	return React.Children.map(this.props.children, (radio, idx) => {
	      return (
	        <RadioCell
	          {...radio.props}
	          checked={radio.props.value === this.state.value}
	          disabled={this.props.disabled || radio.props.disabled}
	          key={idx}
	          label={radio.props.label}
	          onChange={this.handleChange.bind(this, radio.props.value)}
	          value={radio.props.value}
	        />
	      );
	    });
    }

    render() {
		let className = classNames('weui_cells','weui_cells_radio',{
			weui_cells_access : this.props.access
		}, this.props.className);

		let cellsTitle,cellsTips;
		if(this.props.title)cellsTitle = <CellsTitle>{this.props.title}</CellsTitle>;
		if(this.props.tips)cellsTips = <CellsTips>{this.props.tips}</CellsTips>;

		return (
			<div>
				{cellsTitle}
				<div
				{...this.props}
				className={className}>
				{this.renderRadioCells()}
				</div>
				{cellsTips}
			</div>
			);

    }
}


RadioCells.propTypes = {
	className: React.PropTypes.string,
	name: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	value: React.PropTypes.any,
	onChange: React.PropTypes.func,
	title: React.PropTypes.string,
	access: React.PropTypes.bool,
};

RadioCells.defaultProps = {
	className: '',
	disabled: false
};

export default RadioCells;