import React, {Component} from 'react';
import { render } from '@testing-library/react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    render(){
        if(this.state.hasError)
        return (<h1>Oups!</h1>)
        else
        return this.props.children;
    }

    componentDidCatch(error, info) {
        this.state.hasError = true;
    }
}

export default ErrorBoundary;