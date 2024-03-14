import React from 'react'
import logosrc from '../assets/logo.png'

function Logo({width = '10'}) {
  return (<div>
   <img src={logosrc} alt="Blog Insights"
    className="w-10 h-10"/>  
  </div>
    
  )
}

export default Logo