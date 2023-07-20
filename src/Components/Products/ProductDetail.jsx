import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DetalleProducto from '../../Assets/12.png';
import {useContext} from "react";
import {DataContext} from '../../Context/ConversoContext';
import "./ProductDetail.css";

const ProductDetailWrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
}));

const ProductImage = styled('img')({
  width: '50%',
  marginRight: '16px',
  marginBottom: '20px',
});

const ProductContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const ButtonWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ProductDetail = (id) => {
  
  const { buyProduct } = useContext(DataContext);

  const handleAddToCart = () => {
    buyProduct(id.id);
  };

 

  return (

    <ProductDetailWrapper>
     <ProductImage src={id.id.image} alt="Producto"/>
      <ProductContent>
        <Typography variant="h4" gutterBottom>
        {id.id.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
        {id.id.description}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Precio: €{id.id.price}
        </Typography>
        <ButtonWrapper>
          <Button 
          variant="contained" 
          className="customButton"
          onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </ButtonWrapper>
      </ProductContent>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;