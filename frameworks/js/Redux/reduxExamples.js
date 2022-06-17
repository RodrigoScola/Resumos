// // this is the global state holder
// const initialState = {
// 	number: 2,
// 	toggle: false,
// 	sentence: "this is my sentence",
// 	stuff: ["garbage truck", "music", "songs"],
// 	teaPot: {
// 		color: "pink",
// 		big: true,
// 		currentDrink: "coffee",
// 	},
// }
// // to alter that state, you need to do an action, every action has a type and a payload
// const action = {
// 	type: "todos/addTodo",
// 	payload: "do the dishes",
// }
// // to do anything to the initial state, actions must be in a reducer
// const todoReducer = (action = { type: "", payload: "" }, state = initialState) => {
// 	console.log(action)

// 	switch (action.type) {
// 		case "todos/addTodo":
// 			return { ...state, todo: action.payload }
// 		case "toggle":
// 			return state.toggle ? true : false
// 		default:
// 			return state
// 	}
// }
// // its not the job of the reducer to change info, that is the job of the store
// // reducers should only calculate the new state value based on the state and action arguments
// // they are not allowed to modify the existing state
// // they must not do any async logic

// // stores
// // initializes state with default value
// // when user interacts with the view, action is dispatched to store
// // the dispatched action and the current state are combined to determine the next state

// // redux api
// //  npm install redux
// // import { createStore } from "redux"
// const createStore = require("redux").createStore

// // you create a store with the reducer attached to it
// const store = createStore(todoReducer)

// // dispatch action to the store
// // the initialstate is in the reducer function when you declare state
// console.log(store.dispatch({ type: "toggle" }))
// // this will modify the store state but not the initial state
// // get the store state
// store.getState()

// // action creators
// // instead of using the entire obj of {type} devs use a function
// const toggle = () => {
// 	return { type: "toggle" }
// }
// store.dispatch(toggle())

// // when state changes you can see that
// // store.subscribe returns an unsubscribe function that you can activate it to stop
// const reduxSub = () => {
// 	const reactToChange = () => {
// 		console.log(`the state was changed`)
// 	}
// 	const unsubscribe = store.subscribe(reactToChange)
// 	store.dispatch({ type: "hello there" })
// 	// the state was changed
// 	store.dispatch({ type: "hello there" })
// 	// the state was changed
// 	unsubscribe()
// 	store.dispatch({ type: "hello there" })
// 	// nothing is displayed
// }
// reduxSub()
// // to render the store in react

// const renderApp = () => {
// 	return (
// 		<>
// 			<StoreComponent state={store.getState()} />
// 		</>
// 	)
// }
// const StoreComponent = ({ state }) => {
// 	const upButton = () => {
// 		store.dispatch({ type: "increment" })
// 	}
// 	const downButton = () => {
// 		store.dispatch({ type: "decrement" })
// 	}
// 	return (
// 		<>
// 			<h1>{state}</h1>
// 			<button onClick={upButton}>upButton</button>
// 			<button onClick={downButton}>downButton</button>
// 		</>
// 	)
// }
// // prob dont need that subscribe, can do without in a react app
// const unsubscribe = store.subscribe(renderApp)

// // strategies for complex state

// // redux is best suited to serve complex states and different objs

// // slices
// // in a redux app, the props in initialstate are called slices
// const initialState = {
// 	allFoods: [],
// 	favoriteFoods: [],
// 	searchTerm: "",
// }
// // actions and payloads for complex state
// // make the actions return the type and payload by param in the function, that can reduce errors in the later run and you dont need to type that much

// // reducer composition
// // when the store gets too big, your reducer might too, so you can use multiple reducers
// const initialTodos = [
// 	{ id: 0, text: 'learn redux', completed: false },
// 	{ id: 1, text: 'build a redux app', completed: true },
// 	{ id: 2, text: 'do a dance', completed: false },
// ];
// const todoReducer = (state = initialTodos = [{id = 0, text: 'hello there' , completed: false}], action = {type: '', payload: ''}) => {
// 	switch (action.type) {

// 		case 'todos/toggle':
// 			return state.map(value => {
// 				return value.completed = true;
// 			})
// 		case 'todos/addTodo':
// 			return [...state, action.payload];
// 		default:
// 			return state
// 		}
// }
// const initialFilter = 'show_incomplete';
// const filterReducer = (filter = initialFilter) => {
// 	switch (action.type) {
// 		case 'filter/setFilter':
// 			return action.payload
// 		default:
// 			return filter
// 	}
// }

// const rootReducer = (state = {}, action) => {
// 	const nextState = {
// 		todos: todoReducer(state.todos, action),
// 		filter: filterReducer(state.filter,action)
// 	}
// 	return nextState
// }
// const store = createStore(rootReducer);
// // instead of creating the root reducer and the state {} you can just call combineReducers(reducers) instead
// const { combineReducers } = require("redux")
// const reducers = {
// 	todos: todoReducer,
// 	filter: filterReducer,
// }
// const rootReducer = combineReducers(reducers)

// /* file structure
// 	src /
// 		index.js
// 		app/
// 			store.js
// 		features/
// 			featureA/
// 				featureA.js
// 			featureB/
// 				featureB.js
// */
