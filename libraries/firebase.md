#javascript 
google auth
    const auth = firebase.auth();

    const provider = new firebase.auth.GoogleAuthProvider();

    adding a function that signs in with google auth
        signInBtn = () => {auth.signInWithPopup(provider)};
    the provider doesnt change when talking about signing out
        signOutBtn = () => {auth.signOut()};

when you are talking about an auth change state
    auth.onAuthStateChanged((user) => {
        if (user) {
            when user is signed in
            <Redirect to={{ pathName:'./main'}} />
        } else {
            when user is signed out 
           <Redirect to={{ pathName:'./main'}} /> 
        }
    })
if you want to acess the account values
    auth.onAuthStateChanged(user => {
        return (
            <h3>`hello there ${user.displayName}`</h3>
        )
    })
adding a database
    first thing you want to create an collection an add fields
adding thing to database
addStuff = (user) => {
    const db = firebase.firestore();
        adding a database variable
    if (user) {    
    let thingsRef = db.collection('thing'); <-- this creates an reference for the database collection
        variable to take the reference of the table you want
    let unsubscribe;
        variable to tell that you dont want any updates    
    const {serverTimeStamp} = firebase.firestore.fieldValue;
    createThing = () => {                   <-- this creates a new row
        thingsRef.add ({ <-- this adds a new document 
            uid: user.uid,
            name: user.displayName,
            createdAt: serverTimeStamp(),
        })
    }
    } else {
        unsubscribe && unsubscribe()
    }
}
    <button onClick={this.addStuff(user)} value='this creates a new thing'/>

to make the updates stop when user signs out
    this only makes the user see its own posts
    unsubscribe = thingsRef.where('uid','==',user.uid)
                    .get(querySnapshot =>{ const items = querySnapshot.docs
                    .map(doc => {return `<li>${doc.data()}</li>}) 
                    thingsList.innerHTML = items.join('')})

to just retreive data
    const db = firebase.firestore();
    const thingsRef = db.collection('collectionName').doc('firstPost); <-- the doc is for specific things
    
    thingsRef.get()
             .then(doc => {
                 const data = doc.data();
             })

changes of data
    const db = firebase.firestore
    const thingsRef = db.collection('collectionName')

    thingsRef.onSnapshot(doc => {
        const data = doc.data();

    })
             
update data
    const db = firebase.firestore
    const thingsRef = db.collection('collectionName').doc('firstPost')
    thingsRef.update({title: e.target.value})

quering data
    const db = firebase.firestore()
    const thingsRef = db.collection('collectionName')
    const query = thingsRef.where('price','==',25)

    query.get().then({products => {
                        products.forEach(doc => {
                            data = doc.data()
                            document.write(`${data.name} and the price for that is ${data.price}`)
                        })
    }})

storage

    <input type='file' onChange='uploadFile(this.files)'/>
    function uploadFile(fileName) {
        const storageRef = firebase.storage().ref;
        const imgRef = storageRef.child('horse.jpg');

        const file = files.item(0)

        const task = horseRef.put(file);

        task.then(Snapshot => {
            const url = Snapshot.downloadURL
        })
    }
example of change and update and quering
        import React from "react";
    import firebase, { auth } from "../firebase";

    const db = firebase.firestore();
    const myPost = db.collection("myPosts").doc("firstPost");
    const productsRef = db.collection('myPosts');

    //this is a one time thing and doesnt change
    function Getpost() {
  myPost.get().then((doc) => {
    const data = doc.data();
    // document.write(`${data.string} <br>`);
  });
      return <div></div>;
    }
    //this changes in real time
    function ChangedPost() {
      myPost.onSnapshot((doc) => {
        const data = doc.data();
        // document.write(`${data.string} <br>`);
      });
      return <div></div>;
    }
    //this changes the single document
    function ChangePost() {
    myPost.update( { string: 12} );

    }

    //querying collection 
    function QueryingDoc () {
      const query = productsRef.where('string','>=',11);
      query.get()
            .then(p => {
              p.forEach(d =>{
               const data =d.data()
               document.write(data.string)
              })
            })
    }

    function Test() {
      return (
        <div>
          <h1>Put your name here</h1>
          <input onChange={ChangePost()}/>
          <QueryingDoc />
        </div>
      );
    }
    export default Test;
