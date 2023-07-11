#react #javascript 
jsx elements
     are javascript code that mix html, they are used in react
          const nav = <nav>im a navbar</nav>
you can use javascript objects on jxs elements
     const thing = {
          article: <article></article>,
          header: <header></header>
          h1: <h1></h1>
     }
if you are nesting stuff, you need to use an ()
     const div = (<div><h1>Hello world</h1></div>)
if you are nesting an element, one element needs to be the outer one
     const div = (
                    <p>hello world</p>
                    <p>also hello me</p>
     ) // this will not work because of the outer element rule
     const div = (  <div>
                         <p>Hello world</p>
                    </div>
                    )// this will work because of the outer element rule

you can render a variable in ReactDOM.render(variableName,document.getElementById('app));

one special thing about ReactDOM.render() is that it only updates dom that have changed.
     that means that if you render the exact same thing twice in a row, the second render will do nothing
          const hello = <h1>Hello World</h1>
               ReactDOM.render(hello,document.getElementById('app'));
               //this will add the hello to the screen
               ReactDOM.render(hello,document.getElementById('app'));
               //this will do nothing

adding a {} means that its a code
     <h1>2 + 3 </h1> // this will show 2 + 3;
     <h1>{ 2 + 3}</h1> // this will show 5;

using normal if else statements 
     if (condition == true) {
          element = <tag>thing1</tag>
     } else {
          element = <tag>thing2</tag>
     }

if you want just one condition (something is true, something will happen, if false, then nothing will happen);
     { !condition  && action()};

keys 
     when you make a list in jsx, sometimes your list will need to include something called keys
          key is an attribute, whos value should be something unlique(similar to an id)
          they dont do anything that you can see, react uses them to keep track of lists, if you dont use when youre supposed to, react might
          scramble your list-items in the wrong order 
     
YOU CAN HAVE VARIABLES IN A REACT CLASS AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

     class Random extends React.Component {
          render() {
                    const div = 'i am a div'
               return (
                    <h1>{div}</h1>
               )
          }
     }
          this will render 'i am a div'
          i am so mad

you can use an react class as an actual class, you can have properties and all
     class Class extends React.Component {
          get name () {
               return 'myName'
          }
          render() {
               return <h1>{this.name}</h1>
          }
     } // renders 'myName'

you can save the end result of an if statement as an variable like so
     const password = e.target.querySelector('input[type="password"]).value;
     const auth = password == this.state.password // returns true or false and that value is saved in the auth variable

to pass props, you dont need to use a constructor or nothing like that, you just do it
     class ClassName extends React.Component {
          render() {
               return <h1>{this.props.name}</h1>
          }
     }
     <ClassName name='jose' />

you can pass methods as props
     class ClassName extends React.Component {
          methodName() {
               return 'name'
          }
     render() {
          return <Button propName={this.methodName} />
          }
     }

receiving a method as an prop
     class ClassName extends React.Component {
          render() {
               return (
                    <button onClick={this.props.talk}>
                         helo? 
                    </button>
               )
          }
     }

you can render text in the middle of an component 
     <MyComponent>
     this is a text
     </MyComponent>
and render it as
     <h1>{this.props.children}</h1>

defaultProps 
     you can set the defaultProps with 
          ComponentName.defaultProps = {propName : 'value'};
          
this.state
     unlike props, a components state is not passed in from outside. a component decides its own state.
     to make a component have state, give the component a state property

you should never change a props component

component lifecycle
     mounting, when the component is being initialized an put into the dom for the first time
     updating, when the component updates as a result of changed state or changed props
     unmounting when the component is being removed from the dom

every react component youve ever interacted with does the first step at minimum.

component did mount
     without this component, the page is static, the components job is to update it whenever there is a change
     after a component is rendered the componentDidMount will get called
          class clock extends React.Component {
               constructor(props) {
                    super(props);
                    this.state = {
                         time: new Date()
                    }
               }
               render() {
                    return (
                         <div>{this.state.time.toLocaleTimeString()}</div>
                    )
               }
               componentDidMount() {
                    this.intervalID = setInterval(() => {
                         this.setState({
                              time: new Date();
                         })
                    },1000); 
               }
          }
               this component will change the this.state.time variable every second to be a new time, thanks to the setInterval
               a way to look at it is that, componentDidMount is like the <tag onload="script()">, it makes so that the code only runs after the page is fully loaded

componentWillUnmount
     if you dont use that, the code will run forever, a lot o times you want it, but what if you dont want to run it forever?
          it may happen when you have a lot of components doing stuff all at once
     using the clock from earlier, if you use the componentWillUnmount, it will clear the interval and save some memory
          componentWillUnmount() {
               clearInterval(this.intervalID)
          }
componentDidUpdate
     is caused by changes to props or state. every time you did an setState, the component updated,
     
componentWillUnmount 
     is caused when a component is no longer active

Stateless Functionnal Components
     instead of using class and all of that stuff, you can write just a normal function 
          const functionName = (props) => {
               return <h1>{props.greeting}</h1>
          }
     however when using props, you dont use the this. notation
          const functionName = props => {
               return <h1>{props.greeting}</h1>
          }

the state hook
     classes are difficult to reuse between components
     tricky and time consuming to test

useState
     current state - the current value of the state
     state setter  - a function that updates the state
     defaultvalue - is the initial value of the state

     const [currentState, stateSetter] = useState(defaultValue);

     the first param in the setState is the current state, so you can add things to the current state
     this is a counter
          function Counter () {
               const [count, setCount] = useState(0);
               return <button onClick={() => setCount(currentCount => currentCount + 1)}>{count}</button>
          }
     adding something to the state array;
          const addfunction = (item) => {
               setArray(currentArray => [...currentArray,item]);
          }

     to keep the elements the same in the array
          const [array, setArray] = useState([]);
          setArray(currentArray => [...currentArray + newElement]);

     to keep the elements the same in an object
          const [object, setObject] = useState({})
          setObject(currObj => ({...currObj,[name]:value}))
          (name and value its to just change what has been changed and not resave everything else);     

useEffect 
     will do the functions each time the component is rendered
     to control when the useEffect is called, use the [] afther the first param on the function, if a component changes and is not
     on that array, it will not call the useEffect, but if it is, it will call useEffect
          useEffect(()=> {

          },[]);
          if you use [], it will only call it once, when that component is being rendered for the first time
     

     1957
rules of hooks
     only call hooks at the top level
     only call hooks from react functions

     because you cant call hooks that are not on the top of the function, instead of using if statements to see if an useEffect can happen
     you can do the conditions on the [] array and setting the values to null or undefined

  useEffect(() => {
    setMenu(getMenu('/menu').then(menuResponse => {}))
    Promise.all([setMenu('/menu'), setNewsFeed('/news-feed'), setFriends('/friends')]).then(
      ([menuResponse, newsFeedResponse, friendsResponse]) => {
        setMenu(menuResponse.data);
        setNewsFeed(newsFeedResponse.data)
        setFriends(friendsResponse.data)

      }
    );
  }, []);

Advanced React 

styles
     inline styles
          if you want to do some css styles in the react component youll have to do {{}}
               the outer curly braces inject javaScipt into the jsx  and the inner curly braces create a javaScript object literal
                    they make this a valid javascript object
     object literal is an object that is not defined by any variable

     if you want to make styles in javascript youll need to use '' but in react you dont need to do that
          javascript
               const object = {
                    'background-color': 'black',
                    'margin-top': '20px'
               }
          react
               const object = {
                    backgroundColor: 'black',
                    marginTop: '20px';
               }
     style value syntax
          in javascript the values are always strings, you can do it in react aswell but if the value is in px, you dont need to make it
          a string and add the pc, the value is already assumed if its a number

     share styles across multiple components
          you can create an object on a file with the properties
               const properties = {
                    background: background,
                    fontSize: 20,
               }
          and when you want to use it in a file
               import { properties } from './props.js'
               <div style={{background: properties.background, fontSize: properties.fontSize}}></div>

separate container components from prsesntational components
     maybe one container has too many responsabilities and you cant use it in other parts of your site as easilym so you need to 
     separate the components
the presentational components only job is to contain html like jsx. it should be an exported component and will not render itself because a presentational component will always get rendered by a 
container component

propTypes // they are made so that the prop only accept a variable type (string, number, bool);
     are useful for two reasons
          prop validation
               they are to ensure that your props are doing what they are needed to do
          documentation
               documentating props makes it easier to glance at a file and quickly understand the components class inside

apply proptypes 
     you need to import prop-types
          import PropTypes from 'prop-types'
     then you can declare propTypes as a static property for your component after the component has been defined
     for each prop that the component class expects to receive, there can be one property on your propTypes object
          ComponentName.propTypes = {
               propName: PropTypes.string
          }
     if you add the property isRequired, you will get a console warning that the prop wasnt sent

PropTypes in Function Components
     its the same thing...
          Component Way => {
               class ComponentName extends Component {
                    render() {
                         return <h1>{this.props.name}</h1>
                    }
               }
               ComponentName.propTypes = {
                    name: PropTypes.string
               }
          }
          functional way => {
               const ComponentName = props => {
                    return <h1>{props.name}</h1>
               }
               ComponentName.propTypes = {
                    name: PropTypes.string
               }
          }
