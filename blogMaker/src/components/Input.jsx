import React,{useId} from 'react'

const Input=React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
},ref){ //since its callback fn u may use arrow
    const id=useId()
return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1' 
        htmlFor={id}>
        {label}
        </label>
        }
        <input 
        type={type}
        className={`${className}`}
        ref={ref} //ref passing from there and state access from here to write eg - onclick onchange
        {...props}
        id={id}
        ></input>
    </div>
)
})

export default Input