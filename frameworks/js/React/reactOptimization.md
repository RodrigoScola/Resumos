#react 
           useEffect(
    function didMount() {
      setOn(setGraphPointOn());
    },
    [setGraphPointOn]
  );

memoizing values 
     just use memo in the calculation 
          const isPrime = useMemo(()=> {
               return checkIfPrime(number)
          },[number])
memoizing components 
     when react detects a change in a parent component it will re-render all of its child components to make sure the app is up to date, this may create a performance issue when a child component renders something expensive like thousands of elements or an iframe 
          const memoizedListComponent = React.memo((props) => {
               const {longList} = props;
               return longList.map(item => <li>{item}</li>)
          })
     to ensure that complex values such as objects and arrays are deeply compared, we can provide a comparison as the second argument 
          {
               const areDeeplyEqual = (previousProps, nextProps) => {
                    return JSON.stringify(previousProps) == JSON.stringify(nextProps)
               }
               const MemoizedComponent = React.memo(expensiveComponent, areDeeplyEqual)
          }
memoizing functions 
     even if two functions are the same, react will think that they are different because they have separate references
     to fix it, wrap it in a  useCallback 

code splitting components 
     once components get more and more complicated you can use lazyload

instead of 
     import Details from './Details';
     use 
     const Details = React.lazy(() => import('./Details));

suspense 
     react waits for all of its components before rendering 
     you can change that using suspense 
     
     suspense must wrap any component that is imported with react.lazy

     <Suspense fallback={<p>Loading...</p>}>
     </Suspense>
     