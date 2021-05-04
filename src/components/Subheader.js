import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import '../App.css'
const useStyles = makeStyles((theme) => ({
    main:{
        position: 'relative',
        background: '#273D49CC',
    },
    buttonpredict:{
        backgroundColor:'#97a1a9',
        border: '0.1rem solid #97a1a9',
        fontSize:'0.8rem',
        color:'white',
        margin:'1.2rem',
        left: '15px',
        textAlign: 'left',
        display:'inline',
        padding:'0.5rem 0.5rem',
        maxWidth:'5rem',
        minWidth:'5rem',
        borderRadius:'0.4rem',
        boxShadow:'none',
        '&:hover': {
            backgroundColor:'#14aff1',
            border: '0.1rem solid #14aff1',
        }
    },
    buttonview:{
        border: '0.1rem solid #6b7984 !important',
        fontSize:'0.8rem',
        color:'white',
        margin:'0.5rem',
        borderColor:'white',
        display:'inline',
        padding:'0.5rem 0.5rem',
        maxWidth:'12rem',
        minWidth:'12rem',
        borderRadius:'0.4rem',
        backgroundColor:'transparent',
        color:'#818d96',
        boxShadow:'none',
        '&:hover': {
            backgroundColor:'#14aff1',
            border: '0.1rem solid #6b7984',
        }
    },
    buttonoption:{
        position:'relative',
        fontSize:'0.8rem',
        display:'inline',
        padding:'0.5rem 0.5rem',
        maxWidth:'5rem',
        minWidth:'5rem',
        borderRadius:'0.4rem',
        backgroundColor:'transparent',
        margin: '0.5rem',
        border: '0.1rem solid #6b7984 !important',
        color:'#818d96',
        boxShadow:'none',
        textTransform:'capitalize',
        '&:hover': {
            backgroundColor:'#14aff1',
        }
    },
    ico:{
        position:'absolute',
        fontSize:'1.2rem',
        color:'#818d96',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingRight: '0.3rem',
        fontWeight:'bold',
    },
  
    fieldcontainer:{
        display:'inline-block',
        border: '0.1rem solid #305468',
        borderRadius:'0.4rem',
        backgroundColor: '#283a46',
        minWidth:'5rem',
        maxHeight:'2.6rem',
        minHeight:'2.6rem',
      
    },
    field:{
        backgroundColor:'transparent',
        maxWidth:'17rem',
        fontSize:'0.8rem', 
        minWidth:'17rem',
        maxHeight:'2.6rem',
        minHeight:'2.6rem',
        border:'none',
        paddingLeft:'1rem',
        left:'40px',
        '&:focus': {
            backgroundColor:'transparent',
            outline:'none',
        }
    },
   
    secondoption:{
        position:'absolute',
        right:0,
    }
  }));


export default function Subheader() {
    const classes = useStyles();
    return (
        <div>
        <Grid container className={classes.main}
        direction="row"
        justify="space-between">
        <Grid item lg={3} md={3} sm={3}>
        <Button variant="contained" className={classes.buttonpredict}>Predict</Button>
        <Button variant="contained" className={classes.buttonview}>View Correspondence</Button>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6}
        className={classes.secondoption} >
          <Button variant="contained" className={classes.buttonoption}><AddIcon className={classes.ico} />Add</Button>
          <Button variant="contained" className={classes.buttonoption}><EditIcon className={classes.ico} />Edit</Button>
          <Button variant="contained" className={classes.buttonoption} style={{maxWidth:'6rem',minWidth:'6rem',}} ><RemoveIcon className={classes.ico} /><span style={{marginRight:'0.7rem'}} > </span>Delete</Button>
          
          <div className={classes.fieldcontainer}>
          <input className={classes.field} type="text" placeholder="Search by Invoice Number" />
          <i class="fa fa-search icon"  aria-hidden="true"></i>
   </div>
        </Grid>
        </Grid>
        </div>
    )
}
