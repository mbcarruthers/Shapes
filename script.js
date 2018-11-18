const container = document.querySelector(".container");

const rectangle_button = document.querySelector("#rectangle_button");
const square_button = document.querySelector("#square_button");
const circle_button = document.querySelector("#circle_button");
const triangle_button = document.querySelector("#triangle_button");

rectangle_button.addEventListener("click", () => {
    const height = document.querySelector("#rectangle_height").value;
    const width = document.querySelector("#rectangle_width").value;
    const rectangle = new Rectangle(width , height);
    rectangle.draw_shape();

});

square_button.addEventListener("click", () => {
    const side_length = document.querySelector("#side_length").value;
    const square = new Square(side_length);
    square.draw_shape();
});

circle_button.addEventListener("click", () => {
    const radius = document.getElementById("radius").value;
    const circle = new Circle(radius);
    circle.draw_shape();
});

triangle_button.addEventListener("click", () => {
    const triangle_height = document.querySelector("#triangle_height").value;
    const triangle = new Triangle(triangle_height);
    triangle.draw_shape();
});


// TODO: make all of the classes and figure out what needs to be put into the base class for all of them
// TODO: Move more of the styling over to CSS
// TODO:


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
        console.log(2 * 3.14 * this.radius);
        return 2 * 3.14 * this.radius;
    }
    area() {
        return 3.14 * (Math.pow(this.radius, 2));
    }
    draw_shape() {
        this.div.style.top = `${Math.floor( Math.random() * 599)}px`;
        this.div.style.left = `${Math.floor( Math.random() * 599)}px`;
        this.div.style.width = `${this.circumference()}px`;
        this.div.style.height = `${this.circumference()}px`;
        this.div.style.borderRadius = "50%";
        this.div.style.backgroundColor = "purple";
        container.appendChild(this.div);
    }
}

class Rectangle extends Shape
{
    constructor( width , height ) {
        super();
        if(width === height ) {
            // do nothing: probably a better way to approach this though.
        } else {

        this.width = width;
        this.height = height;
        this.div = document.createElement("div");
        this.div.className = "rectangle";
        }

    }
    area() {
        return this.width * this.height;
    }
    draw_shape() {
        this.div.style.top = `${Math.floor( Math.random() * 599)}px`;
        this.div.style.left = `${Math.floor( Math.random() * 599)}px`;
        this.div.style.margin = "1px";
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        this.div.style.backgroundColor = "green";
        container.appendChild(this.div);
    }
}

class Square extends Shape
{
    constructor( side_length ) {
        super();
        this.side_length = side_length;
        this.div = document.createElement("div");
        this.div.className = "square";
    }
    area() {
        return Math.pow(this.side_length , 2);
    }
    draw_shape() {
        this.div.style.top = `${Math.floor( Math.random() * 599)}px`;
        this.div.style.left = `${Math.floor( Math.random() * 599)}px`;
        this.div.style.width = `${this.side_length}px`;
        this.div.style.height = `${this.side_length}px`;
        this.div.style.backgroundColor = "red";
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
        this.div = document.createElement("div");
        this.div.className = "triangle";
    }
    area() {
        return 0.5 * this.base * this.height;
    }
    draw_shape() {
        this.div.style.top = `${Math.floor( Math.random() * 599)}px`;
        this.div.style.left = `${Math.floor( Math.random() * 599)}px`;
        this.div.style.width = "0px";
        this.div.style.height = "0px";
        this.div.style.borderBottom = `${this.base}px solid yellow`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
        this.div.backgroundColor = "yellow";
        container.appendChild(this.div);
    }
}




document.addEventListener("DOMContentLoaded" , function() {

});