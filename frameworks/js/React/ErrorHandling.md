#error 
creating an error boundry 
     they are react components that 
          wrap around other components
          render their children if no errors are detected 
          render a fallback ui if an error is detected 
          log the error in some way if an error is detected 

{
     class ErrorBoundry extends React.Component {
          constructor(props) {
               super(props);
          }
          render() {
               return this.props.children
          }
     }
     <ErrorBoundry>
          <ErrorProneComponent />
     </ErrorBoundry>
}
ErrorBoundry is a class component. This is intentional, error boundraries components must be created as class components because react components become error boundraries once they implement one or both of the lifecycle methods "static getDerivedStateFromError() and/or componentDidCatch().

rendering a fallback ui 
     to make the error actually protect the application you need to 
          identify when an error has occured 
          store the error internally
          render a fallback ui 
     to keep track of an error is present, add a state in the constructor
          {
               super(props);
               this.state = {error: null}
          }
     the state starts with error having a null value 
     to update the value when an error occurs you define the lifecycle method 
          {
               constructor(props) {
                    ...
               }
               static getDerivedStateFromError(error) {
                    return {error}
               }
               render() {
                    ...
               }
          }
     the lifecycle is invoked after an error has been thrown by a descendant component 
          {
               render() {
                    if (this.state.error) {
                         return (
                              <>
                                   <h2>An error was detected: {this.state.error.message}</h2>
                              </>
                         )
                    }
                    return this.props.children
               }
          }

logging errors 
     error loggin is implemented in an error boundary using the componentDidCatch method 
          {
               componentDidCatch(error, errorInfo) {
                    console.log(error)
                    console.log(errorInfo.componentStack)
               }
          }
          componentStack is useful as it contains stack trace showing the story of rendered components that led to the error 

resetting the component 
     how do you recover the broken component beyond refreshing the page 
     the ErrorBoundry determines whether to render the child component or the fallback ui based on its own internal this.state.error, if we change this error state value back to null, the ErrorBoundry component will re-render along with the child component wrapped by the error boundary
     {
          constructor(props) {
               this.reset = this.reset.bind(this)
          }
          reset() {
               this.setState({error: null})
          }
          render() {
               return <>
                    <button onClick={this.reset}>Reset</button>
                         </>
          }
     }

react-error-boundary package

const ErrorFallback({error, resetErrorBoundary}) {
     return <div>
     <h2>AnError was detected</h2>
     <button onClick={resetErrorBoundary}>Reset</button>
     </div>
}
const App = () => {
     return <ErrorBoundary onError={logError} FallbackComponent={ErrorFallback}>
          <Component />
     </ErrorBoundary>
}

what if you want to pass props in fallback components 
{
     const ErrorFallback = ({error, resetErrorBoundary, newProp}) => {
          ...handle new props and errors
     }
     <ErrorBoundary FallbackComponent={(props) => 
                         <ErrorFallback {...props} newProp={newProp}}>
          ...Component
     </ErrorBoundary>
     
}
---------------------------------------------------------------------------------------------------------------------------------------------------------
Error boundaries can catch errors that occur during rendering, in lifecycle methods, and in constructors of the whole tree below them. Error boundaries do not catch errors for event handlers, asynchronous code, server side rendering, or errors thrown in the error boundary itself (rather than its children).
------------------------------------------------------------------------------------------------------------------------------------------------
