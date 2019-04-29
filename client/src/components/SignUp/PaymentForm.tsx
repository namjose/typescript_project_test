import * as React from "react";
import { AppBar, TextField, Grid } from "@material-ui/core";

interface Props {
  handleChange: any;
  values: any;
  classes: any;
}

class PaymentForm extends React.Component<Props> {
  render() {
    const { values, handleChange, classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            id="card_number"
            name="card_number"
            label="Card Number"
            value={values.card_number}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            id="expDate"
            name="expDate"
            label="Expiry Date"
            value={values.expDate}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            id="cvv"
            name="cvv"
            label="CVV"
            value={values.cvv}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentForm;
