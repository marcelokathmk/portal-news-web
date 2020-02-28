import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '../Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from '@material-ui/icons/Save';

export default props => {
    const mostrarNovo = props.novoVisivel === undefined || props.novoVisivel;
    const mostrarSalvar = props.salvarVisivel === undefined || props.salvarVisivel;
    const mostrarExcluir = props.excluirVisivel === undefined || props.excluirVisivel
    return (
        <Grid container direction="row" justify="flex-end" alignItems="flex-start">
            { 
                mostrarNovo ? 
                    <Button 
                        variant="contained" color="primary" callbackParent={props.onClickNovo} 
                        startIcon={<AddCircleIcon />} text="Novo" 
                        tamanho={props.tamanho} desabilitado={props.novoDesabilitado} /> : ''
            }
            {
                mostrarSalvar ?
                    <Button variant="contained" color="primary" callbackParent={props.onClickSalvar} 
                        startIcon={<SaveIcon />} text="Salvar" 
                        tamanho={props.tamanho} desabilitado={props.salvarDesabilitado} /> : ''
            }
            {
                mostrarExcluir ?
                    <Button variant="contained" color="secondary" callbackParent={props.onClickExcluir} 
                        startIcon={<DeleteIcon />} text="Excluir" 
                        tamanho={props.tamanho} desabilitado={props.excluirDesabilitado} /> : ''
            }
            
        </Grid>
    )
}