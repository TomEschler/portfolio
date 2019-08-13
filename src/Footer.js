import React from 'react'
import './css/home.css'

class Footer extends React.Component {
    render() {
        return(
            <>
            
            <div className='footer'>
                <div className='color-background'>
                    <div className='linked-in'></div>
                </div>
                <div className='color-background'>
                        <div className='github'></div>
                </div>
                {/* <div className='bracket-bottom'>&#125;</div> */}
            </div>
            
            </>
        )
    }
}

export default Footer