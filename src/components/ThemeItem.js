import React from 'react'
import './themes.css'

const ThemeItem = ({color, img, changeColor}) => {
  return (
    <img src={img} alt="" className="theme__img" onClick=
    {() => {changeColor(color)}} />
  )
}

export default ThemeItem
