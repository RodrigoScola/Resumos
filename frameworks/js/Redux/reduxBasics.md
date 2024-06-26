#redux 
redux is used with react to manage application state
 installing redux
     npm i redux

one way data flow
     in most applications there are three parts
          state - the current data used in the app
          view - the user interface displayed to users
          actions - events that a user can take to change the state
     the flow of information would go like this 
          the state holds the current data used by the apps components
          the view components display that state data
          when a user interacts with the view like clicking a button the state will be updated to display that new state
     with plain react, these three parts overlap quite a bit. components not only render the user interface but they also may manage their own state.
     when actions that may change the state occur, components need to directly communicate these changes to each other
     redux helps separate the state, the view and actions by requiring that the state be managed by a single source. requests to change the state are sent to this single source by view components in the form of an action,
     any components of the view that would be affected by these changes are informed by this single source. by imposing this structure redux maces our code more readable reliable and maintainable

state     
with redux, a state can be any js type, including number string boolean, array and object
     const state = ['this is state 1','This is state 2','this is state 3']
actions 
     they are a separate components that take the state and transfer it to somewhere else
          const action = {
               type: 'todos/addTodo',
               payload: state
          }
     every action MUST have a type with a string value, it describes the action
     an action has a payload with an obj value
     when an action is generated and notifies other parts of the application, we say that the action is dispatched

reducers
     is a plain js function that defines how the current state and an action are used in combination to create the new state
          heres an example for a todo app
               const toDoReducer = (state = initialState, action) => {
                    switch(action.type) {
                         case 'todos/addTodo': {
                              return [ ...state, action.payload];
                         }
                         case 'todos/removeAll: {
                              return [];
                         }
                         default: {
                              return state
                         }
                    }
               }
     there are a few things about this reducer that are true for all reducers
          its a plain javascript function
          defines the application next state given a current state and a specific action
          it returns a default initial state if no action is provided
rules of reducers   
     they should only calculate the new state value based on the state and action arguments
          there should not be a variable holding the state that you want, what you can do is make another prop on the object that you want to use
     they are not allowed to modify the existing state. instead they mus copu the existing state and make changes to the copied values
          they cant use .push to push to the array, instead they must return [...array, action.newState];
     they must not do any async logic or do anything else than returning a value;
          they cant have operations inside the reducer, they must be on the object
               instead of using this
                    const obj = {
                         type: 'hello there',
                         payload: '2'
                    }
                    const reducer = (obj) => {
                         switch(obj.type) {
                              case 'hello there': {
                                   return obj.payload + Math.random()
                              }
                         }
                    }
               you should use this 
                    const obj = {
                         type: 'hello there',
                         payload: '2' + Math.random(); 
                    }
                    const reducerName = (obj) => {
                         switch(obj.type) {
                              case 'hello there' : {
                                   return obj.payload
                              }
                         }
                    }

store 
     where in js the reducer take place
     the state is set of data values that describes the application it is used to render the user interface (ui)
     users interact with the ui wich dispatch actions to the store. an action is an object that expresses a desired change to the state
     the store generates its next state using a reducer function which receibes the most recent action and the current state as inputs 

instead of calling the reducer everytime you want to use a function, you can use the store
     before the store
          let reducer = reducerFunction(state,{type: 'command',payload:'payload'})
     after the store
          let store = createStore(reducerFunction);
               store.dispatch(action);
creating a store
     importing 
          import { createStore } from 'redux';

the store object returned by the createStore() provides a number function it was created with
store.dispatch() it updates the state, its only argument is an action object, which must have a type prop describing the desired state change
     const action = { type: 'actionDescriptor'};
     store.dispatch(action);
store.getState() returns the current value of the store state.

instead of writing the same code multiple times, you can make a function
     const returnFunction = () => {
          return {type: "typeDescriptor"};
     }
     store.dispatch(returnFunction());

in an application an user triggers an event listener (click, hover...), same thing in redux, actions dispatched to the store can be listended for an responed to using the
     store.subscribe() - accepts one method, a function (listener) that is executed when the store state changes

     const count = () => console.log(store.getState)
     store.subscribe(count) // now everytime theres a change, this function will be called

you can combine reducers with the method combineReducers(reducers) 
     first you create the rootReducer and assign it with the result of the combineReducers
          const reducers = {
               todos: todosReducer,
               filter: filterReducer,
          }
          const rootReducer = combineReducers(reducers);
          const store = createStore(rootReducer);

if the reducers are on different files, you import them and them you put them in an object     
     const obj = {
          reducerA: firstReducer,
          reducerB: secondReducer,
          reducerC: thirdReducer
     }
you can destruct props as a variable in a react component
     const functionName = props => {
          const {propName1,propName2} = props
     }
