#frontEnd 
 Front End Developtment Libraries
 Using Bootstrap
 to automatically make your site responsive
    wrap your whole html in one element & use the class container-fluid
    <div class='container-fluid'>
    </div>
to automatically make an image responsive
    use the class img-responsive
        it will automatically adjust the width of your image to the size of your screen
to center your text on your div element, use the class text-center
buttons     
    to make a button 
        <button class='btn btn-default'> Like </button>
    to make the button as wide as the entire page
        <button class='btn btn-block>Like </button>
    to make the color of your button as the primary color of your site
        <button class='btn btn-block btn-primary>Like </button>
            this will by the default make the color blue
    to give the danger color 
        <button class='btn btn-block btn-danger'>Delete</button>
            this will give the default color of yellow
columns 
    col-md-* class,
    col == columns
    md == medium
    * == number of how many columns wide the element sould be
    xs (extra small)
    to make a row
        create a div with the class row
        then create a div for each of the elements with the text col-xs-*
        <div class='row'>
            <div class='col-xs-4>
                <button classs='btn btn-primary btn-block>Like</button>
            </div>
        </div>
you can use the same color of the primary color of your site aswell as with the text 
    class='text-primary'
to alter the color of your text using the main colors of your site
    <p>hello there my name is <span class='text-primary'>Silber</span></p>
instead of doing all the header stuff, you can just 
    put the this you want as the head in a div with the row class
    bootstrap uses a responsive grid system, with relative width
        if you want to put 2 items in a line , you first use the element on the left with both of the numbers of collumns as the right one
to add an icon
    first add this to your project
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    then use the i and a class with the name of the icon you want
        <i class='fas fas-thumbs-up'></i>
    you can also use the span element with it
to make your buttons all responsive
    add them to a div with a row class
        each of the elements has to have a div element with a class='col-xs-totalNum'
to make your inouts support Bootstrap
    <input class='form-control'>
the well class adds a rounded border around an element with a gray background and some padding 
    creates a box
JQUERY
to add javascript to the site
    first add a <script> </script>
    inside the script add this 
        $(document).ready(function() {
        });
    without this, the code may run before the html is rendered
all jQuery functions start with a $
jQuery often selects an html element with selector, then does something to that element
to make all of the things with the same class do something at once
    $('element').addClass('animated bounce');
        this will make all the elements with the same name bounce once the site is rendered
    if you want to do it to all the classes 
        $('.classname').addClass('animated fadeOut');
    if you want to do to a single id 
        $('#idname').addClass('animated shake');
            this will make that the id element shakes  
but this will only add classes to elements, to remove them, use the .removeClass
to add a css element JQUERY has you covered, just use 
    $('id').css('color','blue');
you can adjust things for the user 
    to disable something
    $('id').prop('disabled',true);
the .prop lets you adjust the properties of elements;
you can alter the content of your site by using .html
    $('id').html('<em>target4</em>');
you can remove an element from the page entirely by using .remove
    $('id').remove();
to change thigs you can use the .appendTo();
    $('id').appendTo('#rightwall');
you can also clone stuff by using the .clone
    $('id').clone();
instead of using the actual element, you can transform the parent of that element
every html element has a parent element from which it inherits properties
    For example. the h3 element has the parent element of <div class='container-fluid'> which is itself the parent of body
JQUERY has a function called parent() that allows you to access the parent of whichever element youve selected
    heres an example of how you would use the parent() function if you wanted to give the parent element of the left-well element a color background of blue
        $('#left-well').parent().css('background-color','blue');
    in the same example that you can target the parent, you can target the children by using the .children();
        $('#right-well').children().css('color','orange');
you dont need to always have an id to make the target execute what you want it to do
    you can use the number of the child for example
        there are 3 buttons and you want to animate just the last one, you dont need to create an id to animate, you can just use
            $('.target:nth-child(3)').aaddClass('animated bounce');
    you can do the same for odd or even numbers 
            $('.target:odd').addClass('animated shake');
            $('.target:even').addClass('animated shake');

