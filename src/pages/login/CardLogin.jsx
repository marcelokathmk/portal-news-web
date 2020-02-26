import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
      marginTop: 100,
      minWidth: 600    
    }
});

export default props => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            {props.children}
        </Card>
    )
}