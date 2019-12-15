import React from "react";
import {
  Card,
  Grid,
  CardActions,
  CardContent, ButtonBase,
  CardMedia,
  Button,
  Typography, IconButton
} from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import "./product.scss";
import { Link} from "react-router-dom";

const Product = ({product}) => {

    // const onProductClick = ()=>{

    // }

  return (
    <>
      {product ? (
        <Card className="product">
            <ButtonBase className="card-button" component={Link} to={`/product/${product._id}`}>
                <CardMedia
                    // style={{ height: 0, paddingTop: "56.25%" }}
                    style={{ height: 0, paddingTop: "100%" }}
                    image={product.description}
                    title={product.title}
                />

                <CardContent className="card-content">
                    <Typography
                        className="product-title"
                        gutterBottom
                        color="primary"
                        component="h4"
                        variant="body2"
                    >
                        {product.title}
                    </Typography>
                    <Typography
                        className="product-caption"
                        variant="caption"
                        component="p"
                        color="textSecondary"
                    >
                        Tersisa {product.qty} buah
                    </Typography>
                </CardContent>

                <CardActions className="card-action">
                    <Grid
                        container
                        // spacing={2}
                        // style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 16 }}
                        alignContent="space-between"
                        >
                        <Grid item xs={6} sm={6} lg={12} xl={6}>
                            <Typography
                                className="product-price"
                                variant="button"
                                color="error"
                                component="p"
                                >
                                Rp. {product.price}
                            </Typography>
                        </Grid>
                        {/* <Grid kitem xs={6} sm={6} lg={6} xl={6} align="right">
                            <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            href="#"
                            startIcon={<AddShoppingCartIcon />}
                            >
                            Buy
                            </Button>
                        </Grid> */}
                    </Grid>
                </CardActions>

            </ButtonBase>
        </Card>
      ) : null}
    </>
  );
};

export default Product;
