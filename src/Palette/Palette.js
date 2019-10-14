import React from 'react';

const Palette = ({ palettes }) => {
  // console.log(palettes.length)
  let randomId = Math.floor(Math.random() * Math.floor(palettes.length))
  console.log('randomId', randomId)
  let randomGenPalette = palettes.find(palette => <td>{ palette.id === randomId }</td>)
  return (
    <table>
      <tr>
        {/* <th>{}</th> */}
      </tr>
      <tr>
        {randomGenPalette}
      </tr>
    </table>
  )
}

export default Palette