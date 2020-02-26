import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      margin: 15,
      width: 150,
      height: 50   
    }
});

export default props => {
    const classes = useStyles();
    return (
        <Button variant={props.variant} color={props.color} className={classes.root} onClick={props.callbackParent}>{props.text}</Button>
    )
}