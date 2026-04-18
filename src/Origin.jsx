import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Themepage from './components/Themepage'
import Weatherpage from './components/wetherpage'
import Allpages from './pages/Allpages'
import Todopage from './pages/Todopage.jsx'
import Dailyplanner from './pages/Dailyplannerpage.jsx'
import Motivation from './pages/Motivationpage.jsx'
import Timer from './pages/Timerpage.jsx'
import Dailygoal from './pages/Dailygoalspage.jsx'

const Origin = () => {
  return (
    <div className='main'>

      <Themepage />
      <Weatherpage />

      <Routes>
        <Route path='/' element={<Allpages />} />
        <Route path='/to-do-page' element={<Todopage />} />
        <Route path='/daily-planner-page' element={<Dailyplanner/>}/>
        <Route path='motivation-page' element={<Motivation/>}/>
        <Route path='/timer-page' element={<Timer/>}/>
        <Route path='/daily-goals-page' element={<Dailygoal/>}/>

      </Routes>

    </div>
  )
}

export default Origin
