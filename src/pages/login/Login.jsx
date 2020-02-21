import React, { Component  } from 'react';
import { connect } from 'react-redux'
import { executeLogin, obterUsuarioLogado } from './LoginAction';
import { bindActionCreators } from 'redux'

class Login extends Component {

    componentWillMount(){
        this.props.executeLogin('marcelokath', '123').then((res) => {
            this.props.obterUsuarioLogado(this.props.authorization);
        });
    }

    render(){
        const { usuario } = this.props.usuarioLogado;
        return (
            <div>
                Login / {usuario}
            </div>
        )
    }
}

const mapStateToProps = state => ({usuarioLogado: state.login.usuarioLogado, authorization: state.login.authorization})
const mapDispatchToProps = dispatch => bindActionCreators({executeLogin, obterUsuarioLogado}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);