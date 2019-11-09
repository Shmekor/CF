import fs from 'fs'
import path from 'path'
import { createClient } from 'contentful'

const dotenv = require('dotenv');
dotenv.config();

const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE;
const CONTENTFUL_KEY = process.env.CONTENTFUL_KEY;

const client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_KEY
});

export const getproducts = async () => {
  const products = await client.getEntries({
		content_type: 'product',
		order: 'fields.price'
	});

  fs.writeFileSync(
    path.join(__dirname, '..', 'data', 'products.json'),
    JSON.stringify(products.items)
  );

  return true;
};

if(process.argv[2] === 'install') {
  getproducts();
}
