import React, {FC, useEffect, useState, useContext, useMemo} from 'react';

import {Button, IconButton, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';

import getProducts from 'api/getProducts';
import {CartItemContext, ContextProps} from 'context/CartItemContext';
import {Product} from 'types/product';
import {FILTER_BUTTONS} from 'contants';
import {Loading, ProductCard} from 'components';

import './Shop.scss';

const Error = () => {
  return <div>Error</div>;
};

const Shop: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const {addProductToCart} = useContext(CartItemContext) as ContextProps;
  const [filterValue, setFilterValue] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async (): Promise<void> => {
      try {
        const fetchedProducts: Product[] = await getProducts();
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const getFilterProducts = () => {
      const newProducts = products.filter((product) => product.category.includes(filterValue));
      setFilteredProducts(newProducts);
    };
    getFilterProducts();
  }, [filterValue]);

  const filterButtons = FILTER_BUTTONS.map((category) => (
    <Button key={category} variant="outlined" onClick={() => setFilterValue(category)}>
      {category}
    </Button>
  ));

  const ProductGrid = (
    <Grid container spacing={2} style={{marginTop: '40px'}}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Grid item key={product.productId.value} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} addCart={addProductToCart} />
          </Grid>
        ))
      ) : (
        <Typography variant="subtitle1">
          There is no Products in this {filterValue} category. Only Backery, Dairy & Egg, Drinks are available. Or
          Please check the all product button, the last one
        </Typography>
      )}
    </Grid>
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return (
    <div className="Shop">
      <Typography variant="h6" style={{marginTop: '15px'}}>
        Shop by category
      </Typography>
      <div className="Shop__filter-product ">
        {filterButtons}
        <IconButton className="filter-all" size="small" onClick={() => setFilterValue('')}>
          <PlaylistAddCheckOutlinedIcon />
        </IconButton>
      </div>
      {ProductGrid}
    </div>
  );
};

export default Shop;
