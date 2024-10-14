//input box component  
import React,{useId} from 'react'

function InputBox({
//input box taking label, classname
  label, //to get whether from or to from UI
  amount, //amount
  onAmountChange, //while changing method
  onCurrencyChange, //currency filter
  currencyOptions=[],//default array so no one can mess
  selectCurrency="usd", //default selected
  amountDisable = false, //production purpose
  currencyDisable = false, //production purpose
  className="", //default empty
}){
  const amountInputId=useId()//tab tab tab thing
  return (
    
   
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>  {/* with classname param user can insert additional css */}

    <div className="w-1/2">
      <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
      <input //can also pass myAmt above in htmlFor and myAmt below in id, but we need unique ID extra knowledge
      id={amountInputId} //binding with input, for hint purpose
      className='outline-none w-full bg-transparent py-1.5'
      type='number' 
      placeholder='Amount'
      disabled={amountDisable}
      value={amount}
      onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} //event fire to call method.. && checker if exists then.. string to Number(...) 
      ></input>
    </div>

    <div className='w-1/2 flex flex-wrap justify-end text-right'>
    <p className='text-black/40 mb-2 w-full'>Currency Type</p>
    <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' 
    value={selectCurrency}//default
    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}//event fires method
    disabled={currencyDisable}//is disable field
    >
          {/* <option value="usd">usd</option> */}
          {currencyOptions.map((currency)=>( 
            <option key={currency} value={currency}>{currency}</option> //pass key to reduce performance degradation in loops since infinite loop fetching
            ))}
            {/* {currencyOptions.map((index)=>(  We can pass index or any other var as well preferebly id if taking from database
            <option key={index} value="usd">usd</option>
            ))} */}
    </select>

    </div>


    </div>
   
  )
}

export default InputBox

//we can export it directly as component but if bigger projects cr8 index.js in components folder