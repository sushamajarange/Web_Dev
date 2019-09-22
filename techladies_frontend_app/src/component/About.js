import React, { Component } from 'react';
import { Container } from 'reactstrap';
import '../App.css';

var divStyle = { marginTop: '20px'};

class About extends Component {
  render(){
  return (
   <div>
        <Container>
            <h4 style={divStyle}>OVERVIEW</h4>
            <p>
                <ul>
                    <li>Masters of Computer Applications with 6 months of Internship experience in Java and Web.</li>
                    <li>Oracle Certified Associate Java SE-7 Programmer.</li>
                    <li>Completed freeCodeCamp’s Responsive Web Design Certificate</li>
                    <li>Javascript Algorithms And Data Structures Certification</li>
                    <li>Good team player</li>
                    <li>Quick learner of new technologies</li>
                    <li>Knows English, Hindi, & Marathi languages.</li>
                </ul>
            </p>
            <h4>TECHNICAL SUMMARY :</h4>
            <table className="table">
               <tr>
                    <th>Cources</th>
                    <th>University</th>
                    <th>Marks</th>
                    <th>Year</th>
               </tr>
               <tr>
                   <td>MCA (Masters of Computer Applications)</td>
                   <td>Savitribai Phule Pune University, Pune</td>
                   <td>62.46</td>
                   <td>2015</td>
               </tr>
               <tr>
                   <td>BCS (Bachelors of Computer Science)</td>
                   <td>Dr. Babasaheb Marathwada University, Aurangabad</td>
                   <td>81.77</td>
                   <td>2013</td>
               </tr>
               <tr>
                   <td>HSC (Higher Secondary School)</td>
                   <td>Maharashtra State board of Higher Secondary Education, Pune</td>
                   <td>53.83</td>
                   <td>2010</td>
                </tr>
                <tr>
                    <td>SSC (Secondary School Certificate)</td>
                    <td>Maharashtra State board Secondary Education, Pune</td>
                    <td>74.15</td>
                    <td>2007</td>
                </tr>
                
           </table>
       </Container>
   </div>
  );
}}

export default About;
