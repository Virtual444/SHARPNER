// models/product.js
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');

class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(productsFilePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(productsFilePath, JSON.stringify(products), (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(productsFilePath, (err, fileContent) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(fileContent));
      }
    });
  }
}

module.exports = Product;
