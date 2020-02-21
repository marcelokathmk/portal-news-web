import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import SearchField from './Search';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Menu() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container direction="row" justify="center" alignItems="flex-start">
                    <Button color="inherit">Últimas Notíticas</Button>
                    <Button color="inherit">Últimas Notíticas</Button>
                    <Button color="inherit">Últimas Notíticas</Button>
                    <Button color="inherit">Últimas Notíticas</Button>
                    <Button color="inherit">Últimas Notíticas</Button>
                    <Button color="inherit">Últimas Notíticas</Button>
                </Grid>
                <SearchField />
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit">
                    <AccountCircle />
                </IconButton>  
            </Toolbar>
        </AppBar>
    )
}