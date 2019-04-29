import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  createStyles,
  Step,
  StepButton,
  Stepper,
  Theme,
  Typography,
  withStyles,
  WithStyles,
  Grid
} from "@material-ui/core";
import PaymentForm from "./PaymentForm";
import PersonalForm from "./PersonalForm";
import AddressForm from "./AddressForm";

const styles = (theme: Theme) =>
  createStyles({
    card__header: {
      backgroundImage:
        "linear-gradient(to right top, #5217ef, #671ced, #7822ea, #8629e8, #9330e6, #a633df, #b738d8, #c43fd2, #d648c6, #e454bc, #ee63b4, #f472ae)",
      padding: "5px"
    },
    root: {
      display: "inline-block",
      flexGrow: 1,
      margin: "50px"
    },
    card: {
      width: 500
    },
    textField: {
      // marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: "100%"
    }
  });

interface Props extends WithStyles<typeof styles> {}

interface State {
  totalStep: number;
  step: number;
  username: string;
  password: string;
  full_name: string;
  email: string;
  card_number: string;
  expDate: string;
  cvv: string;
  unit: number;
  street: string;
  suburb: string;
  state: string;
  postcodes: string;
}

const stepName = ["Personal Form", "Payment Form", "Address Form"];

class SignUp extends React.Component<Props, State> {
  state = {
    totalStep: stepName.length - 1,
    step: 0,
    username: "",
    password: "",
    full_name: "",
    email: "",
    card_number: "",
    expDate: "",
    cvv: "",
    unit: 0,
    street: "",
    suburb: "",
    state: "",
    postcodes: ""
  };

  handleSubmit = (e: React.FormEvent) => {
    const {
      username,
      password,
      full_name,
      email,
      card_number,
      expDate,
      cvv,
      unit,
      street,
      suburb,
      state,
      postcodes
    } = this.state;
    const values = {
      username,
      password,
      full_name,
      email,
      card_number,
      expDate,
      cvv,
      unit,
      street,
      suburb,
      state,
      postcodes
    };
    console.log(values);
  };

  // Proceed to next step
  nextStep = (e: React.MouseEvent) => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Proceed to prev step
  prevStep = (e: React.MouseEvent) => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Get Step Content
  getStepContent(step: number, values: any, classes: any) {
    switch (step) {
      case 0:
        return (
          <PersonalForm
            handleChange={this.handleChange}
            values={values}
            classes={classes}
          />
        );
      case 1:
        return (
          <PaymentForm
            handleChange={this.handleChange}
            values={values}
            classes={classes}
          />
        );
      case 2:
        return (
          <AddressForm
            handleChange={this.handleChange}
            values={values}
            classes={classes}
          />
        );
      default:
        return null;
    }
  }

  getStep(label: string, index: number) {
    return (
      <Step key={label}>
        <StepButton onClick={this.handleStep(index)}>{label}</StepButton>
      </Step>
    );
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleStep = (index: number) => (e: React.MouseEvent) => {
    this.setState({ step: index });
  };

  render() {
    const { classes } = this.props;
    const { step } = this.state;
    const {
      username,
      password,
      full_name,
      email,
      card_number,
      expDate,
      cvv,
      unit,
      street,
      suburb,
      state,
      postcodes
    } = this.state;
    const values = {
      username,
      password,
      full_name,
      email,
      card_number,
      expDate,
      cvv,
      unit,
      street,
      suburb,
      state,
      postcodes
    };
    return (
      <main className={classes.root}>
        <Card className={classes.card}>
          <Grid className={classes.card__header}>
            <Typography variant="h6" color="secondary" align="center">
              SIGN UP
            </Typography>
          </Grid>
          <CardContent>
            <Stepper nonLinear activeStep={step}>
              {stepName.map((label: string, index: number) =>
                this.getStep(label, index)
              )}
            </Stepper>
            <Grid container spacing={16}>
              {this.getStepContent(step, values, classes)}
              <Grid item container justify="center" xs={12}>
                {step !== 0 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.prevStep}
                  >
                    <Typography variant="button" color="secondary">
                      BACK
                    </Typography>
                  </Button>
                ) : null}
                {step === this.state.totalStep ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    <Typography variant="button" color="secondary">
                      SUBMIT
                    </Typography>
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.nextStep}
                  >
                    <Typography variant="button" color="secondary">
                      NEXT
                    </Typography>
                  </Button>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </main>
    );
  }
}

export default withStyles(styles)(SignUp);
