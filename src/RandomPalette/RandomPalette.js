import React from "react";
import "./RandomPalette.css";

const RandomPalette = ({ colors, generateRandomPalette }) => {
  const hexColor = colors.map((color, index) => {
    return (
      <div
        key={index}
        className="swatch"
        style={{ backgroundColor: color[`color_${index + 1}`] }}
      ></div>
    );
  });
  return (
    <div className="palette-section">
      <h3>Randomly Generated Palette</h3>
      {hexColor}
      <button
        type="submit"
        onClick={() => generateRandomPalette()}
        className="generate_palette_button"
      >
        Generate Palette
      </button>
    </div>
  );
};

export default RandomPalette;