SASS 
    storing a variable with sasss
        in javascript you use let, const, var, in sass you use the $ + variable name;
in sass you can create functions with parameters and then include them later;
    to create a mixin, you 
        @mixin name (parameters) {
             @mixin border-radius ($radius) {
        -webkit-border-radius : $radius;
        -moz-border-radius : $radius;
        -ms-border-radius : $radius;
        border-radius : $radius;
        }
    to call the mixin
        div {
            @include name(parameters);
        }
you can use if statements by adding the @
    @if () {
    }
you can add a for loop
    @for $i from 1 to 12 {
    }
    @for $i from 0 through 12 {
        .col-#{$i} {width 100%/12 * $i;}
    }
    the #{$i} part is the syntax to combine a variable i with text to make a string. when the sass file is converted to css looks like this
        .col-1 {
            width : 8.33%
        }
        .col-2 {
            width: 16%
        }
        .col-3 {
            width:28%
        }
        to do a forEach you use
            @each
              @each $bg in blue,black,red {
             .#{$bg}-bg {background-color: $bg;}
            }
    to do while loops
        @while 
        $x: 1;
        @while $x <= 15 {
            .times-#{$x} {font-size: 15 * $x}
            $x: $x + 1;
        }
Partials in Sass are separate files that hold segments of css code.these are imported and used in other sass files.this is a great way to group similar code into a module
and keep it organized;
    names for partials start with the underscore character, which tells sass it is a small segment of css and not to convert it into a css file. also sass files end with 
    the .scss file extension. to bring the code in the partial into another sass file, use the @import directive
     @import 'file';
you can copy the property form one element to another using the @extended notation;
    .panel {
        background-color: blue;
        font-size: 34px;
        height: 354px;
    }
    .bigger-panel {
        @extend .panel;
        width: 150px;
    }
REACT 

to write javascript code within jsx, include the code you want to be treated as javascript with curly braces {}
It's worth noting that under the hood the challenges are calling ReactDOM.render(JSX, document.getElementById('root')).
 This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its 
 own DOM to optimize updating only specific parts of the actual DOM.
nested JSX must return a single element.
valid JXS 
    <div>
        <p> hello there </p>
        <p> my name is susanne</p>
        <p> im 34 years old</p>
    </div>
invalid JSX 
        <p> hello there </p>
        <p> my name is susanne</p>
        <p> im 34 years old</p>
to comment something in JSX 
    {/* hello there */};
ReactDom offers a simple method to Render React elements to the Dom witch looks like this
    ReactDOM.render(componentToRender, targetNode)
        the first argument is the React element or component that you want to render and the second argument is the Dom node that you want to render the component to.
        ReactDOM.render must be called after the JSX element declarations
    document.getElementById() selects the dom node to render them to.
        ReactDOM.render(JSX,document.getElementById('challenge-node'));
you dont use Class in JSX, you use classname;
to use ReactDOM.render(componentName,document you want to render on);
    use document.getElementById('id');
you can add functions by doing this 
you can return strings of text too 
    cons Mycomponent = function() {
        return <div> hello there </div>
    }
The other way to define a React component is with the es6 class syntax.
    class Kitten extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (<h1>hello there</h1>);
        }
    this creates an es6 class Kitten which extends the React.component class. So the kitten class now has access to many useful React features, such as local state and lifecycle hooks
    best practice is creating a component with super and pass props to both, mas sure the component is initialized properly.
    to initialize classes, you <className />
