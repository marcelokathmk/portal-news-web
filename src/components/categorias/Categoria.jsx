import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { obterCategorias } from './CategoriaAction'

class Categoria extends Component {

    constructor(props){
        super(props);
        this.state = {
            categorias: [],
            categoria: undefined
        }
    }

    componentDidMount(){
        obterCategorias().then((resp) => {
            this.setState({
                categorias : resp.data
            })
        })
    }

    onChangeTexto(value){
        this.setState({categoria: value});
    }

    render(){
        const { categorias } = this.state;

        return (
            <Autocomplete
                id="free-solo-demo"
                onChange={(event, value) => this.props.obterCategoriaSelecionada(value)}
                freeSolo
                options={categorias}
                getOptionLabel={option => option.descricao}
                renderInput={params => (
                    <TextField {...params} label="Categoria" margin="normal" variant="outlined" />
                )}
            />
        )
    }
}

export default Categoria;