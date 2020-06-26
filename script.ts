// MOUNTAINS 
interface Mountain { 
    name: string; 
    height: number;
}

let mountains: Mountain[];

// set to empty array
// let mountains: Mountain[] = [] ;

// set variable and push
// const mountain1: Mountain[] = {name: 'Mountain', height: 29};
// mountains.push(mountain1);

mountains = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310},
]

function findNameOfTallestMountain(mountains: Mountain[]): string { 
    let tallest: Mountain = mountains[0];
    mountains.forEach(mtn => { 
        if (tallest.height < mtn.height) {
            tallest = mtn;
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
        // loop through entire array to add previous price to next price
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
    // nest
    {product: {name: 'motor',price: 10.00}, quantity: 10},
    {product: {name: 'sensor', price: 12.50}, quantity: 4},
    {product: {name: 'LED', price: 1.00}, quantity: 20},
]

// product: value (cmd over over Product)
// { name: 'string',
//   price: number,
// }
// quantity: value 

function calcInventoryValue(inventory: InventoryItem[]) { 
    // set inventory total to 0
    let inventoryItems = 0;
    for (let x = 0; x < inventory.length; x++) { 
        // look through entire array
        // inventory item total + product price * quantity
        inventoryItems += inventory[x].product.price * inventory[x].quantity;
    }
    return inventoryItems;
}

// function calcInventoryValues(inventory: InventoryItem[]) { 
//     let sum: number = 0
//     iItems.forEach( i => sum += i.product.price + i.quantity);
//     return sum;
// }

let inventoryTotal = calcInventoryValue(inventory);
console.log(inventoryTotal);