when is a variable you dont need to use <componentName />
when is a function, you do 
you can add parameters to the class you just created, then you just need to add the parameters later
    conts CurrentDate = (props) => (<div><p>The current date is: {props.date}</p></div>);
    class Calendar extends React.Component {
        constructor (props {
            super(props)
        }
        render() {
            return (
                <div>
                <h3> what date is it? </h3>
                <currentDate date={Date()}/>
                </div>
            )
        }
    }
    this render the current date
To dinamically render date use Date()
the same thing that you can do with strings (.join,.split....) you can do with the props
you can add default props to elements by using .default props
    const shoppingCart = (props) => { return (<div><p>hello there</p></div> )}
    shoppingCart.defaultProps = {items : 0}
if you can expect a data to be in a array, which is then passed to a component as a prop. you can set propTypes on your component to require the data to be of type array.
Mycomponent.propTypes = {handleClick: PropTypes.func.isRequired};
    PropTypes.func checks that handleClick is a function, addin isRequired tells React that handleClick is a required property for that component.
What if the child component that you are passing a prop to is an es6 class component, rather than a stateless functional component? the es6 class component uses 
    a slightly different convention to acess props.
when you are coding a property of a component inside a component, use the notation this.
state 
    a stateless functional component is any function you write which aceppts props and returns JSX. a stateless component, on the other hand, is a class that extends 
    React.component, but does not use internal state
    A Stateful component is a class component that does maintain its own internal state. you may see stateful components referred to simply components or React components
    State consist of any data your application needs to know about.
        you want your apps to respond to state changes and present an updated ui when necessary. You create state in React component by declaring a state property on
        the cmponent class in its constructor. this initializes the component with state when its created. the state property must be set to a Javascript object.
            this.state = {
                state property
            }
    Once you define a components initial state, you can display any part of it in the ui that is rendered. if a component is stateful, it will always have access to the Data
    in its render() method. you can acess the data with this.state.
        id you want to acess a state value within the return of the render method, you have to enclose the value in curly braces
        state is one of the most powerful features of components in React. it allows you to track important data in your app and render a ui in response to changes in this 
        data. if your data changesm your ui will change. React uses whe is called a Virtual Dom, to keep track of changes behind the scenes. when state data updates, it triggers
        a re-render of the components using that data - including child components that received the data as a prop. react updates the actual Dom, but only where necessary. 
        this means you dont have to worry about changing the Dom. you simply declare what the ui should look like.
        There is another way to acess state in a component. in the render() method, before the return statement, you can write javasctipt directly. for example, you could
        declare functioons, acess data from state or props, perform computations on this data, and so on. then you can assign any data to variables, which you have acess to in the 
        return statement
        There is a way to change the components state. react provides a method for updating component state called setState. you call the setState method within your component class 
        like so: this.setState(); passing an object with key-value pairs. the keys are your state properties and the values are updated state data. for instance, if we were storing
        a username in state and wanted to update it, it would look like this    
            this.setState({
                username:'Lewis'
            })
        React expects you to never modify state directly, instead always use the this.setState() when state changes occur. also you should note that react may batch multiple 
        state changes in order to improve performance. what this means is that state updates through the setState method can be asynchronous. there is an alternative syntax for the 
        setState method which provides a way around this problem.
            this.state = {
                name: 'Initial state'
            }
            this.handleClick = this.handleClick.bind(this);
            handleClick() {
                this.setState({
                    name: 'react is cool'
                })
            }
            render() {
                <div>
                <button onClick={this.handleClick}>clickme</button>
                <h1>{this.state.name}</h1>
                </div>
            }
            this will alter the state when button is pressed;
        a class method typically need to use this keyword so it can access properties on the class (such as state and props) inside the scope of the method. there are a few
        ways to allow your class methods to acess this.
        one common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. if you use 
            this.handleClick = this.handleClick.bind(this)
        for its handleClick method. then when you call a function like this.setState() within your class method, this refers to the class and will not be undefined
to alter something when the user clicks on the object is called onClick();
sometimes the state is asynchronous, this means React may batch multiple setState() calls into a single update. this means you cant rely on the previous value of this.state or this.props when calculating the
    next value, so you should not use code like this
        this.setState({ counter: this.state + this.props.increment});
    instead you should pass setState, a function that allows you to acess state and props. using a function with setState guarantees you are working with the most current values of state and props. this means
    that the above should be written as
        this.setState((state,props) => ({
            counter: state.counter + props.increment
        }));
        you can also use a form withought props if you only need the state;
        this.setState(state => ({
            counter: state.counter + 1
        }));
to bind functions to components (that will later be used outside of the component);
 this.componentName = this.componentName.bind(this);

form control elements for text input, such as input and textarea, maintain their own state in the DOM as the user types. with React, you can move this mutable state into
    a React components state. the users input becomes part of the application state, so react controls the value of that input field. typically, if you have react components
    with input fields the user can type into, it will be controlled input form.
    the code editor has the skeleton of a component called ControlledInput to create a controlled input element. the components state is already initialized with an input
    properly that holds an empty string. this value represents the text a user types into the input field. first, create a method called handleChange() that has a parameters
    event, when the method is called, it receives an event object that contains a string of text from the text from the input element. you can acess this string with 
    event.target.value inside the method. update the input property of the components state with this new string 
to make a controlled input
    class ControlledInput extends React.component {
        constructor(props) {
            super(props);
        this.state {
            input:''
            }
        this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
            this.setState ({
                input: event.target.value
            })
        }
        render () {
            return (
                <div>
                    <input value= {this.state.input} onChange={this.handleChange.bind(this)/>
                    <h1> this is the input</h1>
                    <p>{this.state.input}</p>
                </div>
            )
        }
    }
    first you declare the input state, then you bind the handleChange function to the state,
    then you set the state of the input to the target.value
    then you make the input box and set the value to the default value of string, then when it changes, you call the function so that the current value of input is the strings

to make a submit that takes an input string is almost the same, but you set the value of the input to the value of submit 

to prevent the default value from causing problems on submission, uuse the function .preventDefault on your event
    on the handlesubmit function would be like this 
        handlesubmit(event) {
            event.preventDefault();
            this.setState( {
                input: event.target.value,
                submit: this.state.input
            })
        }
pass state as props to child components
    a common pattern is to have stateful component containing the state important to the app, then that renders child components. you wnt these components to have acess to 
    some pieces of that state which are passed in as props. For example maybe you have an App component that renders a Navbar, among other components in your app, you have
    state that contains a lot of user information, but the navbar only needs acess to the users username so it can display it. you pass that piece fo state to the 
    navbar component as a prop. This patter illustrates some important paradigms in react. the first unidirectional dataflow. state flows in one direction down the tree 
    of your applications components, from the stateful parent components to child components. the child components only receive the state data they need. the second is 
    that complex stateful apps can be broken down into just a few or maybe a single stateful component. the rest of your components simply receive state from the parent as
    props, and render a ui from that state. it begins to create a separation where state management is handled in one part of code an dui rendering in another. this 
    principle of separating state logic form ui logic is one of reacts key principles. when its used correctly it makes the design of complex stateful applications mu
    ch easier to manage 
    or you can just see as a return to a function lulw

    when passing states you use this.props.name

passing a callback as props
    you can pass satte as props to child components, but youre not limited to passing data. you can also pass handler functions or any method thats defined on a react component to a child component. 
    this is how you allow child components to interact with their parent components. you pass methods to a child just like a regular prop. its assigned a name and you have acess to that method name under this.props
    in the child component

use the lifecycle Method componentWillMount
    Reacts components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. these are called lifecycle method, or lifecycle hooksand allow 
    you to catch components at certain points in time. this cam be before they are rendered, before they update, before they receive props, before they unmount, and so on. here is a list of 
    some of the main lifecycle methods: 
    componentWillMount();
    componentDidMount();
    shouldComponentUpdate();
    ComponentDidUpdate();
    componentWillUnmount();

The lyfecucle Method componentDidMount
    most web developers,at some point  need to call an api endpoint to retreive dataif youre working with react, its important to know where to perform this actios
    the best practice with react is to place apicalls or any calls to your server in the lifecycle method componentDidMount() this method is called after a component is 
    mounted to the dom. any calls to setState() will trigger a re-rendering of your component.. when you call an api in this method and set your state with the data that the 
    api returns, it will automatically trigger an update once you receive the data
    
to set a timer, you first use the setTimeout notation, then you add what needs to be done after the timer finishes, then you add in miliseconds the time you want to wait.
    componentDidMount() {
        setTimeout( () => {
            this.setState( {
                activeusers:1254
            })
        }) 
    }
Add event listeners
    the componentDidMount() mehod is also the best place to attach any event listeners you need to add for specific functionality. react provides a synthetic event system behaves
    exactly the same regardless of the users browser - even if the native events may behave differently between different browsers 
    youve already been using some of these synthetic event handlers such as onCLick() react synthetic event system is great to use for most interactions youll manage on dom elements 
    however if you want to attach an event handler to the document or window objects, you have to do this directly

    attach an event listener in the componentDidMount() method for keydown events and have these events trigger the callback handleKeypres(). you can use document.addEventListener() which 
    takes the event (in quotes) as the first argument and the callback as the second argument.
    then in componentWillMount(),remove this same event listener. you can pass the same arguments to document.removeEventListenter(). its good practive to use this lifecycle method to do
    any clean up on react components before they are unmounted and destroyed. removing event listeners is an example of one such clean up action

                class MyComponent extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                message: ''
                };
                this.handleEnter = this.handleEnter.bind(this);
                this.handleKeyPress = this.handleKeyPress.bind(this);
            }
            // Change code below this line
            componentDidMount() {
                document.addEventListener("keydown",this.handleKeyPress)
            }
            componentWillUnmount() {
                    document.removeEventListener("keydown",this.handleKeyPress)
            }
            // Change code above this line
            handleEnter() {
                this.setState((state) => ({
                message: state.message + 'You pressed the enter key! '
                }));
            }
            handleKeyPress(event) {
                if (event.keyCode === 13) {
                this.handleEnter();
                }
            }
            render() {
                return (
                <div>
                    <h1>{this.state.message}</h1>
                </div>
                );
            }
            };

