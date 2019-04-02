import * as React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: theme.spacing.unit,
        },
        paper: {
            padding: theme.spacing.unit * 2,
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        card: {
        },
        media: {
            height: 140,
        },
    })

interface Props extends WithStyles<typeof styles> {
}

interface State {
    user: string,
    list_products: string[],
}

let list: string[] = ["Ultraboost", "EQT", "Nike Air Max", "Nike M2K"];

class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            user: "namjose",
            list_products: list,
        };
    }

    buildCard = function (str: string, index: number, props: Props): any {
        const {classes} = props;
        return (
            <Grid key={index} item xs={3}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {str}
                            </Typography>
                            <Typography component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    };

    render() {
        const {classes} = this.props;
        return (
            <main className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="left">ALL PRODUCTS</Typography>
                    </Grid>
                    {this.state.list_products.map((data, index) => this.buildCard(data, index, this.props))}
                </Grid>
            </main>
        )
    }
}

export default withStyles(styles)(Index);

