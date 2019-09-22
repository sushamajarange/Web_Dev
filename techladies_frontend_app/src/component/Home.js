import React, {Component} from 'react';
import { Container } from 'react-bootstrap';

var divStyle = { margin: '50px'};
  
class Home extends Component{
    render(){
        return(
            <Container>
                <center style={divStyle}>
                <div>
                    <img src="https://scontent.fsin9-1.fna.fbcdn.net/v/t1.0-9/10294375_701744813290223_5107241995383041177_n.jpg?_nc_cat=102&_nc_oc=AQnaA5jAhvuegyR2GY_NoXub_bvt9sdfNIZRCGLSp1BShh1uRguuJjPF-JILiHbSiFc&_nc_ht=scontent.fsin9-1.fna&oh=45842db0b2010186174082f8c9e2cd0f&oe=5DF956DE" />
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