optimize re-renders with shouldComponentUpdate
    so far, if any component receives new state or new props, it re-renders itself and all its children. this is usually okay. but react provides a lifecycle method you can call when child 
    components receive new state or props, and declare specifically if the components should update or not. the method is shouldComponentUpdate(), and it takes nextProps and 
    nextState as parameters
    this method is a useful way to optimize performance. for example the default behaviour is that your comonent re-renders when it receives new props, even if the props havent changed
    you can use shouldComponentUpdate() to prevent this by comparing the props. the method must retirn a boolean value that tells react wheter or not to update the component. you can compare the 
    current props (this.props) to the next props(next.props)to determine if you need to update or not, and return true or false accordingly
introducing inline styles 
    there are other complex concepts that add powerful capabilities to your react code. but you may be wondering about the more simple problem of how to style 
    to add styles you just add {{}} on the style part
you can say an if statement another way, by using the {condition && return} 
    {this.state.display && <h1>Displayed!</h1>}
you can have a key element to each element on your array, when you go render that element, on the map function, add the key keyword
    const renderedArray = array.map(item => <li key={item}>{item}</li>)
    render() {
    return (
        <div>
        <ul>
        {rederedArray}
        </ul>
        </div>
        )
    }
there are to key reasons why rendering on the server may be used in a real world app. first without doing this, without doing this, without
your React apps would consist of a relatively empty html file and a large bundle of javascript when its initially loaded to the browser. this 
may not be ideal for search engines that are tryung to index the content of your pages so people can find you. if you render the initial html
markyp on the server and this to the client, the initial page load contains all of the pages markyp which can be crawled bt search engines. second
this creates a faster initial page load experience because the rendered html is smaller than the javascript code of the entire app . react will
be able to recognize your app and manage it after the initial load

