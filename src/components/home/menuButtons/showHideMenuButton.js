import React from 'react';
import "./menuButton.css";

const ShowHideMenuButton = (props) => {

    // let bars = props.hasBars ? <h3><i className="fa fa-bars"></i></h3> : null;

    return (
        <div className={"showHideMenu showHideMenu" + props.number}>
            {/*{bars}*/}
        </div>
    );
};

export default ShowHideMenuButton;