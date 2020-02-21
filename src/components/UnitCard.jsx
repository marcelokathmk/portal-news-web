import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: '32%',
      minHeight: 200,
      margin: 5    
    },
    media: {
        minHeight: 200  
    },
});

export default function UnitCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Title goes here
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Subtitle goes here
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}