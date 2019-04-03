import * as React from 'react';
import {Button, createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: '50px',
        },
        media: {
            width: 50,
            height: 50,
        },
    })

interface Props extends WithStyles<typeof styles> {
}

interface State {
    user: string,
    list_products: string[],
}

let list: string[] = ["Ultraboost", "EQT", "Nike Air Max", "Air", "A", "B"];

class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            user: "namjose",
            list_products: list,
        };
    }

    buildCard = function (str: string, index: number, classes: any): any {
        return (
            <Grid key={index} item xs={3}>
                <Card>
                    <CardContent>
                        <CardMedia
                            className={classes.media}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" color='primary'>
                                {str}
                            </Typography>
                            <Typography component="p">
                                Description
                            </Typography>
                        </CardContent>
                        <Button variant='outlined' color='secondary' href='/productDetail'>Detail</Button>
                    </CardContent>
                </Card>
            </Grid>
        )
    };

    render() {
        const {classes} = this.props;
        console.log(typeof classes);
        return (
            <main className={classes.root}>
                <Typography variant="h4" align="left" color='primary'>ALL PRODUCTS</Typography>
                <br/>
                <Grid container item xs={12} spacing={16}>
                    {this.state.list_products.map((data, index) => this.buildCard(data, index, classes))}
                </Grid>
            </main>
        )
    }
}

export default withStyles(styles)(Index);

