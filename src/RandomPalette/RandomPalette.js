import React from 'react'
import './RandomPalette.css'

const RandomPalette = ({ colors }) => {
  console.log(colors)
  const hexColor = colors.map((color, index) => {
    console.log('hexcolor', color)
    return (
      <div 
      className ="swatch"
      style={{backgroundColor: color[`color_${index+1}`]}}
      >
      </div>
    )
  })
  return (
    <div>
      { hexColor }
    </div>
  )
}

export default RandomPalette