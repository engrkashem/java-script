const triangleSideA = 5;
const triangleSideB = 6;
const triangleSideC = 9;
const triangleBase = 9;
const triangleHeight = 4;
function triangleAreaBySides(side1, side2, side3) {
    const halfPerimeter = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(halfPerimeter * (halfPerimeter - side1) * (halfPerimeter - side2) * (halfPerimeter - side3));
    return area;
}
console.log('The area of your desired triangle is ', parseFloat(triangleAreaBySides(triangleSideA, triangleSideB, triangleSideC).toFixed(2)), 'sq.m');
//Triangle Area By Base Height
function triangleAreaByBaseHeight(base, height) {
    const area = (base * height) / 2;
    return area;
}
console.log('The area of your desired triangle is ', Math.round(triangleAreaByBaseHeight(triangleBase, triangleHeight)), 'sq.m')