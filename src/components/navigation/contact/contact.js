import React from 'react';
import FontAwesome from 'react-fontawesome';
import "./contact.css";

const Contact = () => {
    return (
        <div className="outerWrapper">
            <div className="addressWrapper">
                <div className="addressMap">
                    <h2>CONTACT INFO</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4183.837192918113!2d24.71418293578443!3d42.14130586991485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1d3890eef5f%3A0x2145bb98095ddc30!2sbul.+%22SVOBODA%22+65%2C+4002+Western+Industrial+Zone%2C+Plovdiv!5e0!3m2!1sen!2sbg!4v1548105811073"
                        width="400" height="200" frameBorder="0" allowFullScreen></iframe>
                    <h2><FontAwesome name='phone'/> +35932666666</h2>
                    <h2><FontAwesome name='skype'/> TheProjectHouse</h2>
                    <h2><FontAwesome name='envelope'/> tph.contact@gmail.com</h2>
                    <h2><FontAwesome name='facebook'/> The project house Ltd.</h2>
                </div>
            </div>
        </div>
    );
}

export default Contact;