#frontEnd #javascript #react

react context 
     to reduce prop drilling through a lot of components 
     if its once or twice, its a good idea, however if you have to do it a lot then its  a problem. it 
          bloats the code and makes it harder to understand or use middle components 
          causes the middle components to re-render for changes to the drilled props even if they dont use the props themselves 

creating and consuming context 
     the react context api uses a provider and consumer patter to share data throughout an application 
     the provider role is played by a react component that makes data available to its descendant components
     when one of those descendants accesses the shared data, it becomes a consumer 

     to use the context api, we start by creating a react context object 
          const MyContext = React.createContext()
     context objects include a .Provider prop that is a react component, it takes in a value prop to be stored in the context 
          <MyContext.Provider value="hello World">
               <ChildComponent />
          </MyContext.Provider>
     and you can use it in any of the files 
          {
               import {MyContext} from './MyContext.js'

               const ChildComponent = () => {
                    const value = useContext(MyContext);
                    return <p>{value}</p>
               }
          }

context wrappers
     its a way to use context without creating another context for each data type    
          {
               const ThemeContext = React.createContext();

               const ThemedMessage == ({children, props}) => {
                    return <ThemeContext.Provider value={...props}>
                    {children}
                    </ThemeContext.Provider>

               }
               const MyComponent = () => {
                    return (
                    <ThemedMessage theme="dark">
                         Hooray!
                    </ThemedMessage>
                    )
                    };
          }
updating the context 
     in the provider value, provide a function to change the value 
     {
          const CounterArea = ({children}) => {
               const [count,setCount] = useState(0);
               return <CounterContext.Provider value={{count, setCount}}>
                         {children}
                    </CounterContext.Provider>
          }
          const Counter = () => {
               const {count,setCount} = useContext(CounterContext);
               return <>
                         <button onClick={() => {
                              setCount(count => count+1)
                         }}>{count}</button>
                    </>
          }
          const App = () => {
               return <CounterArea>
                         <Counter />
                         </CounterArea>
          }
     }
nested providers 
     sometimes you have a lot of providers nested within eachother
     components subscribing to a contexts provider will receive the value for the component closest to them in the application tree 
     
