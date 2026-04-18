import React from 'react'
import { Link } from 'react-router-dom'

const pages = [
  {
    name: 'To-do',
    path: '/to-do-page',
    bg: 'https://i.pinimg.com/1200x/55/f6/f6/55f6f6fc391128cd61f578dcdb9246da.jpg'
  },
  {
    name: 'Daily Planner',
    path: '/daily-planner-page',
    bg: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe'
  },
  {
    name: 'Motivation',
    path: '/motivation-page',
    bg: 'https://i.pinimg.com/1200x/cf/57/07/cf5707523378effa01b4ffc8fd47e2e8.jpg'
  },
  {
    name: 'Timer',
    path: '/timer-page',
    bg: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
  },
  {
    name: 'Daily Goals',
    path: '/daily-goals-page',
    bg: 'https://i.pinimg.com/736x/60/f4/b5/60f4b5e836bf321a018c70497fb355e1.jpg'
  },
]

const Allpages = () => {
  return (
    <div className="
      mt-10 mx-5 p-8 rounded-xl
      bg-gradient-to-r from-sky-400 via-cycan-400 to-blue-500
      shadow-xl
    ">

      <div className="flex flex-wrap gap-8 justify-center">

        {pages.map((page) => (
          <Link
            key={page.name}
            to={page.path}
           className="
  group relative
  h-56 w-44 rounded-3xl
  bg-white/20 backdrop-blur-md
  border border-white/30
  text-white font-medium text-lg
  transition-all duration-300 ease-out
  hover:scale-110
  hover:shadow-2xl hover:shadow-sky-500/50
  bg-cover bg-center
  shine-card
"

            style={{
              backgroundImage: `url(${page.bg})`
            }}
          >

            {/* dark overlay (readability ke liye) */}
            <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

            {/* NAME – bottom right */}
            <span className="
              absolute bottom-3 right-3
              text-sm tracking-wide
            ">
              {page.name}
            </span>

          </Link>
        ))}

      </div>
    </div>
  )
}

export default Allpages





