import React from 'react'
import HomePage from './HomePage'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import ProjectsPage from './ProjectsPage'
import Resume from './Resume'

const App = () => {
    return(
        <div>
            <Navbar />
            <HomePage />
            <Footer />
            <About />
            <ProjectsPage />
            <Resume />
        </div>
    )
}

export default App