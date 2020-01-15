import React from 'react'
import Home from './Home'
import About from './About'
import ProjectPageOne from './ProjectPageOne'
import Resume from './Resume'
import SwipeableViews from 'react-swipeable-views';
import ProjectPageTwo from './ProjectPageTwo'

const App = () => {
    return(
    
        <SwipeableViews>
            <Home />
            <About />
            <ProjectPageOne />
            <ProjectPageTwo />
            <Resume />
        </SwipeableViews>
    
    )
}

export default App