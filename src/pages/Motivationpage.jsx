import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Motivation = () => {

  const [auth, setauth] = useState('')
  const [Quote , setQuote ] = useState('')

const quote = async function(){
  let response = await axios.get('https://motivational-spark-api.vercel.app/api/quotes/random/100')
  let random = Math.floor(Math.random()*100)

  let a = response.data[random ]
  console.log(a.author)
  setauth(a.author)
  setQuote(a.quote)
}
useEffect(() => {
  quote()
}, []);




  return (
    <>
      
    <div className='h-screen w-full bg-amber-200 absolute py-8 top-0 '>
      <div className='flex w-full justify-end px-10 '>
         <Link to='/' >
      <button className='bg-red-500 px-4 py-2 rounded cursor-pointer '>Close</button>
     </Link>
      </div>
  

<div className=' h-[90%] w-full flex items-center justify-center  '>
<div className="  animated-border w-[50%] rounded-xl p-[2px]  ">
  <div className="rounded-xl py-5 px-5 bg-amber-500">
    <button className='bg-red-700 px-5 py-2 rounded-lg mb-2'>
      Quote of the Day
    </button>

    <div className='mt-3 mx-[15%] leading-5 text-[19px] font-normal text-black'>
      {Quote}
    </div>

    <div className="flex justify-end mt-4">
  <button className="bg-red-700 px-5 py-2 rounded-lg">
    {auth}
  </button>
</div>

  </div>
</div>


    </div>
    </div>
    </>
  )
}

export default Motivation