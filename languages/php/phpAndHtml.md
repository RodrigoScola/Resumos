#php #html 
to render php in the browser 
     create a file with .php at the end of it 
php is an language that is written with html so you can render different html within the php file 
     <h1>this renders a header</h1>
     <?php echo "<h1>This also renders an header</h1>"; ?>
if you are just using one line of php you dont need to use the <?php echo "this is php"?>
you can just use the = instead of php
     <?="this is php"?>
request superglobals 
     superglobals are automatic global variables which are available in all scopes throught a script 
          $GLOBALS 
          $_SERVER
          $_GET
          $_POST
          $_FILES
          $_COOKIE
          $_SESSION
          $_REQUEST
          $ENV
     $_GET contains an associative array of variables passed to the current script using query params in the url 
     $_POST this contains an associative array of variables passed to the current script using a form submitted using the post method 
     $_REQUEST this contains the contents of $_GET, $_POST and $_COOKIE
get form handling 
     in html setting a form method attribute to "get" specifies that you would like the form to be submitted using the get method 
     when using this method, the form entries are passed as params in a url query string
if you want to get the input on a form 
          <form>
          <input type="text" name="nameThing" >
          </form>
          <p> your name is <?=$_GET['nameThing'];?>
post form handling 
     in html setting a forms method attribute to "post" specifies that you would like the form to be submitted usint the post method. 
     when using post to submit forms you will not see the url change, the form data is sent using the headers of the http request instead 
     of url params. when the form is submitted the input data is available in the $_POST superglobal.
action 
     often times there is no need to present a user with the same form over and over again, it might make sense to move them to a new page or thank them for their submission 
     this is where the action form attribute comes into play, since we have not specified an action, html defaults to submitting the form data back to the same script that defined the form 
     if you would like to have the user navigate to a new url an d handle the form input there you can specify the url you can also enter the name of a php file in the same directory as the current one 
          when you submit a form, the values will be stored in the $_GET or post methods 
     if you want to redirect an user when the form is done, use the action on the form 
          <form method='get' action='filename.php'>
          <input name='first' placeholder='your name here'>
          </form>

loops in html 
     if you use something in html inside an php loop, that html will be looped 

you can instead of using {} you can use : for the opening bracket and endfor for the ending one 
<?php 
for($i = 0; $i < 10; $i++) :
<p>we sell shoes</p>
<?php endfor; ?>

loop shorthand 
     <?php 
          $i = 0;
          while ($i <=10) :
          ?>
          <p>hello <?=$there?></p>
          <?php $i++ endwhile; ?>
sanitizing data 
     if you want to remove whitespace
          trim(thing that you want trimmed );
     make stuff as text 
          htmlspecialchars(thing);
     