import * as React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            flexGrow: 1,
            flexDirection: "column",
            alignContent: 'center',
            justifyContent: 'center',
            paddingTop: theme.spacing.unit,
        },
        button: {
            margin: theme.spacing.unit,
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 200,
        },
    })


interface Props extends WithStyles<typeof styles> {}
interface State {
    username: string,
    password: string,
}

class LogIn extends React.Component<Props, State>{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [name]: event.target.value } as Pick<State, keyof State>);
    };

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <AppBar
                    title="Login"
                />
                <TextField
                    id="username"
                    label="Username"
                    className={classes.textField}
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                />
                <br/>
                <Button variant="contained" color="primary" className={classes.button}>
                    Log In
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(LogIn);