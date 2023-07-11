#react 
reactRouter
     installation 
          npm install react-router-dom // for websites
          npm install react-router-native // for apps
     when starting a new project, you need to determine which type of router to use, for browser based projects,
     <BrowserRouter> and <HashRouter> components. the BrowserRouter should be used when you have a server that will handle dynamic request
     while the hashRouter should be used for static websites (where the server can only respond to request for files that it knows about);

history
     each router creates a history object, it keeps tracks of the current location and re-render the website whenever that changes,
rendering a <Router>
     router components only expect to receive a single child element (like the <App />)

the <app> is where you put all of your components (dont worry about the site design, that will change later);
     
     function App () {
          return (<div>
          <Main />
          <LoginPage />
          <ProfilePage />
          </div>)
     }

     reactDOM.render(<HashRouter><App /></HashRouter);

Path
     a <Route> expects a path prop, which is a string that describes the pathname that the route matches
          <Route path='/profilePage' />
creating the routes
     First you add a <Switch>
     and in the Route component you have some properties that you have to add
          path <- the routes path 
          /path:number <- a profile for a player
          component <- the component that you want to render 
          render <- a function that returns a react element, will be called when the path matches. this is similar to component, but
               is useful for inline rendering and passing extra props to the element
          children <- a funciton that returns a react element, unlike the render and component, this will always be rendered regardless of wheter the routes path matches the current location     
an example of that can be
     //in the index.js
          ReactDOM.render(<HashRouter><App/></HashRouter>,document.getElementById('app'));
     // in the app 
          import React from 'react'
          import {Switch, Route} from 'react-router-dom'
          const app = props => {
               return (
                    <Switch>
                    <Route exact path='/' component={Home} /> // for the main page
                    <Route path='/loginPage' component={LoginPage} /> 
                    <Route path='/helloThere' render={props => {(
                         <Page {...props} data={extraProps}
                    )}} />
                    </Switch>

               )
          }
Path parameters
     sometimes theres variables within a pathname that we want to capture 
          the :number param means that the part of the pathname that comes after the /main/ will be captured and stored as 
          match.params.number. for example, the pathname /roster/6 will generate a params object
               {number: '6'};
               