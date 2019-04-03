import * as React from "react";
import { AppBar, TextField, Grid } from "@material-ui/core";

interface Props {
  handleChange: any;
  values: any;
}

class PaymentForm extends React.Component<Props> {
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="card_number"
            label="Card Number"
            value={values.card_number}
            onChange={handleChange("card_number")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="expDate"
            label="Expiry Date"
            value={values.expDate}
            onChange={handleChange("expDate")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="cvv"
            label="CVV"
            value={values.cvv}
            onChange={handleChange("cvv")}
            margin="normal"
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentForm;
