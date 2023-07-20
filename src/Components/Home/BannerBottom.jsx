import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
}));

const BannerBottom = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <h2>About us</h2>
      <p>At Techcycle, we are passionate about bridging the gap between tech enthusiasts and aspiring 
        developers. Our mission is to provide a platform where students and tech professionals can 
        easily buy, sell, and exchange high-quality, pre-loved computers and accessories at affordable 
        prices. We believe that access to reliable gear shouldn't be a barrier to learning and 
        innovation. By promoting a sustainable tech ecosystem, we aim to reduce electronic waste and 
        contribute to a greener future. Join us in creating a community that fosters knowledge-sharing, 
        economic efficiency, and environmental responsibility. Together, let's make a positive impact on 
        both your tech journey and the planet.</p>
      <Button className={classes.button} variant="contained">
        SHOP BEST OFFERS
      </Button>
    </div>
  );
};

export default BannerBottom;

