#backEnd #http
consume remote api data from within a node js application 
     npm install request --save
     lets say that we want to issue a get request and determine the ip address of the request, in this case our local machine
          const request = require('request');
          request.get('http://localhost:2000/',(error,response,body) => {
               if (error) {
                    return console.dir(error)
               }
               console.dir(JSON.parse(body));
          });
          post request {
               const request = require('request');
               request.post({
                    "headers": {"content-type": "application/json"},
                    "url": "http://localhost:2000",
                    "body": JSON.stringify({
                         "firstName": "Nic",
                         "lastName" : "Robertson"
                    })
               }, (err,res,body) => {
                    if (error) {
                         return console.dir(err)
                    }
                    console.dir(JSON.parse(body));
               })
          }
     
how to use an api with node
     api payloads can be formatted in html, xml or json. it has become increasingly common to implement apis that deliver json payloads.

     {
          const axios = require('axios')
     
          const getCompatibility = (yourname, yourbirthday,theirname, theirbirthday) => axios({
               method: "POST",
               url: "http://localhost:3000',
               headers: {
                    "content-type":"application/x-www-form-urlencoded",
                    "x-rapidapi-host":"astrology-horoscope.p.rapidapi.com",
                    "x-rapidapi-key": "yourapikey"
               },
               params: {
                    name1: yourname, 
                    name2: theirname,
                    b1: yourbirthday,
                    b2: theirbirthday
               }
          })
          calling 
          const asyncCall = async () => {
               const res = await getCompatibility('austin',1983,'taylor',1232);
          };
     }
     
keeping credentials secure when making api calss with javascript 
     including authentication credentials in javascript is bad
          the big challenge with using apis that require authentication in javascript is that youre forced to expose your api credentials to use them 
          anyone who knows how to view source or view requests in their browsers developer tools can view those credentials

how to securely use authenticad apis in javascript
     what if you need or want to an api that doesnt mean those criteria? how can you access that data with js if you cant include the credentials?
     the trick is to setup an api endpoint on a server that you can call with js
     this middleware api stores the credentials securely on that server, and makes the real api call on your request, then sends the data, optionally filtering out any data you dont want exposed publicly first 

creating a node js http proxy server in under 10 min 
     to get node packages 
          sudo apt install curl 
          curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
          sudo apt install nodejs 
     creating a basic proxy 
          {
               const http = require('http');
               const proxy = require('http-proxy');
               proxyServer = proxy.createProxyServer({target: 'http://localhost:3000'});
               proxyServer.listen(8000);

               server = http.createServer(function (req,res) => {
                    proxyServer.web(req,res, {target: req.url});
                    proxyServer.on('error', (e) => {
                         console.log('error in proxy call');
                    })
               })
               server.listen(2999);
          }
https://www.proxyrack.com/create-your-own-node-js-http-proxy-server-in-under-10-minutes/

sending emails with node.js 
     importing packages 
          npm i nodemailer
using smtp for nodemailer transport 
     smtp is a protocol for sending email messages between servers 
          const transport = nodemailer.createTransport(options[,defaults]);
     
     const transport = nodemailer.createTransport({
          host: 'asdoif',
          port: 2424,
          auth : {
               user: "put your username here",
               pass: "put your password here",
          };
     })
     transport.sendMail({
          from: "youremailHere@.com",
          to: "useremailhere@.com",
          subject: "subjectHere",
          text: "your text here",
          html: "jsx here" // optional
          attachments: [
               {
                    filename: 'url here',
                    path: 'path here'
               }
          ]
     }, (err,info) => {
          if (err) {
               return console.log(err);
          }
          return console.log(info);
     })

how to use node-cron to run scheduled jobs in node.js 

cron provides a way to repeat a task at a specific time interval, there may be repetitive tasks such as logging and performing backups that need to occur on a daily or weekly basis 
one method for implementing cron on a node.js server is by using the node-cron module. this library uses the crontab syntax, 
      npm install express node-cron

biulding the backend server and scheduling a task 
     {
          const cron = require('node-cron');
          const express = require('express');

          const app = express();
           //schedule tasks to be run on the server 
           cron.schedule()

          app.listen(4000,() => {
               console.log('server is listening on port 4000');
          })
          
     }
     