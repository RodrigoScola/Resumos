#database #javascript 
npm i express pg cors
    express
        quicly create a server in nodejs
    cors 
        different domain applications to interact with each other 
    pg 
        connection between all

on index.js
importing express and cors
    const express = require ("express");
    const cors = require ('cors');
initialize the variables
    const app = express()
whenever you want your server to start, you need to add this function and the port number, you can also add a function to execute when the server starts
    app.listen(portnum,()=> {
        console.log('started')
    });
    // middleware
    app.use(cors())
    app.use(express.json());


to create a database is just by creating a file and adding .sql
    create database databasename
    create shcema db
    create table db.todos (
        id serial primary key,
        title varchar(50),
        content text not null
    )

connecting database with the server
on a js file 
importing pg 
    const pool = require ('pg').Pool;
initializing server
    const pool = new Pool ({
        user : "username"
        password : "password",
        host: "localhost",
        port: portnum,
        database : "databasename"
    })
exporting server
    export default pool;
    on index.js
        const pool = require("./db");

    create something
    using app.post() the information will go  into the database that you specified when you defined app.listen()
        app.post('/todos', async  (req,res)=> {
            try {
this makes so everything that is written on the .body will become the description
                const {description} = req.body;
this adds the description that we want on the database
and the returning is just for debug purposes (i think)
                const newtodo = await pool.query("INSERT INTO todo (description) values($1) returning *",[description]);
            res.json(newtodo.rows[])
            }catch (err) {
                console.error(err.message);
            }
        })
    get all things


    app.get("./todos", async (req,res)=> {
        try {
            const { id } = req.params;
            const todo = await pool.query("Select * from todo)
        }catch (err) {
            console.error(err.message);
        }
    })
    get only one thing
    app.get("./todos:id", async (req,res)=> {
        try {
            const { id } = req.params;
this query lets us to just see where a specific parameter is met, and to see on the site a specific thing by adding the id after the todo
example https://localhost:3999/todos/4;
            const todo = await pool.query("Select * from todo where id = $1 ",[id])
        }catch (err) {
            console.error(err.message);
        }
    }
    update only a thing

    app.put("/todos/:id", async (req,res)=> {
        try {
        const data = req.params;
        const {description} = req.body;
        cosnt update = await pool.query("Update todo Set description = $1 where id = $2",[description,id]) 
        } catch (err) {
            console.error(err.message);
        }
    })
    delete only one thing
    app.delete("/todos/:id",async (req,res) => {
        try {
            const {id} = req.params;
            const deletetodo = await pool.query("delete from todo where id = $1",[id]);
        } catch (err) {
            console.error(err.message);
        }
    }) 
    
on a react app 
import react, {useState,useEffect} from 'react';

const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
    const body = {description};
    const response = await fetch("http://localhost:5000/todos",{
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(body)
    })
    window.location = "/";

    } catch (err) {
        console.error(err.message)
    }
    }
const deletetodo =async (id) => {
    try {
        const delete = await fetch(`http://localhost/todos/${id}`,{
            method : "DELETE"
        })
        setstate(todo.filter => v.id != id)
    }catch(err) {
    console.error(err.message)
    }
    }
const InputTodo = () => {
    const [description,setDescription] = useState("");

    return (
        <div>
        <form onSubmit={onSubmitForm}> 
            <h1>input the thing here</h1>
            <input type="text" value={description}  
            onChange={e =>{ setDescription(e.target.value)}}/> 
            <button type="submit">submit</button>
        </form
        </div>
    )
    }   
const edittodo = async (id) => {
    try {
        const body = {description};
        const body = await fetch(`http://localhost:5000/todos/${id}`,{
            Method : "PUT",
            headers : {"content-type" : "application/json"};
        }) 
    } catch (err) {
        console.log(err.message) 
    }
    window.location('/');
} 
const listtodo = () => {
    const [todos , setstate] = useState(""); 

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:500/todos");
            const jsondata = await response.json();
            setstate(jsondata)
        } catch (err) {
            console.error(err.message)
        }
    }
    useEffect(()=>{
        getTodos
    },[])
    return (
        <div>
  <table class="table">
    <thead>
      <tr>
        <th>{todos.map((v,i)=> {
            <tr key={v.id}>
            <td>
            {v.description}
            </td>
            <td>
            <button onclick={()=> deletetodo(v.id)}> Delete
            </button>
            </td>
            <td>
            <button onclick={()=> edittodo(v.id)}>Edit</button>
            </td>
            </tr>
        })}</th>
      </tr>
    </thead>

  </table>
        </div>
    )
}