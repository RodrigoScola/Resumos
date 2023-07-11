#jquery #javascript 
async in jquery 

if you want to get json from another domain, you want jsonp 
     $.ajax({
          url: 'post.php',
          //the data will be converted into a query string
          data: {
               id: 123
          },
          cahche: true, //is false if the dataType is script and jsonp
          type: "GET",
          dataType: "json",
          
     }).done(data => {
          //will run if the code works
          $("<h1>").text(data.title).appendTo("body");
     }).fail((xhr, status, errorThrown) => {
          //will run if the code doesnt work
          console.log(xhr, '\n',status , '\n', errorThrown);
     }).always(() => {
          //will run regardless of result 
          alert('request is done')
     })

convenience methods 
     if you dont care about error handling and you dont need configurations of the ajax methods, you can use the methods below    
          $.get 
          $.post 
          $.getScript
          $.getJson

load 
     the .load method is unique in tha its called on selection, the load method fetches html from a url and uses the returned html to populate the selected elements in addition to providing a url to the method, you can optionally provide a selector, jquery will fetch only the matching content from the returned html 

     //using load to populate an element
     $("#newConent").load('/foo.html');
     //using load to populate an element based on selector 
     $("#newContent").load('foo.html #myDiv h1:first",(html) => {
          console.log('content updated')
     })
     