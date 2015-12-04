import React from 'react';
import style from './style';
import classNames from 'classnames';
import SwiperJS from './swiper';


class Swiper extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    	this.swiper = new SwiperJS({
    	  container: '#'+this.props.id,
		  direction:'horizontal'
		});
    }

    render() {
    	let className = classNames('swipercontainer',this.props.className);
    	let style={
    		height: this.props.height
    	};

		return (
			<div className="swiperwrapper" id={this.props.id}>
				<div className={className} style={style}>
					<div className="swiper">
					{this.props.children}
					</div>
				</div>
				<div className="swipernav">
				</div>
			</div>
			);
    }
}


Swiper.propTypes = {
    className: React.PropTypes.string,
    id:React.PropTypes.string.isRequired,
    height:React.PropTypes.number
	
};

Swiper.defaultProps = {
    className: '',
    height: 200
};


export default Swiper;
