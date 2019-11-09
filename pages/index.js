import 'bootstrap/dist/css/bootstrap.min.css';

import { createClient } from 'contentful'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProductList from '../components/product-list'

import products from '../data/products'

const Index = (props) => (
	<div style={{padding: "20px"}}>
		<h1>Hello!</h1>
		<ProductList products={products}></ProductList>
	</div>
);

/*Index.getInitialProps = async function() {
	var client = createClient({
	  space: publicRuntimeConfig.CONTENTFUL_SPACE,
	  accessToken: publicRuntimeConfig.CONTENTFUL_KEY
	});

	var products = await client.getEntries({
		content_type: 'product',
		order: 'fields.price'
	});

	return {
		products: products
	}
}*/

export default Index;
