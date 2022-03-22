import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice ({
 name: "root",
 initialState: {
   name: 'Name',
   address: 'Address',
   description: 'Description',
   phone_number: 'Phone Number',
   price: 'Price',
 },
 reducers: {
     chooseName: (state,action) => {state.name = action.payload },
     chooseAddress: (state,action) => {state.address = action.payload},
     chooseDescription: (state,action) => {state.description = action.payload},
     choosePhoneNumber: (state,action) => {state.phone_number = action.payload},
     choosePrice: (state,action) => {state.price = action.payload},
     
 }
})
export const reducer = rootSlice.reducer;
export const {chooseName, chooseAddress, chooseDescription, choosePhoneNumber, choosePrice} = rootSlice.actions;