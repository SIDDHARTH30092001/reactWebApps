import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount,setAmount]=useState(0) 
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from) 

  //ofc in api link data is in key:value ofc user has to provide/select key and not value
  const options= Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount*currencyInfo[to])
  }
 

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url('https://images.pexels.com/photos/27756675/pexels-photo-27756675/free-photo-of-red-lit-observatory-against-the-starry-night-sky.jpeg?auto=compress&cs=tinysrgb&w=600')`,}}>


    <div className='w-full'>
      <div className='w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      <form
      onSubmit={(e)=>{
        e.preventDefault();
        convert()
      }}
      >
        <div className='w-full mb-1'>
        <InputBox
        label="From"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency)=>setAmount(amount)}
        selectCurrency={from}
        onAmountChange={(amount)=>setAmount(amount)}>
        </InputBox>
        </div>

        <div className='relative w-full h-0.5'>
        <button
        type="button"
        className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
        onClick={swap}
        >
          SWAP
        </button>
        </div>

        <div className='w-full mt-1 mb-4'>
        <InputBox
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency)=>setTo(currency)}
        selectCurrency={from}
        amountDisable
        ></InputBox>
        </div>
        <button
        type='submit'
        className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
        onClick={swap}
        >
          CONVERT {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
      </div>
    </div>


    </div>
  )
}

export default App
