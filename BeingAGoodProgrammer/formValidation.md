#html #form_validation 
client-side validation html
     if you want something to be required
          <input type="text" required>
     if you want a pattern
          <input type="text" required pattern="[cC]amelCase">
          you have to use regex 

elements 
     action <- where the information is sent
     method <- is assigned a HTTP verb that is included in the HTTP request
     name <- its the value that the input will be delivered as, think of it as an obj property
          userInfo = {
               name : input
          }
     value <- the default value that the input has 
     placeholder <- the empty value that the developer wants you to put
     type <- the type of information you want to receive
          numbers, text, text-area...
     pattern <- the input cannot be outside of the pattern
     required <- makes so you cannot send the form without that input

label
     to associate a label to an input you first add an id to an input then use the for with the value of the id 
          <label for="me">Who wants to eat</label>
          <input value="i do" type="text" id="me" >
     if you click on the <label> it will focus on the input

type 
     password <- doesnt show anything, just dots
     text <- text
          minlength <- the minimum length of the text
          maxlength <- the maximum length of the text
     number <- only numbers 
          step <- if the user clicks on the arrow, how many numbers you want it to go up by
          min <- minimum number that is in range
          max <- maximum number that is in range
     range <- number but between a range
          min <- minimum number that is in range
          max <- maximum number that is in range
     checkbox <- its a check, you can have multiple checked at once
     radio <- like checkbox but there can only be one checked
     select <- dropdown list
          option <- option for the dropdown 
     datalist <- if the select has too many options you can use a search bar
          first you need an text input with the property lists to an datalist id, then just add stuff to the datalist
               <input type='text' name='name' id='name' list='listid'>
     textarea <- when the input needs a lot more detail 
          rows <- number of rows
          cols <- number of collumns
          minlength <- the minimum length of the text
          maxlength <- the maximum length of the text
     submit <- submits the form 
