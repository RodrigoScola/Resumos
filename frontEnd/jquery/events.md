#jquery 
jquery events like .click .focus .blur are shorthands for the .on('prop') method
the .on can only create event listeners on elements that exists at the time you set up the listeners 
$(document).ready(() => {
     $('button.alert').on('click', () => {
          console.log('a button was clicked')
     })


     //this will not have the event listener because the event was added to buttons already present on the page
     $("<button class='alert'>Alert</button>).appendTo(document.body)
})

you can bind data to an event 
     $('input').on('change', {
          foo: 'bar',
          (obj) => {
               console.log(obj.data.foo)
          }   
     })

too see if an element has an specific attribute
     $('a').click(function(elemObj){
          const elem = $(this);
          if (!elem.attr('href').match(/evil/)) {
               elemObj.preventDefault();
               elem.addClass('evil')
          }
     })

you can set the same response for multiple events by adding a space between event names
$('a').on('click hover',() => {
     console.log('a was clicked or hovered')
})
you can add different functions too 
$("p").on({
     click: () => {
          console.log('this was clicked')
     },
     mouseover: () => {
          console.log('this was hovered');
     }
})
namespacing events
     for complex applications or plugins, it can be useful to namespace the events so you dont unintentionally disconnect events that you didnt or couldnt know about
$('p').on('click.namespace',() => ...);
$('p').off('.namespace'); // unbind all events in a namespace
$('p').off('click.namespace'); // unbind event in that namespace
     
tearing down event listeners
     to remove an event listener, you can use the .off() and pass the event type to clear
     if you attach a named function to the event, you can isolate the event tear down to just that function by passing it as the second argument;
     {
          const foo = () => {
               console.log('this is foo')
          }
          const bar = () => {
               console.log('this is bar')
          }
          $('button').on('click',foo).on('click',bar);
          $('button').off('click',bar);
     }

setting events to only run once 
     sometimes you dont want the same event to run multiple times like an http request, you can use the .one() method
     $('#some').one('click',firstClick);
     const firstClick = () => {
          console.log('you clicked this for the first time');

          //setting up the event for multiple clicks
          $(this).click(() => {console.log('you clicked this more than once')});
     }

note that the one method will run on each element that fits the selector, and will run one time for each selector aswell 
if you want to run only for the first element
     $('button').first().one('click',() => console.log('you clicked once'))

event helpers 
     .hover() - activates when the mouseenter and mouseleave occurs on an element
          if you pass one function, it will occur on both events 
          if you pass two functions, the first will run on mouseenter and the second on mouseleave

attaching events to elements 
     if you want only one specific element on the page 
          $('#buttnId').click(() => console.log('you clicked'));
     if you want to just listen for an event but doesnt matter what element triggers it, you can attach it on the parent element and listen for the element on a 3rd argument 
          $('parent').on({
               click: () => console.log('you clicked')
          },'button');
          or with a different syntax
               $('parent').on('click','button',() => console.log('you clicked'))

inside the event handling function 
     pageX, pageY
          the mouse position at the time the event occured 
     type 
          type of the event (ex: 'click')
     which 
          the button or key that was pressed
     data 
          any data that was passwd in when the event was bound 
     target
          the dom element that initiated the event 

event propagation 
     understanding how events propagate is an important factor in being able to leverage event delegation. any time on of the anchor tags is clicked, a click event is fired for that anchor and the bubbles up the dom tree, triggering each of its parent event handlers 
attach a delegated event handler 
     $("#list").on('click','a',e => {
          const elem = $(this);
          if (elem.is('[href^='http'])) {
               elem.attr('target','_blank');
          }
     })

triggering event handlers 
     sometimes you want to trigger events without the input of the user, thats why you use the .trigger() method 
     the .trigger() cannot be used to mimic native browser events.

dont use .trigger simply to execute specific funcitons 
     while this method has its uses, it should not be used to call a function that was bound as a click handler. instead you should store the function you want to call it in a variable and pass the variable anme when you do your bingind, then you can call the function itself whenever you want 

     const foo = (e) => {
          if (e) {
               console.log(e)
          } else {
               console.log('this didnt come from an event')
          }

     }
     $('p').on('click',foo);
     foo();
     
custom events
     they are a more mobile way of programming things, instead of just using the.click, you can trigger events that you create with no need of the user activating it 
     {
          $('.switch, .clapper').on('click',() => {
               const light = $(this).closest('.room').find('.lightbulb');
               if (light.is('.on')) {
                    light.removeClass('on').addClass('off')
               }
               else {
                    light.removeClass('off').addClass('on');
               }
          })
     }
     with custom events {
          $('.lightbulb').on('light:toggle',() => {
               const light = $(this);
               if (light.is('on')) {
                    light.removeClass('on').addClass('off')
               } else {
                    light.removeClass('off').addClass('on')
               }
          })
          $('.switch, .clapper').click(() => {
               const room = $(this).closest('.room');
               room.find('.lightbulb').trigger('light:toggle')
          })
     }
     we moved the behavior of the lightbulb away from the switches and the clapper to the lightbulb itself, now other things can trigger the event and you dont need to add to the classes every single time.
     you can think of that as an store dispatch from a state management program like redux
