import React from 'react'
import './css/about.css'

const About = () => {
    return(
        <>
            <div className='parallax-image'></div>
            <div className='about-page'>
             
                <div className='photo'></div>
                
                <div className='about-me'>
                    
                    <p>
                        My name is Thomas!<br></br>
                        I am a Web Developer and currently working at <a href="https://vschool.io/?param1=value1&param2=value2&gclid=EAIaIQobChMIu-7ez7bD5AIVD9vACh2LPQJkEAAYASAAEgK9JfD_BwE" target="_blank" style={{color:'#f5b992'}}><b>Vschool</b> </a>as a Teaching Assistant.
                        
                    </p>
                    {/* <br></br> */}
                    {/* <p>
                        <b style={{color:'DeepSkyBlue'}}>Skills</b>
                        <br></br>
                        Like the R2 unit, I speak many programming languages… and no, I don’t have a bad motivator.
                    </p> */}
                    
                    <p>
                        <b style={{color:'DeepSkyBlue'}}>Let's Talk!</b>
                    <br></br>
                    <p>
                        <a href="mailto:tomeschlercoding@gmail.com?Subject=Hello%20" target="_top" target="_blank" style={{color: 'lavender'}}><i class="fas fa-envelope" style={{color: 'lavender', margin:'20px' }}></i></a>
                    </p>
                    
                        <a href={{tell:"+14356328393"}}> <i class="fas fa-phone-alt" style={{color: 'lavender', margin:'20px'}}></i> </a>
                    </p>
                    <div id='c3po'></div>
                </div>
                
            </div>
        </>
    )
}

export default About