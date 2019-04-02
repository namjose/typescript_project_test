import * as React from 'react';
import {Card, CardContent, WithStyles} from "@material-ui/core";
import PaymentForm from "./PaymentForm";
import PersonalForm from "./PersonalForm";


interface Props {
}

interface State {
    step: number,
    username: string,
    password: string,
    full_name: string,
    email: string,
    card_number: number,
}

class SignUp extends React.Component<Props, State> {
    state = {
        step: 1,
        username: "",
        password: "",
        full_name: "",
        email: "",
        card_number: 0,
    }

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Proceed to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = (name: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({[name]: e.target.value} as Pick<State, keyof State>);
    }

    render() {
        const {step} = this.state;
        const {username, password, full_name, email, card_number} = this.state;
        const values = {username, password, full_name, email, card_number};

        switch (step) {
            case 1:
                return (
                    <PersonalForm
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PaymentForm
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            default:
                return <div>Hello World</div>;
        }
    }
}

export default SignUp;