import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AgoraItemModel } from './agoraItem'
const initialState = {
    agoraItems: [
        new AgoraItemModel("Iphone 12", 100, "Brand new iphone", "Mobile phone", 10).toJson(),
        new AgoraItemModel("Pixel 7", 200, "Brand new Pixel purple cover", "Mobile phone", 10).toJson(),
        new AgoraItemModel("Irobot", 120, "Brand new Irobot TX20", "Vaccume cleaner", 10).toJson()
    ]

};


export const agoraItemsSlice = createSlice({
    name: 'agoraItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.agoraItems.push(action.payload)
        },
        buyItem: (state, action) => {  //buyItem({name: "Iphone 12"})
            const itemToBuy = state.agoraItems.find(item => item.name === action.payload.name)
            if (itemToBuy && itemToBuy.inventory > 0)
                itemToBuy.inventory -= 1
        }
    },
    updatePrice: (state, action) => { //updatePrice({name: 'Iphone 12', price: 5})
        const itemToUpdate = state.agoraItems.find(item => item.name === action.payload.name)
        itemToUpdate.price = action.payload.price
    }


})
export const selectAgoraItems = (state) => state.agora.agoraItems;
export const { addItem, buyItem, updatePrice } = agoraItemsSlice.actions;






export default agoraItemsSlice.reducer;