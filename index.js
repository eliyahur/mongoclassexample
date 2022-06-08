//npm  install --save-dev nodemon
const mongoose = require("mongoose");
const product = require("./product");

mongoose.connect("mongodb://localhost:27017/hackerustudents");



async function createProduct() {
    const newProduct = new product({
        productName:"pineapple",
        price: 10,
        farmer: {
            name: "Rotenberg",
            age: 30
        },
        nutritions: ["sugar","protein"]
    });
    await newProduct.save();
    console.log(newProduct);
}
//createProduct();

async function updateProduct(id) {
    const productToChange = await product.findById(id);
    productToChange.price = 15;
    await productToChange.save();
}
//updateProduct("628b636fbdfcd49ade47bea7");

async function updateProducts(findObject) {
    const productsToChange = await product.find(findObject);
    productsToChange.forEach(async(element) => {
        let singleProduct = await product.findById(element.id);
        singleProduct.productName = "apple";
        await singleProduct.save();
    });
    console.log('change all the names');
}
//updateProducts({productName: "pineapple"});

async function deleteProduct(id) {
    const productToDelete = await product.findById(id);
    productToDelete.deleteOne();
    console.log('deleted?');
}
//deleteProduct("628b636fbdfcd49ade47bea7");

async function findUsingQuery() {
    const productsToFind = await product.where('productName').equals('apple').limit(2).select('price');
    console.log(productsToFind);
}
/*findUsingQuery();*/