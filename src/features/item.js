
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addItem,
    buyItem,
    selectAgoraItems,
    updatePrice
} from './storeSlice'

export function Item(props) {
    const dispatch = useDispatch();
    const { item } = props



    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-2-202207_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1662129019563"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {item.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {item.price}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Category: {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    onClick={() => dispatch(buyItem({ name: item.name }))}>
                    Buy</Button>
                <Typography variant="body2" color="red">
                    Only {item.inventory} left in stock!
                </Typography>
            </CardActions>
        </Card>
    );
}