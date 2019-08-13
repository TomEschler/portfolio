import React from 'react'
import Navbar from './Navbar'
import './css/projects.css'


const ProjectsPage = () => {

        return(
            <>
                <div className='parallax-image2'></div>
                <Navbar />
                <div className='project-container'>
                    <div className='project-1'>
                        <div className='project-image-1'></div>
                        <h2>Project 1</h2>
                    </div>
                    <div className='project-2'>
                        <div className='project-image-1'></div>
                        <h2>Project 2</h2>
                    </div>
                    <div className='project-3'>
                        <div className='project-image-1'></div>
                        <h2>Project 3</h2>
                    </div>
                    <div className='project-4'>
                        <div className='project-image-1'></div>
                        <h2>Project 4</h2>
                    </div>
                </div>
            </>
        )
    
}


export default ProjectsPage