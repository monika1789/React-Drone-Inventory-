import React from 'react'
import { useDispatch,useSelector,useStore } from 'react-redux'
import {useForm} from 'react-hook-form'
import {chooseName, chooseAddress, chooseDescription, choosePhoneNumber, choosePrice} from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';


interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    name:string;
    address: string;
    description: string;
    phone_number:string;
    price:string;
}

export const ContactForm = (props:CarFormProps) => {
    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<CarState>(state => state.name);
    const {register, handleSubmit} = useForm ({ })

   const onSubmit = (data:any, event:any) => {
       console.log(props.id)
       if (props.id!){
           server_calls.update(props.id!, data);
           console.log(`Updated:${data} ${props.id}`);
           console.log(data);
           setTimeout( () => {window.location.reload()},1000);
           event.target.reset();
       } else {
           dispatch(chooseName(data.name));
           dispatch(chooseAddress(data.address));
           dispatch(chooseDescription(data.description));
           dispatch(choosePhoneNumber(data.phone_number));
           dispatch(choosePrice(data.price));
           server_calls.create(store.getState());
           setTimeout( () => {window.location.reload()},1000 )
       }
   }

return (
    <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name"> Name </label>
                    <Input {...register('name')} name="name" placeholder='Name'/>
                </div>
                <div>
                    <label htmlFor="email">Address</label>
                    <Input {...register('address')} name="address" placeholder='Address'/>
                </div>
                <div>
                    <label htmlFor="email">Description</label>
                    <Input {...register('description')} name="description" placeholder='Description'/>
                </div>
                <div>
                    <label htmlFor="phone_number">Phone Number</label>
                    <Input {...register('phone_number')} name="phone_number" placeholder='Phone Number'/>
                </div>
                <div>
                    <label htmlFor="address">Price</label>
                    <Input {...register('price')} name="price" placeholder='Price'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
  )
}
