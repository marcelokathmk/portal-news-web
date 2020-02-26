import React, { Component  } from 'react';
import { connect } from 'react-redux'
import { executeLogin, obterUsuarioLogado } from './LoginAction';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Field from '../../components/Field';
import CardLogin from './CardLogin';
import Button from '../../components/Button';
import ProgressLine from '../../components/ProgressLine';
import Dialog from '../../components/Dialog';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            dialogTexto: '',
            dialogErro: false,
            progressVisible: false,
            usuario: '',
            senha: ''
        }
    }

    onChangeUsuario(value){
        this.setState({usuario: value});
    }

    onChangeSenha(value){
        this.setState({senha: value});
    }

    onClickLogin(){
        this.setState({progressVisible: true});
        this.props.executeLogin(this.state.usuario, this.state.senha).then((res) => {
            this.props.obterUsuarioLogado(this.props.authorization).then((ret) => {
                this.props.history.push("/dashboardadm");
            });
        }).catch((error) => {
            console.log(error)
            this.showMessageDialog('Usuário/Senha inválidos! Tente novamente.');
        });
    }

    showMessageDialog(message){
        this.setState({
            progressVisible: false,
            dialogErro: true,
            dialogTexto: message
        });
    }

    onClickDialogOk(){
        this.setState({
            dialogErro: false
        })
    }

    render(){
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <CardLogin>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Autenticação</Typography>
                    </CardContent>
                    <CardContent>
                        <Grid container direction="column">
                            <Field label="Usuário" type="text" callbackParent={(value) => this.onChangeUsuario(value)} />
                            <Field label="Senha" type="password" callbackParent={(value) => this.onChangeSenha(value)} />
                        </Grid>                
                    </CardContent>
                    <CardActions>
                        <Grid container direction="row">
                            <Button variant="contained" color="primary" text="Login" callbackParent={() => this.onClickLogin()} />
                            {this.state.progressVisible ? <ProgressLine /> : ''}
                            <Dialog 
                                open={this.state.dialogErro} 
                                text={this.state.dialogTexto} 
                                showOk={true}
                                handleDialogOk={() => this.onClickDialogOk()} />                            
                        </Grid>
                    </CardActions>
                </CardLogin>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({usuarioLogado: state.login.usuarioLogado, authorization: state.login.authorization})
const mapDispatchToProps = dispatch => bindActionCreators({executeLogin, obterUsuarioLogado}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);