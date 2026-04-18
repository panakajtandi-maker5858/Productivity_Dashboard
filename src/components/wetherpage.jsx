import axios from 'axios'
import React, { useEffect, useState } from 'react'


const wetherpage = () => {

  // const [apikey , setapikey] = useState('2775a5ab94434e439c144541261301')
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  const [city, setcity] = useState("Bhopal")
  const [temp, settemp] = useState("")
  const [condition, setcondition] = useState('')
  const [precipition, setprecipition] = useState('')
   const [wind, setwind] = useState('')
   const [humdidty, sethumdidty] = useState('')
   const [day, setday] = useState('')
   const [minutes, setminutes] = useState('')
   const [hours, sethours] = useState('')
   const [late , setlate] = useState('Bhopal')


  const wetaherfetch = async()=>{
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
   
    settemp(response.data.current.temp_c)
    setcondition(response.data.current.condition.text)
    setprecipition(response.data.current.precip_mm)
   sethumdidty(response.data.current.humidity)
    setwind(response.data.current.wind_kph)
    
    
  }
  

  const date = ()=>{
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dat = new Date()
let a = (dat.getHours())
let b = (days[dat.getDay()])
let c = (dat.getMinutes())
sethours(a)
setday(b)
setminutes(c)


  }
  

  useEffect(() => {
    wetaherfetch()
    date()
  }, []) 



  return (
    <div className='weatherpage h-70 bg-red-800  m-5 rounded bg-cover bg-center
    '
    style={{
    backgroundImage: "url('https://i.pinimg.com/1200x/58/f1/be/58f1bee5b6594f45fb68988b0ee43757.jpg')"
    
  }}
    
    
    >

<div className='flex items-center h-70 justify-between px-[5%] '>
<div >
  <h1 className='text-[2.5rem] font-bold'>
  {day} , 
  {hours % 12 === 0 ? 12 : hours % 12}
  :
  {minutes < 10 ? `0${minutes}` : minutes}
  {hours >= 12 ? ' PM' : ' AM'}
</h1>

  <h2 className='text-2xl ml-2 capitalize'>{late} </h2>
  <input
  type="text"
  placeholder="Enter city"
  className="
    bg-white/10 mt-3 
    border border-white/50 capitalize
    text-white 
    placeholder-white/70
    px-4 py-1.5 
    rounded-lg 
    w-40
    outline-none
    backdrop-blur-md
    focus:w-50
    focus:border-white
    transition-all duration-300
  "
  value={city}
  onChange={(e) => setcity(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      wetaherfetch()
      setlate(city)
    }
  }}
/>



</div>

<div >
  <h3 className='text-2xl font-bold '>{temp} °C</h3>
  <h4 className='text-xl font-normal'>{condition}</h4>
  <h5 className='text-[14px] font-light'>Precipition: {precipition}</h5>
  <h5 className='text-[14px] font-light'>Humidity :{humdidty}</h5>
  <h5 className='text-[14px] font-light'>Wind :{wind} km/h</h5>
</div>
</div>

    </div>
  )
}

export default wetherpage