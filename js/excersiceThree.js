/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */
class Rectangles {
  constructor(heigth, width) {
    this.heigth = heigth;
    this.width = width;
  }
  perimeter() {
    const resultPerimeter = this.heigth * 2 + this.width * 2;
    console.log(
      `The rectangle has a height of: ${this.heigth} and width of: ${this.width},and has a perimeter of ${resultPerimeter}`
    );
  }

  area() {
    const resultArea = this.heigth * this.width;
    return `The area of the rectangle is the multiply of they, and is equal of: ${resultArea}`;
  }
}

const rectanglesConst = new Rectangles(6, 3);


console.log(rectanglesConst.area());
console.log(rectanglesConst.perimeter());