REDUXX

Redux is a state management framework that can be used with a number of different web technologies , including react
in redux there is a single state object thats responsible for the entire state of your application. this means if you had a react app with
10 components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in 
the redux store
    const reducer = () => { return state};
    const store = Redux.createStore(reducer)
you can get the stores current state from 
    const storeCurrentState = store.getState();
to make an action you
    let action = {
        type: 'LOGIN'
    }
    think of redux actions as messengers that deliver information about events happening in your app to the redux store. the store then conducts
    the business of updating state based on the action that occured
After creating an action, the next step is sending the action to the redux store so it can update its state. in redux, you define action
creators to accomplish this. an action creator create object that represent action events
dispatch method is what you use to dispatch actions to the redux store. calling store.dispatch() and passing the value returned from an action 
creator sends an action back to the store.
Recall that action creators return an object with a type property that specifies the action that has occured. then the method dispatches an action
object to the Redux store. Based on the previous challenges example the following lines are equivalent, both dispatch the action of type LOGIN
    store.dispatch(actionCreator());
    store.dispactch({type: 'LOGIN'});
After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a reducer function. 
Reducers in Redux are responsible for the state modifications that take place in response to actions. A reducer takes state and action as arguments, 
and it always returns a new state. It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API 
endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.
Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify 
state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. You'll 
practice this in later challenges.

