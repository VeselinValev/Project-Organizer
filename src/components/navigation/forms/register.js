import React, {Component} from 'react';
import "./form.css";
import InputField from "./inputField";

class RegisterForm extends Component {
    render() {
        return (
            <div className="registerForm">
                <form>
                    <div className="fieldWrapper">
                        <InputField value="Your name" type="text"/>
                        <InputField value="username" type="text"/>
                        <InputField value="email" type="email"/>
                        <InputField value="password" type="password"/>
                        <InputField value="confirm password" type="password"/>
                    </div>
                        <input type="submit" value="Register"/>
                </form>
            </div>
        );
    }
}

export default RegisterForm;