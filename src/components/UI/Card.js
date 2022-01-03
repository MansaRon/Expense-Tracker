import './Card.css';

function Card(props) {
    // Children is a reserved key name 
    // The value of Props will always be the content between the open and close tags of custom tags
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;