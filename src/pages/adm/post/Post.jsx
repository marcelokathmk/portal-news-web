import React, { Component } from 'react';
import BotoesAcao from '../../../components/botoesAcao/BotoesAcao';
import Categorias from '../../../components/categorias/Categoria';
import Tag from '../../../components/tags/Tag';

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

    receberTagsSelecionadas(values){
        console.log('Receber tags');
        console.log(values);
    }

    render (){
        return(
            <div>
                <BotoesAcao 
                    onClickNovo={() => this.onClickBotaoNovo()} 
                    onClickSalvar={() => this.onClickBotaoSalvar()} 
                    onClickExcluir={() => this.onClickBotaExcluir()} />
                <Categorias obterCategoriaSelecionada={(value) => this.receberCategoriaSelecionada(value)} />
                <Tag obterTagsSelecionadas={(values) => this.receberTagsSelecionadas(values)} />
            </div>
        )
    }
}

export default Post;