#testing 
installing 
     npm i jest

on package.json
     "scripts":{
          "test":"jest"
     },
to group tests together
     describe(functionName, ()=> {})
to test something 
     test('what you want to test',()=> {});
to see if the function returns the expected result or not
     expect(input).toEqual(output);

testing react apps
     setup with create react app 
          npm i react-test-renderer

one of the main things about jest is that you can test and create components on the same file

https://www.youtube.com/watch?v=7r4xVDI2vho&ab_channel=TraversyMedia
enzyme
https://enzymejs.github.io/enzyme/
advanced testing
https://ericdcobb.medium.com/advanced-react-component-mocks-with-jest-and-react-testing-library-f1ae8838400b