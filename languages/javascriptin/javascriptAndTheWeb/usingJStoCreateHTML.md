#javascript #html 
to add code to an html file use the <script> tag
     <script> 
          function continue () {
               return 'continue'
          }
     </script>
if the script is too long, you can link it to a file using the src notation
     <script src="filename"></script>
when you want your script to be executed after the html loads you use the defer attribute
     <script src="javascript.js" defer></script>

with the async attribute it will only execute when the script is fully downloaded
     <script src="file.js" async></script>

DOM 
     is like a tree structure , in css if you want to make a change to a nested element you
          html body head nav li {
               font-family: "Comic Sans";
          }
     its the same thing in the DOM 

the document keyword allows you to acess the root node of the DOM tree, if you want to acess the body, you would 
     document.body

you can modify elements by the .innerHTML tag 
     to set an element you 
          document.body.innerHTML = "<p>The body is now just this paragraph</p>

if you want to grab an css selector, using the .querySelector("1") will return just the first element
     document.querySelector("p");
if you want to grab an element by their id 
     document.getElementById("root")

you can inline style like css in html using the .style and the . thing you want to change
     (remember that theres no - in that, instead they are using camelCase);
     let Blue = document.getElementById("root").style;
     Blue.backgroundColor = "blue";

you can create an element 
          unlike the .innerHTML , appendChild does not replace the content inside the parend, it adds to it
     let paragraph = document.createElement("p");
     paragraph.id = info;
     paragraph.innerHTML = " the text";
     document.body.appendChild(paragraph)
to remove an element
     let paragraph = document.querySelector("p");
     document.body.removeChild(paragraph);

adding functionality on onclick 
     if you dont have an function
          element.onclick = function () {
               element.color = "white"

          }
     if you have an function 
          element.onclick = funcname

event handler registration 
     using the .addEventListener() method, we can have a DOM element listener for a specific event and execute a block of code when the event 
     is detected. The DOM element that listen for an event is called the event target an the block of code that runs when the event happens is called the event handler

          let eventTarget = document.getElementById("root");

          eventTarget.addEventListener("click", () => {
               //this block of code will run when click event happens on eventTarget
          });
          lets break it DOWN 
               we select the target using document.getElementById("root");
               we used the addEventListener method on the eventTarget DOM element
               the .addEventListener takes two arguments
                    event name in string format 
                    an event handler function
               
you can add the event handlers but not only with addEventListener
     eventTarget.onclick = () => {

     }
to remove an event listener after you used that function
     eventTarget.removeEventListener("click",functionName);

event object properties
     function eventHandlerFunction(event) {
          console.log(event.timeStamp)
     }
     eventTarget.addEventListener("click",eventHandlerFunction);

     .target <- reference the element that the event is registered to
     .type <- acess the name of the event 
     .timeStamp <- acess the number of milliseconds that passed since the document loaded and the event was triggered

     if you want to change an element on a function
          let share = document.getElementById("root");

          let sharePhoto = (element) => {
               element.target.style.display = 'block'
               event.innerHTML = "hello there";
          }
          share.onclick = sharePhoto;
mouse events
     onclick <- when the mouse is clicked
     onwheel <- when the mouse is clicked on that element and the scroll is used
     onmouseover <- when the mouse is inside the <tag></tag>
     onmouseout <- when the mouse gets out of the <tag></tag>
     onmouseup <- when the mouse is released over the <tag></tag>
     onmousedown <- when the mouse is pressed over the <tag></tag>
     
keyboard events
     keydown <- when the user presses a key
     keyup <- when the user releases a key
     keypress <- when the user presses and releases a key, is different bc in this is one action that will be fired
