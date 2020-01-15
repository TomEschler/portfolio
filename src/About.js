import React from 'react'
import './css/about.css'

const About = () => {
    return(
        <>
            <div className='parallax-image'></div>
            <div className='about-page'>
            <div id='c3po'></div>
                <div id='lingo'>Fluent <br></br> in over 6million <br></br>programming languages</div>
                <div className='about-me'>
                    <h2>Hello!</h2>
                    <p>
                        blah blah
                    </p>
                </div>
                <div className='photo'></div>
                <div className='contact-me'>
                    <p>
                        <b style={{color:'DeepSkyBlue'}}>Let's Talk!</b>
                    <br></br>
                    <p>
                        <a href="mailto:tomeschlercoding@gmail.com?Subject=Hello%20" target="_top" target="_blank" style={{color: 'lavender'}}><i class="fas fa-envelope" style={{color: 'lavender', margin:'20px' }}></i></a>
                    </p>
                    
                        <a href="tel:4356328393"> <i class="fas fa-phone-alt" style={{color: 'lavender', margin:'20px'}}></i> </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About

// I am a Web Developer and currently working at <a href="https://vschool.io/?param1=value1&param2=value2&gclid=EAIaIQobChMIu-7ez7bD5AIVD9vACh2LPQJkEAAYASAAEgK9JfD_BwE" target="_blank" style={{color:'#f5b992'}}><b>Vschool</b> </a>as a Teaching Assistant.