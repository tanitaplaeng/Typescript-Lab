let mountains;
mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];
function findNameOfTallestMountain(mountains) {
    let tallest = mountains[0];
    mountains.forEach(m => {
        if (tallest.height < m.height) {
            tallest = m;
        }
    });
    return tallest.name;
}
let tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);
let products;
products = [
    { name: 'Snake Plant', price: 37 },
    { name: 'Dracaena', price: 23 },
    { name: 'Spider Plant', price: 14 },
    { name: 'Birds Nest Fern', price: 55 },
];
function calcAverageProductPrice(products) {
    let productsArray = products.length;
    let total = 0;
    for (const item of products) {
        total = item.price + total;
    }
    return total / productsArray;
}
let avgProducts = calcAverageProductPrice(products);
console.log(avgProducts);
let inventory;
inventory = [
    { product: { name: 'motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 },
];
function calcInventoryValue(inventory) {
    let inventoryTotal = 0;
    inventory.forEach(x => {
        inventoryTotal += x.price * x.quantity;
    });
}
//# sourceMappingURL=script.js.map