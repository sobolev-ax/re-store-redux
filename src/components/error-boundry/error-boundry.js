import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(err) {
    console.error('ErrorBoundry: ', err);
    this.setState({
      hasError: true,
    });
  };

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />
    }

    return this.props.children;
  };
};
