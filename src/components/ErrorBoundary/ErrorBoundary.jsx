import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log error to an error reporting service
    console.error("Caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>
          <h2>Something went wrong! 😢</h2>
          <p>Don't worry, we are working on it.</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
