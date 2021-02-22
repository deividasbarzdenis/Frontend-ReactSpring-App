import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import a1 from "../../../assets/img/1.jpg";
import a2 from "../../../assets/img/2.jpg";
import a3 from "../../../assets/img/3.jpg";
import a4 from "../../../assets/img/4.jpg";
import a5 from "../../../assets/img/5.jpg";
import a6 from "../../../assets/img/6.jpg";
import a7 from "../../../assets/img/7.jpg";
import a8 from "../../../assets/img/8.jpg";
import a9 from "../../../assets/img/9.jpg";
import a10 from "../../../assets/img/10.jpg";
import a11 from "../../../assets/img/11.jpg";
import {Collapse} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    media: {
        height: 440,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
    },
    description: {
        fontFamily: 'Nunito',
        fontSize: '1.1rem',
        color: '#ddd',
    }
});

export default function RecipeCard({recipe, checked}) {
    const classes = useStyles();

    return (
        <Collapse
            {... (checked ? {timeout: 1000} : {})}
            in={checked}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={pictures(recipe.id)}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.title}
                    >
                        {recipe.recipeDescription}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.description}
                    >
                        {recipe.directions}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse>
    );
}

const pictures = (inx) => {
    switch (inx) {
        case 1:
            return a1;
        case 2:
            return a2;
        case 3:
            return a3;
        case 4:
            return a4;
        case 5:
            return a5;
        case 6:
            return a6;
        case 7:
            return a7;
        case 8:
            return a8;
        case 9:
            return a9;
        case 10:
            return a10;
        case 11:
            return a11;

        default:
            return a1;
    }
}

