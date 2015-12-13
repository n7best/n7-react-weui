import React from 'react';
import ReactDOM from 'react-dom';
import style from './style';
import classNames from 'classnames';

class Mask extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
  	let className = classNames({
  		'weui_mask': !this.props.transparent && !this.props.fade,
  		'weui_mask_transparent' : this.props.transparent,
  		'weui_mask_transition_fade' : this.props.fade,
  	});

  	let maskstyle = {
  		display: this.props.show ? 'block' : 'none',
  	};

  	return (
  		<div
  			{...this.props}
  			className={className}
  			style={maskstyle}/>
  		);
  }
}

Mask.propTypes = {
	transparent: React.PropTypes.bool,
  fade: React.PropTypes.bool,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
	show: React.PropTypes.bool,
	opacity: React.PropTypes.number
};

Mask.defaultProps = {
	transparent: false,
  className: '',
  fade: false,
  show: false,
  opacity: 0.4
};

export default Mask;