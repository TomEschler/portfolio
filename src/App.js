import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import SwipeableViews from 'react-swipeable-views';

const App = () => {
    return(
    
        <SwipeableViews>
            <Home />
            <About />
            <Projects />
            <Projects />
            <Resume />
        </SwipeableViews>
    
    )
}

export default App