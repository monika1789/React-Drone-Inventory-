import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import {Navbar} from '../Navbar'
import { Link } from 'react-router-dom';




interface Props {
    title: String
}

const useStyles = makeStyles ({
   background: {
       
       backgroundImage: `linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)`,
       width: '100%',
       height: '90%',
       backgroundPosition: 'center',
       position:'absolute',
       zindex: -1,
   },
main_text: {
    textAlign: 'center',
    position: 'relative',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   
},
button_style: {
   textDecoration: 'none',
   color:'black',
},
})

export const  Home = (props:Props) => {
const classes = useStyles();
  return (
    <>
    <Navbar/>
    <div className={`${classes.background}`}>
    
        <div className={classes.main_text}>
          <h1>{props.title}</h1>
        
        <Button>
            <Link to='/car' className={classes.button_style}> Click Here to open the Inventory</Link>
        </Button>
        </div> 
    </div>
    </> 
  )
}
