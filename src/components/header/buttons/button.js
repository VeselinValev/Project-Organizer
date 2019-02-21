import React from 'react';
import "./button.css";


const Button = (props) => {
    return (
        <span className={"btn btn" + props.number} onClick={props.hideMenu}>
            <h3 className="textButton"><i className="fa fa-arrow-up"/> Hide menu</h3>
        </span>
    );
};

export default Button;