import * as React from "react";
import { TextField, Grid } from "@material-ui/core";

interface Props {
  handleChange: any;
  values: any;
  classes: any;
}

class AddressForm extends React.Component<Props> {
  render() {
    const { values, handleChange, classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <TextField
            required
            fullWidth
            className={classes.textField}
            variant="outlined"
            id="unit"
            name="unit"
            label="Unit"
            value={values.unit}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            required
            fullWidth
            className={classes.textField}
            variant="outlined"
            id="street"
            name="street"
            label="Street"
            value={values.street}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            className={classes.textField}
            variant="outlined"
            id="suburb"
            name="suburb"
            label="Suburb"
            value={values.suburb}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="state"
            name="state"
            label="State"
            value={values.state}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="postcodes"
            name="postcodes"
            label="Postcode"
            value={values.postcodes}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default AddressForm;
