import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
      margin: 10    
    }
});

export default props => {
    const classes = useStyles();
    return (
        <TextField type={props.type} label={props.label} onChange={event => props.callbackParent(event.target.value)} className={classes.root} />
    )
}