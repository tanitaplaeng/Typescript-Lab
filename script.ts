// MOUNTAINS 
interface Mountain { 
    name: string; 
    height: number;
}

let mountains: Mountain[];

mountains = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310},
]

function findNameOfTallestMountain(mountains: Mountain[]): string { 
    let tallest: Mountain = mountains[0];
    mountains.forEach(m => { 
        if (tallest.height < m.height) {
            tallest = m;
        }
    });
    return tallest.name;
}

let tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);



// PRODUCTS
interface Product { 
    name: string;
    price: number;
}

let products: Product[];

products = [
    {name: 'Snake Plant', price: 37},
    {name: 'Dracaena', price: 23},
    {name: 'Spider Plant', price: 14},
    {name: 'Birds Nest Fern', price: 55},
]

function calcAverageProductPrice(products: Product[]) { 
    // get how number of products are in array
    let productsArray = products.length;
    // set total to 0
    let total = 0;
        // setting new total to total (0) plus price 
        // loops through whole array to add previous price to next price
    for (const item of products) { 
        total = item.price + total
    }
    // return sum of the total, divided by number of products 
    return total / productsArray;
}

let avgProducts = calcAverageProductPrice(products);
console.log(avgProducts);



// INVENTORY
interface InventoryItem { 
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[];

inventory = [
    {product: {name: 'motor',price: 10.00}, quantity: 10},
    {product: {name: 'sensor', price: 12.50}, quantity: 4},
    {product: {name: 'LED', price: 1.00}, quantity: 20},
]

function calcInventoryValue(inventory: InventoryItem[]) { 
    let inventoryTotal = 0;
    inventory.forEach(x => { 
        inventoryTotal += x.price * x.quantity 
    })
    // get product price 
    
    // get quantity
    // product price times quantity
    // return total`
}
