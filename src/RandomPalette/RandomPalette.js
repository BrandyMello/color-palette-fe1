import React from 'react'
import './RandomPalette.css'

const RandomPalette = ({ colors, generateRandomPalette }) => {
  const hexColor = colors.map((color, index) => {
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
      <button type="submit" onClick={() => generateRandomPalette()}>Generate Palette</button>
    </div>
  )
}

export default RandomPalette