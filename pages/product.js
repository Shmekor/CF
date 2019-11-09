import 'bootstrap/dist/css/bootstrap.min.css';
import { createClient } from 'contentful'
import Product from '../components/product'

import products from '../data/products'

const ProductPage = (props) => {

  return (
    <Product product={props.product}></Product>
  );
}

Product.getInitialProps = async function(context) {
  const { id } = context.query;

  let product = products.find(function(p) {
    return p.sys.id === id;
  });

  return {
    product: product
  }
};

export default Product;
