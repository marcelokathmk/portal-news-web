import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default props => {
    
    return (
        <Dialog open={props.open}>
            <DialogTitle>{props.text}</DialogTitle>
            <DialogActions>
                {props.showOk ? <Button onClick={props.handleDialogOk} color="primary">Ok</Button> : ''}
                {props.showCancelar ? <Button onClick={props.handleDialogCancelar} color="primary">Cancelar</Button> : ''}
            </DialogActions>
        </Dialog>
    )
}