import React from 'react'
import './css/menu.css'



class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            menuChange: false,
            dropDown: false
        }
        
    }
    
        //always use a fat arrow so I dont have to use this.state.bind

    // !true === false
    // !false === true
    

    //this function is changing the current state that is in the constructor. we need to make this event listener define new values for state. in this handleclick we are changing two states that we can use for later. it is now telling the original state of menuChange, which is false, to the opposite of that because it has a ! mark. so now this menuChange state is set as true, which will trigger some events depending on how we use the function. in this case the function is called by an onclick. and that onclick is going to use the ternary i made in the render. this ternary im using is defining what its div class is. 
    handleClick = () => {
        
        this.setState(prevState => {
            return{
                menuChange: !prevState.menuChange,
                dropDown: !prevState.dropDown
            }
        })
    }
    
    

    render() {
        // the variable menux is this ternary so that i dont have to write all that out again incase i want to use it again. and its equal to the state of whatever state im using. and if state is now true,opposite of false, then its opposite of state and it will change else if it not true and state is the same then there will be no change and it will be this.

        // if blank is blank ? value-if-true : value-if-false
        // Think of the ? as "then" and : as "else". the if is always first and the if statement is always set to look if something is truthy. the else checks if its falsey.
        const menuX = this.state.menuChange ? 'change' : 'menu'
        const menuDropDown = this.state.dropDown ? 'menu-bar' : 'none'
        
        return(
            <>
            <div className='navbar'>
                <div className={menuX} //this class is depending on what the on click is doing.and its going to use the handle click function. in the handle click function, the original state is set at false. so the menuX ternary is defining what the truth does and what the false does. in this instance the truth is saying the onclick makes this original state true. and when thats not true then the onclick is being used and the class value is the other.
                onClick={this.handleClick}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                </div>
                <div className={menuDropDown}>
                <i class="far fa-comment-dots" style={{fontSize:'30px',color:'LimeGreen'}}></i>
                <i class="fab fa-github-square" style={{fontSize:'30px',color:'orange'}}></i>
                <i class="fab fa-linkedin" style={{fontSize:'30px',color:'DeepSkyBlue'}}></i>
                </div>
            </div>
        </>
        )
    }
}


export default Navbar 


