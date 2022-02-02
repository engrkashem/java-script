let products = [
    { name: 'shirt', price: 500, qty: 3 },
    { name: 'pant', price: 450, qty: 3 },
    { name: 'Shoe', price: 2500, qty: 1 },
    { name: 'watch', price: 500, qty: 1 },
    { name: 'shocks', price: 100, qty: 4 },
]
function totalPrice(items) {
    let totalPrice = 0;
    for (const product of items) {
        totalPrice += product.price * product.qty;
    }
    return totalPrice;
}
products[4].qty = 2;
products[3].price = 12500;
console.log(totalPrice(products))