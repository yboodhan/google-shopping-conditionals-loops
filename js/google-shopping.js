// Require is a node-specific thing, so run
// your file in the terminal with the node command!
// e.g., node js/google-shopping.js
let data = require('../products.json')

// This is a print out of all the items in the data
// console.log(data.items)

// Next, it's recommended to just look at the first item
// console.log(data.items[0])

// YOUR CODE BELOW
let items = data.items
// 1.) Go through the `items` and find all results that have `kind` of
// `shopping#product`. Print the count of these results. Where else is
// this count information stored in the search results?

console.log('\nProblem 1:\n')
let count = 0
let kind = items.map((p) => p.kind)
kind.forEach((p) => {
    if (p == 'shopping#product') {
        count++
    }
})
console.log(`The count of items with kind shopping#product is ${count}.`)
console.log(`This information is also found in the length of data.items.kind since all items have this kind type.`)


// 2.) Print the `title` all items with a `backorder` availability
// in `inventories`.

console.log('\nProblem 2:\n')
let backorders = items.map((p) => {
    return {
        title: p.product.title,
        availability: p.product.inventories[0].availability
    }
}).filter((p) => {
    return p.availability === 'backorder'
})
let backorderTitles = backorders.map((p) => p.title)
console.log(backorderTitles)
// console.log(`The titles of items with backorder availability are: ${backorderTitles}.`)

// 3.) Print the `title` all items with more than one image link.

console.log('\nProblem 3:\n')
let moreImages = items.map((p) => {
    return {
        title: p.product.title,
        images: p.product.images
    }
}).filter((p) => {
    return p.images.length > 1
})
let imagesTitles = moreImages.map((p) => p.title)
console.log(imagesTitles)
// console.log(`The titles of items with more than one image links are: ${imagesTitles}.`)

// 4.) Print all "Canon" products in the items
// HINT: careful with case sensitivity!

console.log('\nProblem 4:\n')
let brands = items.map((p) => {
    return {
        title: p.product.title,
        product: p.product,
        brand: p.product.brand
    }
}).filter((p) => {
    return p.brand.toUpperCase() === 'CANON'
})
let canonProducts = brands.map((p) => p.product)
let canonProductsTitles = brands.map((p) => p.title)
console.log(canonProducts)
console.log(canonProductsTitles)
// console.log(`The "Canon" products in the items are: ${canonProducts}.`)
// console.log(`Their titles are: ${canonProductsTitles}`)

// 5.) Print all `items` that have an author name of "eBay" and are
// brand "Canon".
// HINT: What is the type of author?

console.log('\nProblem 5:\n')
let eBay = items.filter((p) => {
    return p.product.author.name.toUpperCase().includes('EBAY')
}).filter((p) => {
    return p.product.brand.toUpperCase() === 'CANON'
})

console.log(eBay)
// console.log(`The items with author name eBay of Canon brand are: ${eBay}.`)


// 6.) Print all the products with their **brand**, **price**,
// and an **image link**
// HINT: You can just use the first (0th) element in the images
// and inventories arrays.

console.log('\nProblem 6:\n')
let allProducts = items.map((p) => {
    return {
        price: p.product.inventories[0].price,
        image: p.product.images[0].link,
        brand: p.product.brand
    }
})
console.log(allProducts)
// console.log(`The price, image link, and brand for all items are: ${allProducts}.`)
