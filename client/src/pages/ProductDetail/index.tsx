import * as React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    createStyles,
    Theme, Typography,
    withStyles,
    WithStyles
} from '@material-ui/core';

import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";


const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: '50px',
            display: 'inline-block',
            textAlign: 'center'
        },
        media: {
            width: 400,
            height: 200,
        },
        card: {
            maxWidth: 300,
        }
    })


interface Props extends WithStyles<typeof styles> {
}

interface State {
    product_name: string,
    quantity: number,
    price: number,
    description: string,
    img: string
}

class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            product_name: "",
            quantity: 0,
            price: 0,
            description: "",
            img: ""
        }
    }

    onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    handleChange = (name: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({[name]: e.target.value} as Pick<State, keyof State>);
    }

    render() {
        const {classes} = this.props;
        return (
            <main className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <CardMedia
                            className={classes.media}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" color='primary'>
                                NMD
                            </Typography>
                            <Typography component="p">
                                Description
                            </Typography>
                        </CardContent>
                        <Button variant='outlined' color='secondary'>Add Cart</Button>
                    </CardContent>
                </Card>
            </main>
        )
    }
}

export default withStyles(styles)(Index);