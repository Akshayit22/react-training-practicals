import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props: {}) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: any) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1 className='flex flex-col p-2 m-2 border-white border-2 rounded-md w-[80vw] md:w-[30vw] space-y-4'>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;

function logErrorToMyService(error: any, errorInfo: any) {
    throw new Error("Function not implemented.");
}
