#redux 
to add a middleware to a store, you use the function applyMiddleware
     const store = createStore(
          reducer1,reducer2,reducer3,
          applyMiddleware(
               middleware1, middleware2, middleware3
          )
     )
     once middleware is added to a redux project, calls to dispatch pipeline. this means that any actions will be passed from middleware to middleware before they hid an apps reducers
     middlewares conform to a different function syntax, it looks like this
          const exampleOfMiddleWare = storeAPI => next => action => {
               return next(action)
          }

thunking
     one of the most flexible and popular way to add asynchronous functionality to redux involves using thinks,
     a thunk is a higher order function that wraps computation we want to perform later, 
          const add = (a,b) => {
               return () => {
                    return a + b
               }
          }
     its useful because they allow us to bundle up bits of computation we want to delay into packages that can be passed around in code
          const dellayedAddition = add(2,2);
          dellayedAddition() // returns 4;
     calling the function does not cause the addition to happen, it returns a function that will perform the action when called,

you can call asynchronous code on thunking
     const returnedThunk = (url) => {
          return async (url) => {
               const data = await fetch(url);
               if (data.ok) {
                    return data.json();
               }}}

redux thunking
     const reduxThunking = () => {
          return async (dispatch,getState) => {
               const payload = await fetch(url);
               dispatch({type: "someTipe",payload: payload});
          }}

managing promise lifecycle actions
     in a perfect world that function would always work, however were not in a perfect world so we have to work around it, this is how the function would be in the real worls
     const reduxThunking = () => {
          return async (dispatch, getState) => {
               dispatch({type:'requestPending'});
               try {
                    const payload = fetch(url);
                    dispatch({type: 'users/addUser',payload: payload})
               } catch (err) {
                    dispatch({type: 'users/error',payload: err})
               }}}

createAsyncThunk is a function with two parameters - an action type string and an async callback, it generates a thunk action creator that will run the provided callback
     const reduxThunking = createAsyncThunk('users',async (arg,thunkAPI) => {
          const response = await fetchUser(arg)
          return response.json()
     })
passing arguments to thunks
     since the createAsyncThunk only accepts 2 arguments, but what if you want to do more? well you can destructure as an object
          const reduxThunking = createAsyncThunk('users',async ({firstName,lastName},thunkAPI) => {
               //perform actions
          });
if you pass the action type string 'resourceType/actionType' to createAsyncThunk, it will produce these three action types
     resourceType/actionType/pending;
     resourceType/actionType/fulfilled;
     resourceType/actionType/rejected;

