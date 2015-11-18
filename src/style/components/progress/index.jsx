import React from 'react';
import style from './style';

const Progress = (props) => {
	let className = 'weui_progress';
	if(props.className) className += ` ${props.className}`;
	let prgstyle = {
		width: props.percent + '%'
	}

	return (
		<div className={className}>
            <div className="weui_progress_bar">
                <div className="weui_progress_inner_bar" style={prgstyle}></div>
            </div>
            <a href="javascript:;" className="weui_progress_opr">
                {props.children}
            </a>
        </div>
		);
}

Progress.propTypes = {
	className: React.PropTypes.string,
	percent: React.PropTypes.number,
};

Progress.defaultProps = {
	className: '',
	percent:0
};

export default Progress;