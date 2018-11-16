const container = document.querySelector(".shape_container");

const rectangle_button = document.querySelector("#rectangle_button");
const square_button = document.querySelector("#square_button");
const circle_button = document.querySelector("#circle_button");
const triangle_button = document.querySelector("#triangle_button");

rectangle_button.addEventListener("click", () => {


});

square_button.addEventListener("click", () => {

});

circle_button.addEventListener("click", () => {
    const radius = document.getElementById("radius").value;
    const circle = new Circle(radius);
    circle.draw_shape();
});

triangle_button.addEventListener("click", () => {

});





class Shape
{
    constructor() {

    }
    area() {

    }
    draw_shape() {}

}

class Circle extends Shape
{
    constructor( radius ) {
        super();
        this.radius = radius;
        this.div = document.createElement("div");
        this.div.className = "circle";
    }

    circumference() {
        return 2 * 3.14 * this.radius;
    }
    area() {
        return 3.14 * (Math.pow(this.radius, 2));
    }
    draw_shape() {
        this.div.width = `${this.circumference()}`;
        this.div.height = `${this.circumference()}`;
        this.div.borderRadius = "50%";
        this.div.backgroundColor = "purple";
        container.appendChild(this.div);
    }
}
class Triangle extends Shape
{
    constructor( height ) {
        super();
        this.height = height;
        this.width = height;
        this.base = height;
    }
    area() {
        return 0.5 * this.base * this.height;
    }
}
class Square extends Shape
{
    constructor( side_length ) {
        super();
        this.side_length = side_length;
    }
    area() {
        return Math.pow(this.side_length , 2);
    }
}
class Rectangle extends Shape
{
    constructor( width , height ) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}


document.addEventListener("DOMContentLoaded" , function() {

});