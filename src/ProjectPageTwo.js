import React from 'react'
import './css/projects.css'


const ProjectPageTwo = () => {

        return(
            <>
                <div className='parallax-image2'></div>
                <div className='project-container'>
                    <div className='project'>
                    <a href="https://github.com/TomEschler/nasa" target="_blank"><div className='project-image nasa'></div></a>
                        <h2>Token <br></br>Authentication</h2>
                    </div>
                    <div className='project'>
                    <a href="https://miseryandcocollective.com" target="_blank"><div className='project-image tattoo'></div></a>
                        <h2>Tattoo <br></br>Collective</h2>
                    </div>
                </div>
            </>
        )
    
}


export default ProjectPageTwo