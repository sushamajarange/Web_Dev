import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

var divStyle = { margin: '90px'};

class ContactUs extends Component{
    
    render(){
        return(
            <Container>
                <center style={divStyle}>
                    <p>
                        Email me on : <b>sushamajarange@gmail.com</b>                    
                    </p>
                    <p>
                        Alternative email-id : <b>sushamapatekar9@gmail.com</b>
                    </p>
                    <p>
                        <p><b><i> CONNECT ME VIA SOCIAL MEDIA</i></b></p>
                        <SocialIcon url="https://www.facebook.com/sushamajarange111" /> &nbsp; &nbsp; &nbsp;
                        <SocialIcon url="https://www.instagram.com/sush.patekar/" bgColor="#E4405F" /> &nbsp; &nbsp; &nbsp;
                        <SocialIcon url="http://linkedin.com/in/sushama-patekar-71a75b85" />&nbsp; &nbsp; &nbsp;
                        <SocialIcon url="https://github.com/sushamajarange" />
                    </p>
               
                </center>
            </ Container>
        );
    }
}

export default ContactUs;

