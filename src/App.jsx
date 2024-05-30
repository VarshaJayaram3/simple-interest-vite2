
import { Button, TextField } from '@mui/material'

import './App.css'
import { useState } from 'react'

function App() {
  //states to hold values from input fiels
 const [principle,setPrinciple] = useState(0)
 const [rate,setRate] = useState(0)
 const [year,setYear] = useState(0)

 const [interest,setInterest] = useState(0)
 /*for conditinal rendering */
 const [isPrinciple,setIsPrinciple]= useState(true)
 const [isRate,setIsRate]= useState(true)
 const [isYear,setIsYear]= useState(true)

 const validate =(e)=>{
  /* console.log(e.target.value);
   console.log(e.target.name);*/

   console.log(!! e.target.value.match(/^[0-9]*$/));

 if(!! e.target.value.match(/^[0-9]*$/)){
  if(e.target.name =='principle'){
    setPrinciple(e.target.value)
    setIsPrinciple(true)
  }
  else if(e.target.name=='rate'){
    setRate(e.target.value)
    setIsRate(true)
  }
  else{
    setYear(e.target.value)
    setIsYear(true)
  }
 }
 else{
  if(e.target.name =='principle'){
    setPrinciple(e.target.value)
    setIsPrinciple(false)
  }
  else if(e.target.name=='rate'){
    setRate(e.target.value)
    setIsRate(false)
  }
  else{
    setYear(e.target.value)
    setIsYear(false)
  }
 }

 }
 /*console.log('principle',principle);
 console.log('rate',rate);
 console.log('year',year);*/

 const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
  setInterest(0)
 }

 const calculate=()=>{
setInterest((principle * rate * year)/100)
 }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
      <div className="bg-light p-5 rounded" style={{width:'500px'}}>
        <h1 className='text-center'>Simple Interest App</h1>
        <p className='text-center'>Calculate Your Simple Interest Easily</p>

        <div className=' flex-column rounded mt-5 p-4 d-flex justify-content-center align-items-center shadow bg-warning'>
             <h2 className='fw-bolder fs-1'>₹ {interest}</h2>
             <p> Total Simple Interest</p>
        </div>

        <form className='mt-5'>
          <div className="mb-3">
          <TextField id="outlined-basic" onChange={(e)=>validate(e)} value={principle || ""} name='principle' label="₹ Principle Amount" variant="outlined" className='w-100' />
           {!isPrinciple &&
            <p className='text-danger'>*invalid input</p>}
            </div>

          <div className="mb-3">
          <TextField id="outlined-basic" onChange={(e)=>validate(e)} value={rate || ""} name='rate' label="Rate of Interest (p.a)%" variant="outlined" className='w-100'/>
          {!isRate &&
            <p className='text-danger'>*invalid input</p>}
            </div>

          <div className="mb-3">
          <TextField id="outlined-basic" onChange={(e)=>validate(e)} value={year || ""} name='year' label="Year (Yr)" variant="outlined" className='w-100' />
        { !isYear &&
         <p className='text-danger'>*invalid input</p>}
            </div>

            <div className="d-flex justify-content-between w-100 mt-4">
            <Button variant="contained" color="success" style={{width:'150px',height:'60px'}} disabled={isPrinciple && isRate && isYear ? false:true} onClick={calculate}>Calculate</Button>
            <Button variant="outlined" style={{width:'150px',height:'60px'}} onClick={handleReset}>Reset</Button>
            </div>
          
        </form>

      </div>
    </div>
     
    </>
  )
}

export default App
