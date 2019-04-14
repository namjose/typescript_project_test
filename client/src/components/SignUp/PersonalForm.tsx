import * as React from "react";
import { IconButton, InputAdornment, TextField, Grid } from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";

interface Props {
  handleChange: any;
  values: any;
  classes: any;
}

interface State {
  showPassword: boolean;
}

class PersonalForm extends React.Component<Props, State> {
  state = {
    showPassword: false,
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { showPassword } = this.state;
    const { classes, values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            id="username"
            label="Username"
            name="username"
            value={values.username}
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
        <Grid item xs={6}>
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            type={showPassword ? "text" : "password"}
            id="password"
            label="Password"
            name="password"
            value={values.password}
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
        <Grid item xs={12}>
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            id="email"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>email</Icon>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            id="full_name"
            label="Full Name"
            name="full_name"
            value={values.full_name}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>star</Icon>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default PersonalForm;