if you want to handle multiple actions with the same thing, use the action.type switch capabilities
    const authReducer = (state = defaultState, action) => {
        switch(action.type) {
            case 'LOGIN' :
            return {
                auth: true
            }
            case 'LOGOUT':
            return {
                auth: false
            }
        }
    }
a common practice when working with redux is to assign action types as read-only constants, then referrence these constants wherever they are used. you can refactor
the code your`re working with to write the action types as consts declarations
    
another  method you have acess to on redux store object is store.subscribe(). this allow you to subscribe listener functions to the store, which are called whenever an action 
is dispatched against the store. one simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated
    each time that an action is registered on a createStore variable, if you use the store.subscribe(()=> function), that function will run

when your app starts to grow more complex, it may be tempting to divide state into multiple pieces, but remember, all app state is held in a single state object in the store
therefore, redux provides reducer composition as a solution for a complex state model. you define multiple reducers to handle different pieces of your application`s state, then
compose these reducers together into one root reducer. the root reducer is then passed into the redux createStore() method 
in order to let us combine multiple reducers together, redux provides with the combineReducers() method. this method accepts an object as an argument in which you define properties
which associate keys to specific reducer functions. the name you give to the keys will be used by redux as the name for the associated piece of state.
    const rootReducer = Redux.combineReducers({count: counterReducer, auth:authReducer})

if you want to do a function on the store.dispatch you first add the function, then the parameters, then you specify the type that you want it to be  and then what you want it to do

    const notesReducer = (state = 'initialState', action) => {
        switch(action.type) {
            case 'ADD_NOTE':
            return action.prop
            case default :
            return state
        }
    }

    const addNoteText = (note) => {
        return {
            type: 'ADD_NOTE',
            text: note
        }
    }
    cost store = Redux.createStore(notesReducer);
    store.dispatch(addNoteText('hello!))

to apply delays you pass it as an argument to Redux.applyMiddleware(). this statement is then provided as a second optional parameter ti the createStore(). then

there are ways to help enforce state immutability when state is an object. a useful tool for handling objects is the object.assign() takes a target object and source objects and maps properties
from the source objects to the target object. any matching properties are overwritten by properties in the sourece objects. this behaviour is commonly used to make shallow copies of objects by 
passing an empty object as the first argument followed by the objects you want to copy
    const newObj = Object.assign({},obj1,obj2);
    this creates newObj as new obj which contains the properties of ob1 and obj2
    to assign a new prop
        Object.assign({},objName,{key: value})

REACT + REDUXX

