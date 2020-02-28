import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AllInboxIcon from '@material-ui/icons/AllInbox';

export default props => {
    
    switch(props.icone){
        case 'AccountCircle':
            return (<AccountCircleIcon/>)
        case 'SupervisedUserCircle':
            return (<SupervisedUserCircleIcon/>)
        case 'AllInbox':
            return (<AllInboxIcon/>)
        default:
            return (<SettingsApplicationsIcon/>)
    }
}