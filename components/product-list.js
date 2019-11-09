import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';

import './product-list.css'

const ProductList = (props) => (
	<CardDeck className="app1-pl-list" style={props.style}>
		{props.products.map((product, i) => (
		<Card key={product.sys.id}>
			<Card.Img variant="top" src={product.fields.image[0].fields.file.url} />
			<Card.Body>
				<Card.Title>{product.fields.productName}</Card.Title>
				<Card.Text>
				 	{product.fields.productDescription}
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Link href={`/product?id=${product.sys.id}`} as={`/product/${product.sys.id}`}>
					<Button variant="primary">Buy for ${product.fields.price}</Button>
				</Link>
			</Card.Footer>
		</Card>
		))}
	</CardDeck>
);

export default ProductList;
