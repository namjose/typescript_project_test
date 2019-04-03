import * as React from "react";
import { TextField, Grid } from "@material-ui/core";

interface Props {
  handleChange: any;
  values: any;
}

class AddressForm extends React.Component<Props> {
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="unit"
            label="Unit"
            value={values.unit}
            onChange={handleChange("unit")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="street"
            label="Street"
            value={values.street}
            onChange={handleChange("street")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="suburb"
            label="Suburb"
            value={values.suburb}
            onChange={handleChange("suburb")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="state"
            label="State"
            value={values.state}
            onChange={handleChange("state")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="postcodes"
            label="Postcode"
            value={values.postcodes}
            onChange={handleChange("postcodes")}
            margin="normal"
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default AddressForm;
