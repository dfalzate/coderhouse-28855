class Color {
  getColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r},${g},${b})`;
    return rgb;
  }
}

const unColor = new Color();

console.log(unColor.getColor());
console.log(unColor.getColor());
