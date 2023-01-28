import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFacebook,FaGooglePlus,FaLinkedin,FaTwitter } from "react-icons/fa";
import logo from './logo.svg';
import imgCenter from './img1.jpg';
import gallry2 from './img2.jpg';
import gallry3 from './img3.jpg';
import gallry4 from './img4.jpg';
import gallry5 from './img5.jpg';
import gallry6 from './img6.jpg';
import gallry7 from './img7.jpg';
import HomeCss from './Home.css';
import gallry8 from './img8.jpg';
import gally9 from './img9.jpeg';
import gallyr10 from './img10.png';
import gallyr11 from './facebook.png';
import gallyr12 from './twitter.png';
import gallyr13 from './youtube.png';
import gallry14 from './linkedin.png';
import gallry15 from './Google+.png';
import gallry16 from './instagram.png';
function Home() {
    return (
        <>
        <Navbar bg="blue">
            <Container>  
                      <div className='container'>
        <img src={gallyr11} width="30" 
               height="20" alt="gallyr11" />
               
      <img src={gallyr12} width="30" 
       height="20" alt="gallyr12" />

       <img src={gallyr13} width="30" 
       height="20" alt="gallyr13" />

       <img src={gallry14} width="30" 
       height="20" alt="gallry14" />

       <img src={gallry15} width="30" 
       height="20" alt="gallyr15" />

       <img src={gallry16} width="30"
       height="20" alt="gallry16"/>
       <div>
             <h6>Online 24*7</h6>
             <h6>+9101204004200</h6>  
         
        
         </div> 
       </div>
       </Container>
       </Navbar>

         <Navbar bg="success" variant="dark"> 
          <Container>            
            <Nav className="me-auto">              
              <Nav.Item icon={<FaFacebook />}></Nav.Item>              
            </Nav>             
          </Container>
        </Navbar> 

        <Navbar bg="light">
          <Container>        
        <Navbar.Brand href="#home">                
          <img src={logo}  width="50"
              height="50"  alt="logo" />  
                Avril
        </Navbar.Brand>
        <Nav>
              <Nav.Link href="/Home" >Home </Nav.Link>              
              <Nav.Link href="/service"> | service </Nav.Link>
              <Nav.Link href="/Portfolio"> | Portfolio </Nav.Link>              
              <Nav.Link href="/Pages"> | Pages </Nav.Link>
              <Nav.Link href="/blog"> | blog </Nav.Link>
              <Nav.Link href="/contact"> |contact us </Nav.Link>          
        </Nav>
        <div container="container" >
             <img src={gallyr10} width="30" 
               height="20" alt="gallyr10" /> 
            </div>                       

            <Button variant="dark" bg="danger"> ByNow </Button>
          </Container>
        </Navbar>
        <div>
            <div container="container" >
             <img src={imgCenter}  alt="ImgCenter" /> 
            </div>                       
        </div>
        <div className='OutContainer'>
         <ul className='container'>
            <img src={gally9} width="50"
            height="20" alt="gally9"/>

                 <a className='inputContainer'>  Pages</a>
           
                 <a className='inputContainer'>  Bread</a>
            
                 <a className='inputContainer'>  Crumbs</a>
         </ul>  
         <div className='searchTxt'>
          <input type="text" placeholder='Search...'/>
             </div>  
         </div>
         <div>
             <h6>Techology from tomorrow</h6>
             <h1>Outstanding</h1>
             <h1 className='name'>Portfolio</h1>
         </div>
         <div className='psg'>
             <p>There are many variations of passages of Lorem ipsum available but the majaority have suffered alteration in<br/>
                 <p className='psg2'>some form by injected humour which sightly believable</p> 
             </p>
         </div>
         <div className='brands'>
        <ul >
                <a className='inputContainers'>All</a>
           
                 <a className='inputContainers'>Web</a>
            
                <a className='inputContainers'>Advertising</a>

                 <a className='inputContainers'>Branding</a>

                <a className='inputContainers'>Photography</a>
        </ul> 
         </div >
         <div className='img'>
         <img src={gallry2} height="250px" width="30%"/>
         <img src={gallry3} height="250px" width="30%"/> 
         <img src={gallry4} height="250px" width="30%"/> 
         <img src={gallry5} height="250px" width="30%"/> 
         <img src={gallry6} height="250px" width="30%"/> 
         <img src={gallry7} height="250px" width="30%"/>  
        </div>
        <br/>        
       

       <div className='container' >
       <img src={gallry8}  alt="gallry8" />
        
        </div>        
           
        </>
    );
}
export default Home