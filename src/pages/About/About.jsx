// import React from 'react';
import './About.css';
import { Container, } from "react-bootstrap";
import img from '../../assets/self.jpg'
import img1 from '../../assets/html.png'
import img2 from '../../assets/css.png'
import img3 from '../../assets/t-css.png'
import img4 from '../../assets/bootstrap.png'
import img5 from '../../assets/javascript.png'
import img6 from '../../assets/api.png'
import img7 from '../../assets/ract logo.png'
import img8 from '../../assets/exp-js.png'
import img9 from '../../assets/firebase.png'


import { Link } from "react-router-dom";
import Marquee from 'react-fast-marquee';
const About = () => {
    return (
        <Container>
            <div className="experties">
                <h2>Experties:</h2>
                <Marquee className='m-size speed-500'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                   
                </Marquee>
            </div>
            <div className="header-bio">
                <div className="left-bio">
                    <h2>MD. ABU BAKKAR SIDDIK </h2>
                    <p>House no 9, Porimon villa, Satter molla road,</p>
                    <p>Harunabad, Mirpur 12, Dhaka.</p>
                    <p><Link className="text-decoration-none text-black" to='mailto:mdshoyan@gmail.com'>Email: mdshoyan30@gmail.com</Link></p>
                    <p><Link className="text-decoration-none text-black" to='tel:01887326776'>Phone: 01887326776</Link></p>
                </div>

                <div className="right-bio-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <hr />
            <div className="Career-Objective">
                <h2 className='text-bg-secondary'>Career Objective:</h2>
                <p>To leverage my skills in HTML, CSS, and JavaScript as a front-end developer to create responsive,
                    user-friendly, and visually appealing web applications that enhance user experience and meet business
                    objectives. </p>
            </div>

            <div className="career-summary">
                <h2 className='text-bg-secondary'>Career Summary:</h2>
                <p>As a front-end developer, to utilize my skills and expertise to create engaging and intuitive
                    user interfaces that deliver exceptional user experiences. My passion lies in leveraging my creativity and
                    technical knowledge to build visually appealing, responsive, and accessible web applications. With a strong
                    foundation in HTML, CSS, and JavaScript, I aim to contribute to the development of responsive, cross platform applications that can be easily accessed </p>
            </div>

            <div className="Special-Qualification">
                <h2 className='text-bg-secondary'>Special Qualification:</h2>
                <ol>
                    <li>Proficiency in HTML, CSS, and JavaScript</li>
                    <li>Familiarity with popular front-end frameworks and libraries such as React, Angular, and
                        Vue.js</li>
                    <li>Ability to collaborate with designers and back-end development</li>
                </ol>

            </div>

            <div className="Employment-History">
                <h2 className='text-bg-secondary'>Employment History:</h2>
                <h4>Assistant Executive (IT)</h4>
                <p>(July, 2023 - Continuing)</p>

                <div className='right-Employment-History'>
                    <h4>City Group</h4>
                    <p>City House, Road # 51, Gulshan-2, Dhaka- 1212, Bangladesh</p>
                    <h4>Area of Expertise</h4>
                    <p>IT & Software Marketing</p>
                    <h4>Duties/Responsibilities</h4>
                    <p>Currently, I work on an Automation Project also I often provide technical
                        support to end-users within the organization. This includes troubleshooting
                        hardware and software issues, setting up and configuring new devices, and
                        assisting with software installations.</p>
                </div>
            </div>

            <div className="Academic-Qualification">
                <h2 className='text-bg-secondary'>Academic-Qualification:</h2>

                <table className='table table-bordered border-primary' >
                    <tr>
                        <th>Exam Title </th>
                        <th>Concentration/Major</th>
                        <th>Institute</th>
                        <th>Result</th>
                        <th>Pas.Year</th>
                        <th>Duration</th>
                    </tr>
                    <tr>
                        <td>Bachelor of Science (BSc)</td>
                        <td>Computer Science & Engineering</td>
                        <td>Bangladesh Army University of Science And Technology</td>
                        <td>CGPA:3.17 out of 4 </td>
                        <td>2023</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>HSC </td>
                        <td>Science</td>
                        <td>Karatoa Multimedia School And College</td>
                        <td>CGPA:4.58out of 5 </td>
                        <td>2018</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>SSC </td>
                        <td>Science</td>
                        <td>Bhatra Khan Chowdhury High School </td>
                        <td>CGPA:3.89 out of 5  </td>
                        <td>2016</td>
                        <td>2</td>
                    </tr>
                </table>


            </div>

            <div>
                <h2 className='text-bg-secondary'>Projects & Live Link</h2>
                <ol>
                    <li><Link className='text-decoration-none text-black ' to='https://celadon-crisp-26acd5.netlify.app/'>Live Link-1</Link></li>
                    <li><Link className='text-decoration-none text-black ' to='https://famous-clafoutis-18796a.netlify.app/'>Live Link-2</Link></li>
                    <li><Link className='text-decoration-none text-black ' to='https://nervous-kilby-b02b50.netlify.app/'>Live Link-3</Link></li>
                    <li><Link className='text-decoration-none text-black ' to='https://fascinating-bienenstitch-c316d1.netlify.app/'>Live Link-4</Link></li>
                    <li><Link className='text-decoration-none text-black ' to='https://shiny-haupia-7e4785.netlify.app/'>Live Link-5</Link></li>
                </ol>

            </div>

            
        </Container>
    );
};

export default About;