import React from 'react';
import style from './style';
import classNames from 'classnames';
import Button from '../button';

const Message = (props) => {
  let actions = props.actions.map((action,idx)=>{
		return (<Button href="javascript:;" key={idx} {...action}>{action.label}</Button>);
  	});

	let className = classNames('weui_msg',props.className);
	return (
		<div className={className}>
			<div className="weui_icon_area">{props.icon}</div>
			<div className="weui_text_area">
        <h2 className="weui_msg_title">{props.title}</h2>
        <p className="weui_msg_desc">{props.children}</p>
      </div>
      <div className="weui_opr_area">
        <p className="weui_btn_area">
          {actions}
        </p>
      </div>
      <div className="weui_extra_area">
     		{props.extra}
      </div>
		</div>
	);
}

Message.propTypes = {
	className: React.PropTypes.string,
	icon: React.PropTypes.any,
	title: React.PropTypes.string,
	actions: React.PropTypes.array,
	extra: React.PropTypes.any
};

Message.defaultProps = {
	className: '',
	actions:[]
};

export default Message;