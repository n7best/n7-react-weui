import React from 'react';
import style from './style';
import classNames from 'classnames';

const Article = (props) => {
	let className = classNames('weui_article',props.className)

	return (
		<div className={className}>
      {props.children}
    </div>
	);
}

Article.propTypes = {
	className: React.PropTypes.string,
};

Article.defaultProps = {
	className: ''
};

export default Article;