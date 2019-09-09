import React from 'react'
import './css/home.css'
import Menu from './Menu'


const Home = () => {
    return(
       <>
      
        <Menu />
            <div className='home'>
                <div className='name'>
                    <h3>Thomas Wolfgang </h3>
                </div>
                <div className='title'>
                    
                    <p className='full-stack'>Full Stack</p>
                    <p id='developer'>Web Developer</p>
                    <div className='skills'>
                    <div className='languages'style={{fontSize:'12pt',color:'DeepSkyBlue'}}><pre>React</pre></div>
                    
                    <div className='languages'style={{fontSize:'12pt',color:'yellow'}}><pre>JS</pre></div>
                    <div className='languages'style={{fontSize:'12pt',color:'LimeGreen'}}><pre>CSS</pre></div>
                    <div className='languages'style={{fontSize:'12pt',color:'orangered'}}><pre>NODE</pre></div>
                    <div className='languages'style={{fontSize:'12pt',color:'DeepSkyBlue'}}><pre>...</pre></div>
                    </div>
                    
                </div>
                <div className='last-name'>
                    <p><h3> Eschler </h3></p>
                </div>
                
            </div>
            
            <div className='arrow'><i class="fas fa-arrow-right" ></i></div>
           
        </>
    )
}

export default Home