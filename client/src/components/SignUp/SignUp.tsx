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
  Grid,
  CardHeader,
} from "@material-ui/core";
import PaymentForm from "./PaymentForm";
import PersonalForm from "./PersonalForm";
import AddressForm from "./AddressForm";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "inline-block",
      flexGrow: 1,
      margin: "50px",
    },
    card: {
      width: 500,
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
    button: {
      margin: "0 10px",
    },
    inputList: {
      padding: "50px",
    },
    textField: {
      flexBasis: 200,
    },
    header: {
      backgroundColor: theme.palette.primary.main,
    },
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
    postcodes: "",
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
      postcodes,
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
      postcodes,
    };
    console.log(values);
  };

  // Proceed to next step
  nextStep = (e: React.MouseEvent) => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Proceed to prev step
  prevStep = (e: React.MouseEvent) => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
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
        return <PaymentForm handleChange={this.handleChange} values={values} />;
      case 2:
        return <AddressForm handleChange={this.handleChange} values={values} />;
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

  // Handle fields change
  handleChange = (name: any, caseIndex: number) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    this.setState({ [name]: e.target.value } as Pick<State, keyof State>);
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
      postcodes,
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
      postcodes,
    };
    return (
      <React.Fragment>
        <main className={classes.root}>
          <Card className={classes.card}>
            <Typography variant="h5" color="primary" align="center">
              Sign up
            </Typography>
            <CardContent>
              <Stepper nonLinear activeStep={step}>
                {stepName.map((label: string, index: number) =>
                  this.getStep(label, index),
                )}
              </Stepper>
              <Grid container spacing={16}>
                {this.getStepContent(step, values, classes)}
                <Grid item container justify="center" xs={12}>
                  {step === this.state.totalStep ? (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={this.handleSubmit}
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={this.nextStep}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  )}
                  {step !== 0 ? (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={this.prevStep}
                      className={classes.button}
                    >
                      Back
                    </Button>
                  ) : null}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SignUp);
