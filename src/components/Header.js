


import React from 'react'
import {Grid} from '@material-ui/core';
import theme, { pxToRem } from '../utils/theme';
import { makeStyles } from '@material-ui/core';
import '../App.css'
import logo from "./../logo.svg"
import comp from "./../Group 20399.svg"
const useStyles = makeStyles((theme) => ({
logo1:{
    padding:pxToRem(0),
    margin:pxToRem(0),
    width:pxToRem(350),
    height:pxToRem(50),
    lineHeight:pxToRem(50),
    position:'absolute',
    textAlign: 'left',
    top: '20px',
    left: '30px',
},
logo2:{
    padding:pxToRem(0),
    margin:pxToRem(25),
    width:pxToRem(250),
    height:pxToRem(50),
    lineHeight:pxToRem(50),
    left: '0px',
},
navbar:{
    minheight:pxToRem(50),
    maxheight:pxToRem(50),
    lineHeight:pxToRem(50),
    position:'relative',
    marginTop:pxToRem(0),
    backgroundColor:'#39495e',
    paddingLeft:pxToRem(20),
    paddingRight:pxToRem(20),
    overflow:'hidden',
},
heading:{
    color:'white',
    fontSize:'1.2rem',
    marginTop: '8px',
    marginBottom: '15px',
    marginLeft: '30px',
    textAlign: 'left',
},
}))
const Header=()=>{
    const classes = useStyles();
return(
<div >
 <Grid container className={classes.navbar}>
     <Grid item xl={4} lg={4} md={4} sm={4} direction="row" justify="center" alignItems="center">
     <img src={comp} alt="LOGO" className={classes.logo1} />
     </Grid>
     <Grid item xl={4} lg={4} md={4} sm={4}  container direction="row" justify="center" alignItems="center">
     <img src={logo} alt="LOGO" className={classes.logo2} />
     </Grid>
     <Grid item xl={4} lg={4} md={4} sm={4}>
     </Grid>
     <Grid item xl={4} lg={4} md={4} sm={4}>
    <p className={classes.heading}>Invoice List</p>
</Grid>
 </Grid>
</div>
)
}

export default Header;