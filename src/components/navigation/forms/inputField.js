import React from 'react';

const InputField = (props) => {
    return (
        <label>
            <div className="field">
                <h4 className="textSecondary">{props.value}</h4>
                <input type={props.type}/>
            </div>
        </label>
    );
};

export default InputField;