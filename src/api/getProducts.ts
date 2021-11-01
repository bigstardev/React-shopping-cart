import {PRODUCT_ENDPOINT_API} from 'contants';
import {Product} from 'types/product';

const getProducts = async (): Promise<Product[]> => {
  const data = await await fetch(PRODUCT_ENDPOINT_API);
  const results = await data.json();
  if (!results) {
    throw new Error('Error while fectching products, please try again');
  }
  return results;
};
export default getProducts;
