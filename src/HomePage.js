import React from 'react'
import './css/home.css'

const HomePage = () => {
    return(
        <div>
            <div className='home'>
                <div className='name'>
                    <h3>Thomas Wolfgang </h3>
                </div>
                <div className='title'>
                    
                    <p className='full-stack'>Full Stack</p>
                    <p>Web Developer</p>
                    <div className='skills'>
                    <div className='languages'style={{fontSize:'12pt',color:'DeepSkyBlue'}}><pre>React</pre></div>
                    <div className='languages'style={{fontSize:'12pt',color:'orange'}}><pre>HTML</pre></div>
                    <div className='languages'style={{fontSize:'12pt',color:'LimeGreen'}}><pre>JS</pre></div>
                    <div className='languages'style={{fontSize:'12pt',color:'SkyBlue'}}><pre>CSS</pre></div>
                    </div>
                    
                </div>
                <div className='last-name'>
                    <p><h3> Eschler </h3></p>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage