import * as React from 'react';
import {
    AppBar,
    Button,
    Card,
    CardContent, CardHeader,
    createStyles,
    TextField,
    Theme, Toolbar, Typography,
    withStyles,
    WithStyles
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
    nextStep: any,
    handleChange: any,
    values: any
}

class PersonalForm extends React.Component<Props> {
    continue = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {classes, values, handleChange} = this.props;

        return (
            <main className={classes.root}>
                <Card className={classes.card}>
                    <AppBar position="static" color="secondary">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                Personal Information
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <CardContent>
                        <TextField
                            id="username"
                            label="Username"
                            name="username"
                            value={values.username}
                            onChange={handleChange('username')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="password"
                            label="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange('password')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="full_name"
                            label="Full Name"
                            name="full_name"
                            value={values.full_name}
                            onChange={handleChange('full_name')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="email"
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange('email')}
                            margin="normal"
                        />
                        <br/>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={this.continue}>
                            Continue
                        </Button>
                    </CardContent>
                </Card>
            </main>
        )
    }
}

export default withStyles(styles)(PersonalForm);
