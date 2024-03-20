import React from 'react'
import logosrc from '../assets/logob.svg'

function Logo({width = '10'}) {
  return (<div className='flex items-center justify-center'>
   <img src={logosrc} alt="Blog Insights"
    className="w-50 h-20 "/>
    
  </div>
    
  )
}

export default Logo