import * as React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {
  Card,
  CardContent,
  createStyles,
  Grid,
  IconButton,
  InputAdornment,
  Theme,
  Typography,
  withStyles,
  WithStyles,
  Button,
  TextField
} from "@material-ui/core";
import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { logIn } from "../actionCreators/authActions";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import { AuthState, AuthActionTypes } from "../types/types";
import { ApplicationState } from "../reducers";
import { Redirect } from "react-router-dom";

const styles = (theme: Theme) =>
  createStyles({
    card__header: {
      backgroundColor: theme.palette.primary.main,
      padding: "5px"
    },
    root: {
      display: "inline-block",
      flexGrow: 1,
      margin: "50px",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center"
    },
    textField: {
      marginRight: theme.spacing.unit,
      width: "50%"
    },
    card: {
      width: 500
    }
  });

interface Props extends WithStyles<typeof styles> {
  history: any;
  auth: AuthState;
  handleSubmit: typeof logIn;
}

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

class LogIn extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      console.log("Chua dien du thong tin");
    } else {
      this.props.handleSubmit();
      this.props.history.push("/");
      // const auth = { username, password };
    }
  };

  render() {
    const { handleChange, onSubmit } = this;
    const { showPassword } = this.state;
    const { classes } = this.props;
    return (
      <main className={classes.root}>
        <Card className={classes.card}>
          <Grid className={classes.card__header}>
            <Typography variant="h6" color="secondary" align="center">
              LOG IN
            </Typography>
          </Grid>
          <CardContent>
            <form onSubmit={onSubmit}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <TextField
                    required
                    variant="outlined"
                    id="username"
                    name="username"
                    label="Username"
                    className={classes.textField}
                    value={this.state.username}
                    onChange={handleChange}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    variant="outlined"
                    id="password"
                    name="password"
                    label="Password"
                    className={classes.textField}
                    type={showPassword ? "text" : "password"}
                    value={this.state.password}
                    onChange={handleChange}
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid container item justify="center" xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    <Typography variant="button" color="secondary">
                      LOG IN
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  handleSubmit() {
    dispatch(logIn());
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LogIn)
);
