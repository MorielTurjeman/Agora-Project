
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Hidden from '@mui/material/Hidden';
import {
    addItem,
    buyItem,
    selectAgoraItems,
    updatePrice
} from './storeSlice'


export function Item(props) {
    const dispatch = useDispatch();
    const { item } = props
    const [newPrice, setNewPrice] = useState("")


    return (


        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
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
                <TextField
                    fullWidth
                    label="New price"
                    id="fullWidth"
                    onChange={e => setNewPrice(e.target.value)}
                    value={newPrice}
                    required
                    helperText="Enter new price"

                />
                <Button size="small"
                    onClick={() => dispatch(updatePrice({ name: item.name, price: newPrice }))}>
                    Edit Price</Button>
                <Typography variant="body2" color="red">
                    Only {item.inventory} left in stock!
                </Typography>
            </CardActions>
        </Card >
    );
}