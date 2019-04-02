import * as React from 'react';
import {
    AppBar,
    Button,
    Card,
    CardContent,
    createStyles,
    TextField,
    Theme,
    Toolbar,
    Typography, withStyles, WithStyles
} from "@material-ui/core";


const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'inline-block',
            flexGrow: 1,
            margin: '50px',
        },
        card: {
            width: 600
        }
    })

interface Props extends WithStyles<typeof styles> {
    prevStep: any,
    handleChange: any,
    values: any
}

class PaymentForm extends React.Component<Props> {
    back = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {classes, values, handleChange} = this.props;

        return (
            <main className={classes.root}>
                <Card className={classes.card}>
                    <AppBar position="static" color="secondary">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                Card Information
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <CardContent>
                        <AppBar title="Enter Personal Details"/>
                        <TextField
                            id="card_number"
                            label="Card Number"
                            value={values.card_number}
                            onChange={handleChange('card_number')}
                            margin="normal"
                        />
                        <br/>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={this.back}>
                            Back
                        </Button>
                    </CardContent>
                </Card>
            </main>
        )
    }
}

export default withStyles(styles)(PaymentForm);
