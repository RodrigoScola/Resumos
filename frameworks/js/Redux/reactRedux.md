#react #redux #javascript 
installing react redux   
     npm install react-redux

the provider component
     gives the components of an application access to the redux store without the need to pass the store directly to the react components 
          through props, to implement it, you wrap the App tag in <Provider> and pass the store through the store prop
               <Provider store={store}>
               <App />
               </Provider>

selectors 
     for each react component you need to define which data from the store that component needs access to. this can be done with selector functions
     a selector is a pure function that selects data from the redux store state.
     
useSelector hook
     returns data from the redux store using selectors
     subscribes a child component of <Provider /> to changes in the store. react will re-render the component if the data from the selector changes
     you call the useSelector inside a component and assign the returned value to a variable
          export const useSelectorFunc = () => {
               const variableName = useSelector(selector);
               return (<p>{variableName}</p>)
          }
     you can use useSelector from props too
          export const useSelectorFunc = props => {
               const variableName = useSelector(props.selector);
          }

useDispatch 
     without the react-redux library, you need to create a reference to store.dispatch and pass it through the applications props. with react-redux
     you can now access this reference from each component with useDispatch()
          import { useDispatch } from 'react-redux'

          const dispatch = useDispatch();
          dispatch({type:'hello there'});
     the useDispatch hook allows you to dispatch actions from any component that is a descendent of the <Provider> component, avoiding 
          passing a reference to store.dispatch through props that avoids drilling (the process of passing a prop through multiple components and not using the prop in the middle, just on the final component)

okay so i think that i got it now, took some time to realise it but i think i got it now, codecademy doesnt do a goood job of it
     first you create a <Provider> in the index.js and add a prop called store and that prop is your main store, that is the thing that you are always referencing when you do something
     
     so you first select the things that you want to alter, kinda like altering something inside the setState
          const selectingSomething = array => {
               return array.filter(thing => thing.iDontWant != thing)
          } 
          you can do it that way, but if you do it that way, if that stuff changes that will not be re-rendered
          so you use useSelector and you combine the two
               const selectedStuff = useSelector(selectingSomething);
          and using useDispatch(), you can dispatch something without making a store first, that will dispatch to every component, without the need to do props like a sniper against 10000 gallons of water, it will go through every one of them
          after you did the dispatch() then you do the action that you want, then you use the selector that you want to do the action to




installing redux toolkit 
     npm install @reduxjs/toolkit
     
createSlice 
     instead of adding logic and reducers and stuff, you can use createSlice() ;
     it has one parameter, an object with some properties
          name,
          initialState,
          reducers 

but what does it return?
     with the template above, it would return 
          name: 'name',
          reducer: (state,action) => newState,
          actions: {
               thing1: payload => ({type: 'thing1',payload}),
               thing2: payload => ({type: 'thing2',payload}),
          }
     so if you were to console.log an action it would be like this
          console.log(slicename.actions.thing1('walk the dog'));
          // {type: "thing1", payload: "walk the dog"};
     you could destructure that object too 
          const {thing1,thing2} = sliceName.actions;
     
redux toolkit has an configureStore() that simplifies the store setup process 