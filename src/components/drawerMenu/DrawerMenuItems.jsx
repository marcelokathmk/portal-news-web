import React, { Component } from 'react';
import { obterMenusUsuario } from './DrawerMenuActions';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import IconMenu from '../IconMenu';
import Link from '@material-ui/core/Link';

class DrawMenuItems extends Component {

    constructor(props){
        super(props);
        this.state = {
            menus: []
        }
    }

    componentDidMount(){
        const { usuario } = this.props;
        var perfis = [];
        usuario.perfis.map((perfil) => (
            perfis.push(perfil.id)
        ));
        this.props.obterMenusUsuario(1, perfis).then((resp) => {
            this.setState({
                menus: resp.payload.data
            });
        });
    }

    render(){
        const { menus } = this.state;
        return(
            <List>
                {
                  menus.map((menu) => (
                      <Link href={menu.url} color="inherit">
                        <ListItem button key={menu.id} >
                            <ListItemIcon><IconMenu icone={menu.icone}/></ListItemIcon>
                            <ListItemText primary={menu.descricao} />
                        </ListItem>
                      </Link>
                  ))
                }
            </List>
        )
    }
} 

const mapDispatchToProps = dispatch => bindActionCreators({obterMenusUsuario}, dispatch)
const mapStateToProps = state => ({menus: state.menus.menusUsuario})
export default connect(mapStateToProps, mapDispatchToProps)(DrawMenuItems)