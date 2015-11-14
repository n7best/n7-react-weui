import React from 'react';
import style from './style';
import CellsTitle from './cells-title';
import RadioCell from './radio-cell';

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
		let className = "weui_cells weui_cells_radio";
		if(this.props.className) className += ` ${this.props.className}`;
		if(this.props.split) className += ' weui_cell_split';
		if(this.props.access) className += ' weui_cells_access';

		let cellsTitle;
		if(this.props.title !== null) {
			cellsTitle = <CellsTitle>{this.props.title}</CellsTitle>;
		} else {
			cellsTitle = null;
		}
		
		return (
			<div>
				{cellsTitle}
				<div className={className}>
				{this.renderRadioCells()}
				</div>
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
	split: React.PropTypes.bool,
	access: React.PropTypes.bool,
	
};

RadioCells.defaultProps = {
	className: '',
	disabled: false
};

export default RadioCells;