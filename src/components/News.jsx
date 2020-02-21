import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './UnitCard';

const useStyles = makeStyles({
    root: {
      marginTop: 10    
    }
});

export default function News() {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.root} >
            <Card/>
            <Card/>
            <Card/>        
        </Grid>
    )
}