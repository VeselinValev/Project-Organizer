import React from 'react';
import {NavLink} from "react-router-dom";
import "./menuButton.css";

const MenuButton = (props) => {
    return (
        <div>
            <NavLink to={props.path} onClick={props.onClick} className={props.classMain}
                     activeClassName={"active active" + props.number}>
                <div className="inside">
                    <div className={"stripe + stripe" + props.number}/>
                    <h3 className="text">{props.btnName}</h3>
                </div>
            </NavLink>
        </div>
    );
};

export default MenuButton;