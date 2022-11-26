import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Item } from './item';
import {
    selectAgoraItems,
} from './storeSlice'

function AgoraItems() {
    const items = useSelector(selectAgoraItems);
    return items.map(item => <Item item={item} />)
}

export default AgoraItems;