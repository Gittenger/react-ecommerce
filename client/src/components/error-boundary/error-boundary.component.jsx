import React from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    //process error
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/3suxlvm.png" />
          <ErrorImageText>
            Oops! We tripped up.
            <br />
            <br />
            You had been told you should always check your shoes before getting
            up from the bleachers. Freshman were known to walk under them and
            tie peoples’ shoes together.
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    } else return this.props.children;
  }
}

export default ErrorBoundary;
