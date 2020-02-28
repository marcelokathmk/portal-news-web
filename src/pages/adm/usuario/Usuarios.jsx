import React, { Component } from 'react';
import BotoesAcao from '../../../components/botoesAcao/BotoesAcao';

class Usuarios extends Component {

    onClickBotaoNovo(){
        console.log('Clique botão Novo.')
    }

    onClickBotaoSalvar(){
        console.log('Clique botão salvar.')
    }

    onClickBotaExcluir(){
        console.log('Clique botão excluir.')
    }

    render(){
        return (
            <BotoesAcao 
                onClickNovo={() => this.onClickBotaoNovo()} 
                onClickSalvar={() => this.onClickBotaoSalvar()} 
                onClickExcluir={() => this.onClickBotaExcluir()} />
        )
    }
}

export default Usuarios;