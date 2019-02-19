import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./form.css";
import InputField from "./inputField";

class LoginForm extends Component {
    render() {
        return (
            <div className="loginForm">
                <form>
                    <div className="fieldWrapperLogin">
                        <InputField type="text" value="username"/>
                        <InputField value="password" type="password"/>
                    </div>
                    <input type="submit" value="Log in"/>
                    <Link to='/recovery'>
                        <h4 className="forgottenPass">Forgotten password</h4>
                    </Link>
                </form>
            </div>
        );
    }
}

export default LoginForm;