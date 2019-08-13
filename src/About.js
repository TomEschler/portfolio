import React from 'react'
import Navbar from './Navbar'
import './css/about.css'

const About = () => {
    return(
        <>
            <div className='parallax-image'></div>
            <div className='about-nav'>
                <Navbar />
            </div>
            <div className='about-page'>
            
                <div className='class'>
                    <h3>
                        <b style={{color:'DeepSkyBlue'}}>class </b> 
                        <b style={{color:'SpringGreen'}}>Act </b>
                    </h3>
                </div>
                <div className='constructive'>
                    <b style={{color:'SkyBlue'}}>constructive </b>
                    <b style={{color:'Violet'}}>&#40;&#41; &#123; </b>  
                    
                </div>
                <div className='super'>
                    <b style={{color:'DeepSkyBlue'}}>super&#40;&#41; </b>
                    
                </div>
                
                <div className='photo'></div>
                <div className='this-programmer'>
                    <br></br>
                    <b style={{color:'DeepSkyBlue'}}>this</b>
                    <b style={{color:'orange'}}>.programmer = </b>
                    <b style={{color:'SpringGreen'}}>&#34;amazing&#34;</b>
                    <b style={{color:'violet'}}> &#125;</b>
                </div>
                
                <div className='about-me'>
                    <br></br>
                    <p>
                    <b style={{color:'DeepSkyBlue'}}>Hello</b>
                        <br></br>
                        My name is Thomas!<br></br>
                        I am a Web Developer and currently working as a Teaching Assistant with one of the top rated programming schools in Utah called <b style={{color:'red'}}>Vschool</b>
                        
                    </p>
                    <p>
                        Besides coding I enjoy NBA debates, writing, moviegoing and consuming RedBull.
                    </p>
                    <br></br>
                    <p>
                        <b style={{color:'DeepSkyBlue'}}>Skills</b>
                        <br></br>
                        Like the R2 unit, I speak many programming languages… and no, I don’t have a bad motivator.
                    </p>
                    <br></br>
                    <p>
                    <b style={{color:'DeepSkyBlue'}}>Let's Talk!</b>
                    <br></br>
                    <p>tomeschlercoding@gmail.com</p>
                    </p>
                    <br></br>
                    <p>
                    <b style={{color:'whiteSmoke'}}>HTML | CSS | JavaScript | MongoDB | Node.js
                        <br></br>
                        React.js | Axios | Express | Git | Bcrypt</b>
                    </p>
                </div>
                
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default About