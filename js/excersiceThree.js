/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */
class Rectangles {
  constructor(heigth, width) {
    this._heigth = heigth;
    this._width = width;
  }
  perimeter() {
    const resultPerimeter = this._heigth * 2 + this._width * 2;
    console.log(
      `The rectangle has a height of: ${this._heigth} and width of: ${this._width},and has a perimeter of ${resultPerimeter}`
    );
  }

  area() {
    const resultArea = this._heigth * this._width;
    return `The area of the rectangle is the multiply of they, and is equal of: ${resultArea}`;
  }
}

const rectanglesConst = new Rectangles(6, 3);


console.log(rectanglesConst.area());
console.log(rectanglesConst.perimeter());