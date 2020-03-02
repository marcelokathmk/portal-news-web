import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { obterTags } from './TagActions';

class Tag extends Component {

    constructor(props){
        super(props);
        this.state = {
            tags: []
        }
    }

    componentDidMount(){
        obterTags().then((resp) => {
            this.setState({
                tags : resp.data
            })
        })
    }

    render(){
        const { tags } = this.state;

        return (
            <Autocomplete
                id="free-solo-demo"
                onChange={(event, values) => this.props.obterTagsSelecionadas(values)}
                freeSolo
                multiple
                options={tags}
                getOptionLabel={option => option.descricao}
                renderInput={params => (
                    <TextField {...params} label="Tag" margin="normal" variant="outlined" />
                )}
            />
        )
    }
}

export default Tag;