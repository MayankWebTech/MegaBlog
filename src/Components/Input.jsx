import React, {useId} from 'react'


const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className ="",
    ...props
}, ref){
     
   const id = useId();
 
    return (
        <div className ="w-full">
            {label && <label
            className='inline-block mb-1  px-2 text-xl  font-extrabold hover:text-blue-800'
            htmlFor={id}>
             {label}
            </label> 
            }
            <input type={type} 
            className ={`px-3 py-2 rounded-lg bg-customWhite shadow-xl text-gray-600 outline-none focus:bg-gray-50 duration-200 border border-gray-300 w-full ${className}`}
            ref={ref} 
            {...props}
            id={id}/>
        </div>
    )
    
})

export default Input