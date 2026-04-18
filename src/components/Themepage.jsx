import React, { useEffect, useState } from 'react'

const Themepage = () => {
  const [isLight, setIsLight] = useState(false)

  const changetheme = () => {
    document.body.classList.toggle('light-theme')

    const theme = document.body.classList.contains('light-theme')
      ? 'light'
      : 'dark'

    localStorage.setItem('theme', theme)
    setIsLight(theme === 'light')
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light') {
      document.body.classList.add('light-theme')
      setIsLight(true)
    }
  }, [])

  return (
    <div className="
      flex justify-between items-center
      px-8 py-5 rounded-lg mt-1 mx-3
      bg-gradient-to-r from-emerald-300 via-blue-500 to-cyan-500
      shadow-xl backdrop-blur-md
    ">

      {/* Title */}
      <h1 className="text-2xl font-semibold text-white tracking-wide">
        Activity Dashboard
      </h1>

      {/* Theme Toggle */}
      <div
        onClick={changetheme}
        className="
          relative w-16 h-8 rounded-full cursor-pointer
          bg-white/30 backdrop-blur-md
          flex items-center px-1
          transition-all duration-300
        "
      >
        <div
          className={`
            w-6 h-6 rounded-full bg-white shadow-md
            flex items-center justify-center text-sm
            transition-all duration-300
            ${isLight ? 'translate-x-8' : 'translate-x-0'}
          `}
        >
          {isLight ? '🌞' : '🌙'}
        </div>
      </div>
    </div>
  )
}

export default Themepage

