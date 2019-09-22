import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
var divStyle = { margin: '50px'};

class Home extends Component{
    render(){
        return(
            <Container>
                <center style={divStyle}>
                <div>
                    <img src="./images/saanvi.jpg" />
                    <p>
                        Hey,<br /> It's me <i><b>Sushama</b></i>, <br />
                        I'm the simple, straightforward and honest girl who wants to fullfill her dreams.<br />
                        I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best.<br />
                        I always try to be happy and make happy to everyone.<br />
                        I am a very positive and practical person.
                    </p>
                </div>
                </center>
            </ Container>
        );
    }
}

export default Home;

