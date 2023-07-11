#testing 
what is mock testing? 
     creating a fake version of an external or internal service that can stand in for the real one, helping your tests run more quickly and more reliably
what is stub testing?
     creating a stand-in, but a stub only mocks the behavior but not the entire object, this is used when the implementation only interacts with a certain behavior of the object 
code coverage 
     unit testing practices that have to target all areas of the code at least once and is done by devs 
test coverage 
     testing every requirement at least oce and is done by the QA team 

how to adopt a proper test coverage method?
     you must know how much work is involved and where the design tasks are at. this way they are going to be aware if more tests are to be added. to do this, you could use an rtm as is the typical practice 
how to make sure everything is tested 
     - every tester should be aware of the requirements and the testing methods 
     - prioritize the requirements and focus the energy where its most needed 
     - be informed about how a certain release is different from the previous one so you can identify critical requirements more accurately and focus on maximum positive coverage 
     - adapt test automation 
     - use test management tools to always stay in the know 
     - smart work assignment 
     - maintaining a cheklist for all tasks and miscellaneous activities 
     - interact more with the team to get insight into the application behaivour
     - identify most impacting problems in the initial builds itself so the later ones can work for better stiability and reach those areas blocked by prior problems 

critical areas and methods for effective testing 
     resource jumbling 
          exchange tasks between the team members. this helps improve engagement and prevent knowledge concentration 
     compatibility coverage 
          make sure you are aware and including the different browsers platforms to test the application 
     ownership 
          make testers accountable and give them a free rein for the module/task that they are working on. this helps build responisbility and lets them try creative ways instead of following the beaten down the road 
     deadlines
          knowing the release deadlines prior to the commencement of testing phase helps with effective planning 
     communication
          stay in touch with the dev and other teams in between release cycles to know whats going on
          
what is mocking and stubbing used for? 
     a lot of people think that mocking ans stubbing are just used for unit and component tests
using mocking and stubbin in unit + component tests 
     using mocks and stubs to fake the external functionality help you create tests that are independent
mocking and stubbin of internal functions 
     mocks and stubs are very handy for unit tests. they help you to test a functionality or implementation independently, while also allowing unit tests
with integration tests, you are testing relashionships between services. one approach might be to get all the dependent services up and running for the testing environment

writing tests for react applications 
     installing test dependencies 
          yarn create react-app appName
          yarn add enzyme enzyme-adapter-react-16 --dev 
     create a setup file for the tests and paste {
          import {configure} from 'enzyme';
          import Adapter from 'enzyme-adapter-react-16';
          
          configure({Adapter: new Adapter()});
     };
taking snapshots of tests
     snapshot testing is used to keep track of changes in the app ui, if youre wondering whether its literal images, no stoopid 
     the first time a test runs a snapshot of thecomponent code is composed and saved in a new __snapshots__ folder in the src directory 
     to test 
     {
          yarn run test 
     };
     every new snapshot that gets generated when the test suite runs will be saved in the __tests__ folder 
     test: {
          it("renders correctly",() => {
               const wrapper = shallow(<App />)
               expect(wrapper).toMatchSnapshot()
          })
          now if you change the h2 in the wrapper to anything else, it will cause an error
     }
testing components lifecycle methods 
     they are hooks provided by react 
     since they are often used in react components, you can have the test suite cover them to ensure all things work as expected 
     we do the fetching of data from the api when the component mounts. we can check if the lifecycle method gets called by making use of jest, which makes it possible for us to mock lifecycle methods used in react applications 
     {
          it ('calls componentDidMount',() => {
               jest.spyOn(App.prototype,'componentDidMount');
               const wrapper = shallow(<App />);
               expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
          })
     }
     we attach spy to the components prototype and the spy on the componentDidMount(). next we asser that the lifecycle method is called once by checking for the call length
testing component props 
     how can you be sure that props from one component are being passed to another? we can have a test confirm it, of course. the enzyme api allows to create a 'mock' function so tests can simulate props being passed between components 
     mocking the user props {
          const user = {
               name: 'john doe',
               email: 'johndoe@gmail.com',
               username: 'johndoe',
               imageUrl: null
          }
     }
     mock functions look a lot like other tests in that theyre wrapped around the components. however, were using an additional describe layer that takes the component being tested, then allows us to proceed by telling the test the expected props and values that we expect to be passed 
     {
          describe('<Profile />',() => {
               it('contains h4', () => {
                    const wrapper = mount(<Profile user={user} />)
                    const value = wrapper.find('h4').text
                    expect(value).toEqual('John Doe');
               })
               it ('accepts user props', () => {
                    const wrapper = mount(<Profile user={user} />)
                    expect(wrapper.props().user).toEqual(user);
               })
          })
     }
     this particular example contains two tests, in the first we pass the user props to the mounted profile component. then we check to see if we can find an h4 element that corresponds to what we have in profile component 
     in the second test, we want to check if the props we passed to the mounted component equals the mock props we created 

mock api calls 
     the tricky thing about testing api calls is that we dont actually want to hit the api. you can use jest to mock axios requests
     create new folder called __mock__ in the same directory where the __tests__ lives 
          {
               module.exports = {
                    get: jest.fn(() => {
                         return Promise.resolve({
                              data: [
                                   {
                                        id: 1,
                                        name: 'james Doe',
                                        email: 'jamesdoe@gmail.com',
                                        username: 'jamesdoe'
                                   }
                              ]
                         })
                    })
               }
          }
          we want to check if the get request is made. well import axios for that 
               {
                    import axios from 'axios';
                    jest.mock('axios');
               }
          the jest api has a spyon() that takes an accessType that can be used to check whether we are able to get data from the api
          {
               it('fetches a list of users',() => {
                    const getSpy = jest.spyOn(axios','get')
                    const wrapper = shallow(<App />);
                    expect(getSpy).toBeCalled();
               })
          }

