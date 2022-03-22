import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { ContactForm } from '../ContactForm';


const columns:GridColDef[] = [
    {field: 'id', headerName:'ID', width:90,hide: true},
    {field: 'name', headerName:'Name', flex:1},
    {field: 'address', headerName:'Address', flex:2},
    {field: 'description', headerName:'Description', flex:1},
    {field: 'phone_number', headerName:'Phone Number', flex:1},
    {field: 'price', headerName:'Price', flex:1},
]
 
interface gridData {
    data : {
        id? :string
    }
}

export const DataTable = () => {
    let { carData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel,setSelectionModel] = useState<any>([])
    
    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        console.log(gridData.data.id);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

    // console.log(gridData.data.id!);
    // console.log(`testing for data ${contactData}`)

return (
    <div style={{ height: 400, width: '100%' }}>
        <h2>Car Inventory</h2>

    <DataGrid rows={ carData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
    onSelectionModelChange={ (item) => {
        setSelectionModel(item)
                    // console.log(item)
      }}
    />

    <Button onClick={handleOpen}>Update</Button>
    <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

    {/* Dialog pop-up */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Car Inventory {selectionModel}</DialogTitle>
        <DialogContent>
            <DialogContentText>Update Car Inventory</DialogContentText>
                <ContactForm id={selectionModel!}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color="primary">Done</Button>
        </DialogActions>
    </Dialog>
        
    </div>
   )
}