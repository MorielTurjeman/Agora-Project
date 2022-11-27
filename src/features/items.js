import React, { useState } from 'react';
import { Item } from './item';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import './items.css'
import {
    addItem,
    buyItem,
    selectAgoraItems,
    updatePrice
} from './storeSlice'


const ariaLabel = { 'aria-label': 'description' };


function AgoraItems() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [inventory, setInventory] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch();



    const items = useSelector(selectAgoraItems);
    return <div>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <Input placeholder="Product Name" inputProps={ariaLabel} onChange={e => setName(e.target.value)} value={name} />
            <Input placeholder="Price" inputProps={ariaLabel} onChange={e => setPrice(e.target.value)} value={price} />
            <Input placeholder="Description" inputProps={ariaLabel} onChange={e => setDescription(e.target.value)} value={description} />
            <Input placeholder="Category" inputProps={ariaLabel} onChange={e => setCategory(e.target.value)} value={category} />
            <Input placeholder="Inventory" inputProps={ariaLabel} onChange={e => setInventory(e.target.value)} value={inventory} />
            <Button size="small"
                onClick={() => dispatch(addItem({ name, price, category, description, inventory }))}>
                Add Item</Button>
        </Box>

        <div className='items'>{items.map(item => <Item item={item} />)}</div>
    </div>
}

export default AgoraItems;