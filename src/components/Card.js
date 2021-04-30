import React from 'react';
import classes from './Card.css';

const Card = (props) => {
	const default_classes = 'card ' + props.className;

	return <div className={default_classes}>{props.children}</div>;
}

export default Card;
