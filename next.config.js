const withCSS = require('@zeit/next-css')
const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');
const path = require('path');

module.exports = withCSS({
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' }
    };

    products = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json')));

    products.forEach(p => {
      paths[`/product/${p.sys.id}`] = {page: '/product', query: {id: p.sys.id}};
    });

    return paths;
  }
});
