const Selector = ({ generateColorPalette, color, changeColor }) => {
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={generateColorPalette}>
        <input
          type="color"
          name="color-txt"
          id="color-txt"
          value={color}
          onChange={changeColor}
        />
        <input
          type="text"
          name="color-txt"
          id="color-txt"
          value={color}
          placeholder="#ffffff"
          onChange={changeColor}
        />
        <button
          className="btn"
          type="submit"
          style={{
            backgroundColor: color,
          }}
        >
          Generate
        </button>
      </form>
    </section>
  )
}

export default Selector
