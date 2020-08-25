import React from 'react';
import Logo from './Logo'
import Title from './Title'
import Profile from './Profile'
import Message from './Message'
import Icons from './Icons'
import './App.css'

const Card = () => {
  return(
    <div className="container">
     <div className="card">
     <Logo /> 
     <Title />
     <Profile />
    </div>
    
      <Message />
    
    <div className="icon">
    <Icons />
    </div>
   

    </div>
   
  
     
      
    
  )

   
}
export default Card;
