import React, { Component } from 'react';
import BotoesAcao from '../../../components/botoesAcao/BotoesAcao';
import Categorias from '../../../components/categorias/Categoria';

class Post extends Component {

    onClickBotaoNovo(){
        console.log('Clique botão Novo.')
    }

    onClickBotaoSalvar(){
        console.log('Clique botão salvar.')
    }

    onClickBotaExcluir(){
        console.log('Clique botão excluir.')
    }

    receberCategoriaSelecionada(value){
        console.log('Receber categoria');
        console.log(value);
    }

    render (){
        return(
            <div>
                <BotoesAcao 
                    onClickNovo={() => this.onClickBotaoNovo()} 
                    onClickSalvar={() => this.onClickBotaoSalvar()} 
                    onClickExcluir={() => this.onClickBotaExcluir()} />
                <Categorias obterCategoriaSelecionada={(value) => this.receberCategoriaSelecionada(value)} />
            </div>
        )
    }
}

export default Post;