import Link from 'next/link';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Product = (props) => (
  <Card key={props.product.sys.id}>
    <Card.Img variant="top" style={{"width": "300px"}} src={props.product.fields.image[0].fields.file.url} />
    <Card.Body>
      <Card.Title>{props.product.fields.productName}</Card.Title>
      <Card.Text>
        {props.product.fields.productDescription}
      </Card.Text>
      <Link href="/" as="/">
        <Button variant="primary">Back</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default Product;
