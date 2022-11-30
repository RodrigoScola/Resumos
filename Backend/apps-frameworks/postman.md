# Postman

### is a gui that aids in the development of apis by making it easy to test requests and their responses in an organized way

## download
[DOWNLOAD POSTMAN](https://www.postman.com/)
https://www.postman.com/

### to make a get request

1. the dropdown item is set to get

2. set the url that your server is running on and the path
   
     https://localhost:3000/users

3. hit `send`

4. the response should be all the users if your code is correct and it should be like this
```js
     app.get('/users',(req,res) => {res.send(users)});
```
if you want to get a specific user you just alter the url
```js
     app.get('/users/:id',(req,res) => { res.send(users[req.param.id].name)});
```
### making a post request

1. change the type of request from get to post and add the url

2. in order to create a new resource in the database, we need to supply a user obj to create in the body of post request. select the body tab and the raw radio button

3. the input should be json obj so select the dropdown that says text and change to application/json