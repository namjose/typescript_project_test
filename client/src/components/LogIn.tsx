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
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "inline-block",
      // flexWrap: 'wrap',
      flexGrow: 1,
      margin: "50px",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
    },
    button: {
      margin: theme.spacing.unit,
      padding: "5px 5px",
      fontWeight: "bold",
    },
    textField: {
      marginRight: theme.spacing.unit,
      width: "50%",
    },
    card: {
      width: 500,
    },
  });

interface Props extends WithStyles<typeof styles> {}

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
      showPassword: false,
    };
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  render() {
    const { handleChange } = this;
    const { showPassword } = this.state;
    const { classes } = this.props;
    return (
      <main className={classes.root}>
        <Card className={classes.card}>
          <Typography variant="h5" color="primary" align="center">
            Log In
          </Typography>
          <CardContent>
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
                    ),
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
                    ),
                  }}
                />
              </Grid>
              <Grid item container justify="center" xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  LOG IN
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </main>
    );
  }
}

export default withStyles(styles)(LogIn);
