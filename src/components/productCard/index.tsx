import {FC} from 'react';

import Button from '@material-ui/core/Button';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {Typography} from '@material-ui/core';

import {Product} from 'types/product';

import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  addCart: (product: Product) => void;
}

const getProductDetails = (product: Product) => {
  const productDetails = {
    name: '',
    unitPacString: '',
    unitPacNumber: 1,
    price: '',
    unitPrice: '',
    subtitle: '',
    isOldPrice: false,
  };
  const lastIndexOfComma = product.name.lastIndexOf(',');
  if (lastIndexOfComma === -1) {
    productDetails.name = product.name;
  } else {
    // remove comman and blank
    productDetails.unitPacString = product.name.slice(lastIndexOfComma + 2, product.name.length);
    productDetails.name = product.name.substring(0, lastIndexOfComma);
    productDetails.unitPrice =
      '$' +
      (product.price / (product.stepSize * parseFloat(productDetails.unitPacString))).toFixed(2) +
      `/${product.unitType}`;
  }
  productDetails.price = '$' + (product.price / product.stepSize).toFixed(2);
  return productDetails;
};

const ProductCard: FC<ProductCardProps> = ({product, addCart}) => {
  const productDetails = getProductDetails(product);
  return (
    <div className="ProductCard">
      <div className="ProductCard__product-detail">
        <div className="ProductCard__image-wrapper">
          <img src={product.imageUrl} alt={product.name} />
        </div>

        <Typography variant="caption" align="center" gutterBottom={true}>
          {product.brand}
        </Typography>
        <Typography variant="button" align="center" gutterBottom={true}>
          {productDetails.name}
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant="caption" align="center" style={{marginRight: '20px'}}>
            {productDetails.unitPacString}
          </Typography>
          <Typography variant="caption" align="center" color="textSecondary" gutterBottom={true}>
            {productDetails.unitPrice}
          </Typography>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant="body1" align="center" style={{marginRight: '30px'}} gutterBottom={true}>
            {productDetails.subtitle}
          </Typography>
          <Typography variant="h5" align="center">
            {productDetails.price}
          </Typography>
        </div>
      </div>
      <div className="addCart-button-wrapper">
        <Button variant="outlined" startIcon={<ControlPointIcon />} onClick={() => addCart(product)}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
