class Circle {
    constructor (radius = 1.0, color = "red" ){
        this.radius = radius;
        this.color = color;
    }
circleR(num1){
   this.radius = num1;
}
circleRC(num2,col){
    this.radius = num2;
    this.color = col;
}
getRadius(){
    return this.radius;
}
getcolor(){
    return this.color;
}
setColor(colr){
    this.color = colr;
}
getArea(){
    let area = 3.14*this.radius*this.radius;
    return area;
}
getCircumfer(){
    let circum = 2*3.14*this.radius;
    return circum;
}
}
console.log(circle1.circleR(5));
console.log(circle1.circleRC(6,"indica"));
let circle1 = new Circle(2,3);
console.log(circle1.getRadius());

