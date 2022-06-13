interface IColor {
  color: string;
  getColor(): string;
}

class Color implements IColor {
  color: string;
  constructor() {
    this.color = "";
  }
  getColor(): string {
    const r: number = Math.floor(Math.random() * 255);
    const g: number = Math.floor(Math.random() * 255);
    const b: number = Math.floor(Math.random() * 255);
    this.color = `rgb(${r},${g},${b})`;
    return this.color;
  }
}

const unColor: Color = new Color();

console.log(unColor.getColor());
console.log(unColor.getColor());
