import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Todopage = () => {
  const [title, setTitle] = useState('')
  const [bio, setBio] = useState('')
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('todoData')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(data))
  }, [data])

  const submithandler = (e) => {
    e.preventDefault()
    setData([...data, { title, bio }])
    setTitle('')
    setBio('')
  }

  const deletehandler = (idx) => {
    const copy = [...data]
    copy.splice(idx, 1)
    setData(copy)
  }

  return (
    <div className=" absolute top-0 min-h-screen w-full bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 px-8 py-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-amber-900">
          Your Personalized Task List
        </h1>

        <Link to="/">
          <button className="
            bg-orange-500 hover:bg-orange-600
            text-white px-5 py-2 rounded-xl
            shadow-md transition">
            Close
          </button>
        </Link>
      </div>

      <div className="flex gap-10">

        {/* LEFT : FORM */}
        <div className=" h-95
          w-[32%] bg-white/80 backdrop-blur-md
          rounded-2xl p-6 shadow-xl text-black
        ">
          <form onSubmit={submithandler}>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title..."
              className="
                w-full h-11 px-4 mb-4
                rounded-lg border
                focus:ring-2 focus:ring-amber-400
                outline-none font-medium
              "
              required
            />

            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Task details..."
              className="
                w-full h-48 px-4 py-3 mb-4
                rounded-lg border resize-none
                focus:ring-2 focus:ring-amber-400
                outline-none text-black
              "
            ></textarea>

            <button className="
              w-full h-11
              bg-amber-500 hover:bg-amber-600
              text-white font-semibold
              rounded-lg shadow-md
              transition">
              Add Task
            </button>

          </form>
        </div>

        {/* RIGHT : TASK LIST */}
        <div className="
          w-[60%] bg-white/70 backdrop-blur-md
          rounded-2xl p-6 shadow-xl
          overflow-y-auto max-h-[520px]
        ">
<h1 className='text-gray-500 text-xl mb-2 font-semibold'>All task :-</h1>
          {data.length === 0 && (
            <p className="text-center text-amber-700 mt-20">
              No tasks yet 🌱
            </p>
          )}
           
          {data.map((elem, idx) => (
            <div
              key={idx}
              className="
                bg-white rounded-xl p-4 mb-4
                shadow-sm hover:shadow-lg
                transition flex justify-between items-center
              "
            >
              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  {elem.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {elem.bio}
                </p>
              </div>

              <button
                onClick={() => deletehandler(idx)}
                className="
                  bg-emerald-500 hover:bg-emerald-600
                  text-white px-4 py-2 rounded-lg
                  transition shadow
                ">
                Done
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Todopage
