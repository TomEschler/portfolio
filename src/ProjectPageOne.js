import React from 'react'
import './css/projects.css'


const ProjectPageOne = () => {

        return(
            <>
                <div className='parallax-image2'></div>
                <div className='project-container'>
                    <div className='project'>
                    <a href="http://travelcalc.surge.sh" target="_top" target="_blank" title="Awesome travel calculator"><div className='project-image travelCalc'></div></a>
                    <h2>Travel <br></br>Calculator</h2>
                    </div>
                    <div className='project'>
                    <a href="http://thomastodolist.surge.sh"  target="_blank"><div className='project-image todoList'></div></a>
                        <h2>Task <br></br>Manager</h2>
                    </div>
                </div>
            </>
        )
    
}


export default ProjectPageOne