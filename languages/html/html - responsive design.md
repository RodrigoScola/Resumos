
for an introduction on tags, see: [[tags-basic]]
open tag = `<h1>`
close tag = `</h1>`
add a paragraph = `<p>`
add a commentary = <!-- comment text here -->
add image = `<img src= "link">`
add a description on that image = `alt="text"`

## Anchor Elements
anchor elements can also be used to create internal links to jump to different section within a webpage
To create an internal link, you assign a links `href` attribute to a `#` symbol # plus the value of the id attribute to the element that you want to internally link to. you then need to add the same id
attribute the element you are linking to. an id is an attribute that uniquely describes an element.

```html
 <a href="#meme">jump to something</a>
<p id='meme'>hello there</p>
```
to add a dead link
```html
<a href='#'></a>
```
> useful where you don't know where the link will go to yet

to add a link in the middle of a sentence, use the tag `<a>` in the middle of the tag `<p>`
to add a blank link, just add a `#` after the `href` LINK text
```html
<p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>
<img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
```
> A blank link is a link that opens in a new page whenever you open it

to add an image within a link, you can add 
```html
<a href="link"><img src='#' />
```
to create a bullet point list:
```html
<ul>
	<li> 1 thing </li>
	<li> 2 thing </li>
</ul>
```
if you want that same thing to be numbered, you use <ol>

<ol>
      <li> 1. thing </li>
      <li> 2. thing </li>
      <li> 3. thing </li>

## Inputs

if you want to learn in a more in depth way, see: [[inputs]]

to write an text input:
```html
<input type="text">
```
if you want to make the input `required`, you need to add the `required` attribute:
```html
<input type="text" required>
```

to add an input placeholder:
```html
<input type="text" placeholder="placeholdertext">
```

if you want to have a form for the input to go through, you need a `form` tag
```html
      <form action="form url">
      <input type="text" placeholder="placeholder text">
      </form>
```
if you want a button after the text
      <button type="submit">text</button>
if you want a checkbox, you can use radio buttons:
      <label for LabelName>
      <input id="idNumber" type="radio" name"LabelName">checkboxName
      </label>
if you want a checkbox that accepts multiple values
      <label for="checkboxName"><input id="boxName" type="checkbox" name="checkboxName">boxName</label>
to add a value for when the user submits the answer, you have to add the value component
      <label for="checkboxName>< input id="boxName" value="boxName" type="checkboxName>boxName</label>
if you want it to be checked, just add the value checked
to divide things, add the component <div>
always add the tag
      <!DOCTYPE html>
            <html>
                  <code>
                  </code>
            </html>
 add the head and body for organization purpuses
       <head>
       <title> the best page erver</title>
       </head>
       <body>
       <h1> <h1>
       <p>
       </p>
       </body>
to change color just add 
      <thing style="color: color;">
to add a style element to everything in a subject:
      <style>
       h2{
             color: red;
       }
      </style>

to create a method. go to the beginning of the text and add

<style>
.name {
color: colorName;
}

      </style>

for classes for words you add a .
for classes talking to ids you add a #

       style classes
       color: colorName;
       font-size: fontSize;
       font-family: font-name;
       width: ImageWidth;
       height: ImageHeight;
       color: #fff;
       magin: marginSize
       padding : paddingsize;
            (you can change the )
       border-color: color;
       border-width: width;
            (if you want to be curved, add border-radius)
            (if you want to be circular, add a % (for circle is 50%))
       background-color: color;
       border-style:solid;

you can edit the size of things by the coordinate
padding
margin

            padding-Top
            padding-bottom
            padding-right
            padding-left

you can also do this
padding: 20 20 20 20
to add to all of the types
[type='typeName']
{
margin
padding
colorName
}
the rotation is: top right bottom left
to add a value proportional to the value of another thing:
us em instead of px
(em or rem are relative to another value, em is based on an items font)
(in = inches)
(mm = milimeters)

to import a google font:
paste this link above all code:

<link href="https://fonts.googleapis.com/css?family=FONT NAME"
to go to another font when the main one isnt available, just add another font after the main one

to give something an id, add the component id & the id that you want
you can add an style to that id
note that the second delcaration of a class wins because it came in second
in line style text will always come first
if you add an !important to the suffix (
pink-text{
color: pink !important;
}
)
the !important will always come first
when it comes to color, you can always add the colors code
ex: #000000
colors: black, silver,blue,green, dodger blue, green, orange, red, Fuscia, cyan,orchid
sienna
you can use the rgb code (rgb(0,0,0))
to add a backup, after the main property, add a , and the backup property
to align text:
text-align: justify;
text-align: center;
text-align: right;
text-align: left;
to make text be bold: use <strong></strong>
to underline text use: <u></u>
to do italics, use: <em></em>
to cross it out, use: <s></s>
if you want a line to divide things, use : <hr>
if you want to add a rgb color and alpha value , use this
background-color: rgba(4f5,45,45,0.1);
using text-transform you can change the capitalization of letters
Value Result
lowercase "transform me"
uppercase "TRANSFORM ME"
capitalize "Transform Me"
initial Use the default value
inherit Use the text-transform value from the parent element
none Default: Use the original text
you can change the vertical alignment by using line-height
you can change a format of a tag when you hover over it by creating a different style with the same name but adding:hove
positions
relative
absolute
sticky
fixed
to have two collumns:
float: left
positions the collumn on the left
float: right  
 positions the collumn on the right
when setting elements to overlapp and you want the inverse element to be the first one;
z-index: index (bigger is more in the front);
using the auto element will always have the middle as the default
you can select a hue of a specific color by using the notation hsl();
red hsl (0,100%,50%)
you can add a gradient by using the notation linear-grtadient
background: linear-gradient(gradient_direction, color1,color2,color3,...)
the repeating-linear-gradient() function is very similar to linear-gradient withe the major difference that it repeats
the specified gradient pattern.
to make a background image use an url instead, use the notation
background: url(url...)
you can transform the scale,rotation...
transform: scale();
the transform property is skewX() which skews the selected element along its x( horizontal ) axis by a given degree
you can make a shadow by using the notation box-shadow
box-shadow: offsetX,offsetY,blur-radius,spread-radius
The :: before and :: after pseudo-elements are used to add something before or after a selected element.
for the ::before and agter pseudo elements to function properly they must have a defined content property. this property
is usually used to add things to add things like a photo or text to the selected element. when the ::before and ::after
pseudo-elements are used to make shapes, the content property is still required

you can make animations by first assigning an id to the element you want to animate,
then you first make an animation name and its duration
animation-name: rainbow;
animation-duration: 4s;
then you use the notation @keyframes rainbow {
0% [
background-color:blue
]
100% {
background-color:green;
}
}
if you dont want to restart the animation whenever it finishes, you can stop by using the notations
animation-fill-mode: forwards;
when elements have a specified position such as fixed or relative, the css offset properties right,left,top and bottom can be
used in animation rules to create movement
to loop the animation use the notation animation-iteration-count: num;
allows you to control how many times you would like to looop through the animation
if you want to loop forever, alter the num to infinite
you dont need to add the 0% and the 100% on every @keyframe, you just need to add the keyframe where a change
is made
animation timing
animation-timing-function
there are a number of predifined keywords available for popular options. for example the default value is ease
ease: starts slow,speeds up in the middle, and then slows down again in the end
ease-out: quick in the beginning and then slows down;
the cubic-bezier function consists of four main points that sit on this 1 by 1 grid: p0,p1,p2,p3. they are the
start x and y, and the end x and y.
animation-timing-function: cubic-bezier(x1,y1,x2,y2);
Although the cubic bezier curve is mapped on a 1 by 1 coordinate system, and it can only accept x values form 1 to 0,
the y value can be set to numbers larger than one. this results in a bouncing movement that is ideal for simulationg the
juggling ball
the fieldset tag surrounds the entire grouping of radio buttons to achieve a better look and helps other that have disabillities
to understand what is being asked

<fieldset> // is a tag that wraps around the set of inputs surrounding it
<legend> // is the tag that surrounds the question;
if you want the user to pick a date
<input type='date'>
html has a time and a datetime element to standardize times.
media queries consist of a media type, and if that media type matches the type of device the document is displayed on, the styles
are applied. you can have as many selectors and styles inside your media query as you want.
@media (max-height: 100px) {
p {
font-size: 893px;
}
}
to make sure that an image is never bigger than the container its on
max-width: 100%
height: auto;
the simplest way to make your images properly appear on high resolution displays,such as the macbook pros retina displays is to define
their width and height values as only half of what the original file is.
instead of using em or px to size text, you can use viewport units for responsive typography. viewport units, like percentages are
relative units, but they are based off different items. viewport units are relative to the viewport dimensions (width or height)
of a device and percentages are relative to the size of the parent container element
vw(vewport width) 10vw would be 10$ of the viewports width;
vh (viewport height) 3vh would be 3% of the viewports height
vmin (viewport miniumum) 70vmin youd be 70% of the viewports smaller dimension(height or width);
vmax(viewport maximum ) 100vmax would be 100% of the viewports bugger dimension
placing the css property (display:flex) on an element allows you to use other flex properties to biuld a responsive page
adding displayL flex to an element turns into a flex container.this makes it possible to align any children of that element
into rows or collumns. you do this by adding flex-direction propertu to the parent item and setting it to row or collumn. creating
a row will allign the children horizontally and creating a collumn will align the children vertically.
other versions are row-reverse and column-reverse;
sometimes the flex items within a flex container do not fill all the space in the container. it is common to want to tell css how
to align and space out the flex items in a certain way. fortunatelym the justify-content property has several options to do this
but first, there is some important terminology to understand before reviewing those options
https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg
recall that setting a flex container as a row places the flex items side-by-side from left to right. A flex container set as
a collimn places the flex items in a vertical stack from top to bottom . For each, the direction the flex items are arranged is
called the main axis. for a row, this is a horizontal line that cuts through each item. and for a column, the main axis is a
vertical line through the items
there are several options for how to space the flex items along the line that is the main axis. one of the most commonly used is
justify-content: centerl wigh aligns all the flex items to the center the flex container
flex-start: aligns items to the start of the flex container. for a row, this pushes the items to the left of the container.
for a collumn, this pushes the items to the top of the container. this is the default alignment if no justify-content is
specified  
 flex-end: aligns items to the center of the main axis, with extra space plaaced between the items. the first and last items
are pushed to the very edge of the flex container. for example, in a row, the first item is against the left side of the container
, then the remaining space is distributed evenly among the other items.
space-around: similar to space-between but the first and last items are not locked to the edges of the container, the space is distribuited
around all the items with a half space on either end of the flex container
space-evenly: distributes space evenly between the flex items with a full space at either end of the flex container
align items :
flex-start: aligns items to the start of the flex container.
flex-end : aligns items to the end of the flex container
flex-shrink: allows an item to shrink if the flex container is too small. items shrink when the width of the parent container is smaller
than the combined widths of all the flex items within italics
takes numbers as values. the higher the number, the more it will shrink compared to the other items in the container.
for example, if one item has a flex-shrink value of one and other has a flex-shrink value of 3, the one with the value
of 3 will shrink three times as much as the other
flex-grow: the inverse of flex-shrink;
flex-basis : specifies the initial size of the item before css makes adjustments with flex-shrink or flex-grow;
to set several flex properties at once  
 flex: 1 0 10px (flex-grow: 1,flex-shrink:0,flex-basis:10px);
using the flex-wrap property tells css to wrap items. this means extra items move into row or column. the break point of where the wrapping
happens depends on the size of the items and the size of the container
css also has options for the direction of the wrap:
nowrap: this is the default setting, and does not wrap items
wrap: wraps items onto multiple lines top to bottom if they are in rows and left to right if they are in collumns
wrap-reverse: wraps items onto multiple lines from bottom-to-top if they are in rows and right to left if they are in collumns
order property is used to tell css the order of how flex items appear in the flex container by default, items will appear in the
order they come in the source html, the property takes numbers as values and negative numbers can be used
align-self: allows you to adjust each items alignment idividually, instead of setting them all at once. this is useful since other common
asjustment techniques using the css properties float,clear, and vertical align DO NOT WORK ON FLEX ITEMS;
align self accepts the same values as align-items and will override any value set by the align-items property
grid
to make a grid, grid-template-rows: repeat(2,30px );
grid-template-columns: repeat(3, 43px);
grid-template-rows || columns : minmax. its used to limit the size of items when the grid container changes size. to do this you need
to specify the acceptavle size range for your item.
grid-template-columns: 100px minmax(50px,200px);
in the codde above, grid-template-collumns is set to create two columns, the first is 100px wide, and the second has the minimum value of
50 and the maximum value of 200;

      you can use absolute and relative units like px and em in css grid to define the size of rows and columns, you can use this aswell
      fr : sets the column or row to the width or height of its content automatically
      auto: sets the column or row to the percent width of its container
      grid-template-columns: auto 50px 10% 2fr 1fr;
      to create a gap use
            grid-column-gap:10px;
            grid-row-gap:20px
      instead of using both notation, you can use just one
            grid-gap
      to make some items take more space on rows or collumns
            grid-row: 2 /  4;
            grid-column: 2 / 4;
      instead of using each argument as justify-self( for the x axis) or align-self(for the y axis);
            you can use the justify-items notation to justify every grid element
            you can use the align-items notation to align every grid element
      you can group cells of your grid together into an area and give the area a custom name. do this by using
            grid-template-areas like this
                  grid-template-areas:
                        'header header header'
                        'advert content content'
                        'footer footer footer'
                  the code above merges the top three cells together into an area named header, the bottom three cells into a footer area,
                  and it makes two areas in the middle row; advert and content. Note: every word in the code represents a cell and every
                  pair of quotation marks represents a row. in addition to custom lavels, you can use a period(.) to designate an empty cell
                  in the grid;
            then using that, you can place items in the grid area;
                  after creating an area template for your grid container, as shown in the previous challenge, you can place an item
                  in your custom area by referencing the name you gave it. yo do this you use the property grid-area property on an
                  item like this:
                  item1 [
                        grid-area: header;
                  ]
                  this lets the grid know that you want the item 1 class to go in the area named header. in this case, the item will
                  use the entire top row because that whole row is named header;
                  the grid-area property you learned in the last challenge can be used in another way. if your grid doesnt have an
                  areas template to reference, you can create an area on the fly for an item to be placed like this:
                  item1 { grid-area: 1/1/2/4;}
                  this is using the line numbers you learned about earlier to define wher the area for this item will be. the numbers
                  in the example above represent these values
                  grid-area: horizontal line to start at / vertical line to start at / horizontal line to finish at/ vertical line to end at

      when you used grid-template-columns and grid-template-rows to define the structure of a grid, you entered a value for each row
      or column you created
            lets say you want a grid with 100 rows of the same height. it isnt very practical to insert 100 values individually. fortunatelly
            theres a better way - by using the repeat function to specify the number of times you want your column or row to be repeated, followed
            by a comma and the value want to repeat
                  heres an example that would create the 100 row grid, each row at 50px tall.
                        grid-template-rows: repeat(100,50px)
                  you can also repeat multiple values with the repeat function and insert the function amongst other values when defining
                  a grid structure
                        grid-template-columns: repeat(2,1fr 50px ) 20px;
                  this translates to
                        grid-template-columns: 1fr 50px 1fr 50px 20px;

auto-fill allows you to automatically insert as many rows or columns of your desired size as possivle depending on the size of the container
you can create flexible layouts when combining auto-fill with minmax
repeat(auto-fill,minmax(69px, 1fr));
when the container changes size, this setup keeps inserting 69px columns and stretching them until it can insert another one
is as many as you can on that second argument
auto-fit works almost the same as auto-fill. but auto-fit stretches to the size of the container

types of input
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number" name='age' id='number' min='' max=''>
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
dropdown Menu
<select name='' id=''>

<option value=''><option>
</select>

<input type='radio'> == just one option applies;
<input type='chackbox'> == more than one option applies;

to make an image || text responsive
max-width:300px;
margin-left:auto;
margin-right:auto;
display:block;
height: auto;

to do video

  <iframe
        id="video"
        height="315"
        src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
        frameborder="0"
        allowfullscreen
      ></iframe>

dotted - Defines a dotted border
dashed - Defines a dashed border
solid - Defines a solid border
double - Defines a double border
groove - Defines a 3D grooved border. The effect depends on the border-color value
ridge - Defines a 3D ridged border. The effect depends on the border-color value
inset - Defines a 3D inset border. The effect depends on the border-color value
outset - Defines a 3D outset border. The effect depends on the border-color value
none - Defines no border
hidden - Defines a hidden border

you can make a simple router on html
<a href="filename.file"></a>
styling text
<strong></strong> <- makes text bold
<em></em> <- italicizes text
<video src="#" width="320" height="480" constrols> Video not supported</video>
if you want to open a link on another tab
<a href="blank" target="_blank">Learn More</a>

links
linking to relative Page
if you are linking to a page on straight html you have to import from the directory
<a target="_blank" href="../../filename.html"> hyperlink</a>
linking at will
you can add links to images
<a href="#" target="_blank"><img src="#" alt="this is a bear" /></a>
link to the same page
<a href="#id"><a>

HTML tables
to create a table

<table>
</table>
to create a row
<table>
<tr>
</tr>
</table>
to add data
<table>
<tr>
<td></td>
<td></td>
</tr>
</table>
table headings
make a new tr above or below the actual table
using the scope you can define if its a collumn or a row
<table>
<tr>
<th scope="col">name1</th>
<th acope="col" >name2</th>  
 </tr>
<tr>
<td>thing1</td>
</tr>

               </table>

spanning collumns
what if the table contains data that spans multiple collumns
example: a personal calendar could have events that span across multiple hours or days
colspan makes an item uses 2 collumns
rowspan makes an item uses 2 rows

organizing the table
long tables can be sectioned off using the table body element <tbody>
the <tbody> element should contain all of the tables data excluding the table headings

<thead> is the same as tbody

     <header> <- see what is on the top
     <nav> <- shows that its navigational links
     <main> <- the dominant content
     <footer> <- bottom of the content
     <section> <- defines elements in a document such as chapters, headings or any other area of the document
     <article> <- holds content that makes sense on its own, ex articles, blogs, comments,magazines
     <aside> <- mark additional information that can enhance another element but isnt required to understand the main content
     <figure> <- is the same thing as an section but for images
     <figcaption> <-  captions the images and if the figure moves, the figcaption moves with it
     <embed /> <- plays whatever media

CSS

linking the css file on an html element
you can use the <link> element to link html and css files together, the <link> element must be placed within the head of the html file,

<link href="" rel=''>
rel <- describes the relashionship between the html file and the css file.
examples
stylesheet
if you want to select everything in a css tag \* {
}

to make the text uppercase on css
.uppercase {
text-transform : uppercase
}

attributes
you can style based on any atribute
img[src\*='name'] {
border-color : black;
border-width : 20px;
}
Specificity
is the order by which the browser decides which css styles will be displayed. A best practice in css is to style elements
while using the lowest degree of specificity so that if an element neeeds a new style it is easy to override
chaining
when you have elements inside elements, when you want to alter a bunch of elements inside another element you can just chain them togheter
header.div.h1 {

          }

descendand combinator
selecting elements that are nested withing other html elements,
example

<ul class='main-list'>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
in the css would be
.main-list li {

               }

text
style {
font-family: font-name;
font-size: sizepx;
font-weight: bold;
}
align {
text-align: right; <- aligns the text to the right of its parent
text-align: left ; <- aligns the text to the left of its parent
text-align: center; <- centers text inside of its parent element
text-align: justify; <- spaces out text in order to align with the right and left side of the parent
}  
 font weight {
bold <- bold font weight;
normal <- normal font weight (the default value);
lighter <- one font weight lighter than the element parent value;
bolder <- one font weight bolder than the element parent value;
}
text transform {
uppercase;
lowercase;  
 }
text layout {
letter-spacing: 2px;
word-spacing: 3px;
line-height: 1.4;
text-align: center;
}
@font-face
fonts can also be added using a @font-face ruleset in your css stylesheet instead of using a <link> element in your html document.
@font-face {
font-family: "my font"
src : url('fonts/Roboto.woff2') format('woff2'),
url('fonts/Roboto.woff') format('woff'),
url('fonts/Roboto.ttf') format('truetype');
}
the box model {
width and height <- the dith and height of the content area
padding <- the amount of space between the content area and the border
border <- the thickness and style of the border surrounding the content area and padding
margin <- the amount of space between the border and the outside edge of the element
}

     borders {
          width <- the thicness of the border. can be set in pixels or with the keywords thin, medium , thick
          style <- The design of the border. you can render 10 different styles
               hidden <- displays no border
               dotted <- displays a series of rounded dots. the spacing of the dots is not defined by the specification and is implementation-specific.
                    the radius of the dots is half the computed value of the same side`s border-width;
               dashed <- display a series of short square-ended dashes or line segmanes. the exact size and length of the segments are not defined by the
                    specification and are implementation specific
               solid <- display one solid straight line
               double <- displays two straight lines that add up to the pixel size defined by border-width
               groove <- siplays a border with a carved appearance. it is the opposite of ridge.
               ridge <- displays a border with an extruded appearance
               inset displays a border that makes the element appear embedded when appplied to a table cell with border-collapse set co collapsed, this value behaves like groove
               outset <- displays a border that makes the element appear embossed it is the opposite of inset. when applied to a table cell with
                    border-collapse set to collapsed, this value behaves like ridge
     }

     miniumum and maximum height and width
          min-width <- ensures a minimum width of an elements box
          max-width <- ensures a maximum width of an elements box

     overflow
          controls what happens to content that spills or overflos, outside its box. the most commonly used values are
               hidden <- when set to this value, any content that overflows will be hidden
               scroll <- a scrollbar will be added to the elements box so that the rest of the content can be viewd by scrolling
               visible <- when set to this value, the overflow content will be displayed outside of the containing element. note, this is the default value

     visibility
          hidden <- hides an element
          visible <- displays an element
          collapse <- collapses an element

     the new box model
          * {
               box-sizing: border-box;
          }
     posititon {
          static <- the default value (does not to be specified)
          relative <- allows you to position an elemetn relative to its default static positon on the web page
               top <- moves the elemetn down from the top
               bottom <- moves the element up from the bottom
               left <- moves the element away from the left (to the right);
               right <- moves the element away from the right (to the left )
                    selector {
                         position: relative;
                         top: 50%;
                         left: 120px;
                    }

          absolute <- all other elements on the page will ignore the element and act as if the element is on the background
          fixed <- stays on the browsers screen no matter what
               selector {
                    position: fixed;
                    top: 0px;
                    left: 0px;
               }

          sticky <- is the better one if you are doing multiple of something because when you want the sticky the elements have their own positions
          but the absolute they stack on each other

     }
     z-index
          it makes so that one is in front

     float
          is used for wrapping text around an image while moving elements left and right for layout purposes is better left to tools like css grid and flexbox,
          left <- moves the element as far as possible
          right <- moves the element as far as possible

     clear
          if the element hits the side that its the side specified by the clear notation, it will move downwards
               left <- the left side of the element will not touch any other element within the same containing element
               right <- the right side of the element will not touch any other element within the same containing element
               both <- neither side of the element will touch any other element within the same containing element
               none <- the element can touch either side

if you want to make a pop up box on the browser
window.alert('message');

instead of using display flex for everything
if you want items to be in the same line and they are text you can use
display inline-block

if you want to center a div horizontally
selector {
margin: auto;
}
instead of adding marginElements or something like that, just add margins to the selector of the items

when using linear gradient, the gradient is an image, so if you want to have an solid color first use the background prop
background: linear-gradient(90deg, rgb(255, 0, 0), rgb(0, 255, 0));
// just a note, freecodecamp made each parameter their own page, now thats handholding

if you want to have color stops, you can add a % after the color

sometimes when elements have the height more than the parent element, they will disappear, its because the default display prop is block, and when two block elements are next to each other they stack up
to position two divs set their display to inline-block

if you want to select the last of something in a type you can use the :last-of-type selector

if you want to make inline inputs
<label>
<input type='radio' name='somename' class='inline' /> this is the first name</label>
.inline {
width: unset;
}

if some elements are too high on the line, you can combat this by using the vertical align to middle
vertical-align: middle

attribute selection
instead of using the id you can use the selector
input[name='password']
you dont need to use name, you can use any data you want

if you want to just round some borders
border-radius: 9px 15%;

if you inspect an element, you will notice that the pixel amount is not what you set if you have padding and margins
to combat this \* {
box-sizing: border-box;
}

to select every element that doesnt have an rule you use :not(example)
div:not(.classname) {

      }

styling an entire page can be a nightmare, pseudo selectors are here to help
selector[class~='classname'] will select any element that INCLUDES that class name, without it, only selects the classes with the exact classnames

      to make something only for screen readers
            span[class~="sr-only"] {
                  border: 0;
                  clip: rect(1px, 1px, 1px, 1px);
                  clip-path: inset(50%);
                  -webkit-clip-path: inset(50%);
                  width: 1px;
                  height: 1px;
                  }

to select the first element of a type
element:first-of-type
to select the last element of a type
element:last-of-type

to make an object
$colors : (
color: $red,
)

to make a for loop
@for $i from 1 trough 12 {
            .col-#{$i} {
width: 100px
}
} # is used to interpolate text

to map keys in object
@each $key, $value in $colors {
}

if you want to avoid repetition, you can alter the html with css  
 p: Before {
content: "SOMETHING"
}

you dont need to use the flexbox when youre trying to make things in a line
you can make the objects with position relative and float left/right

the ::before and ::after selectors
will select pseudo elements after the targeted selectors

if you want to have lazy loading in an image add
<img src='#' alt='#' loading='lazy' />

lazy loading is the process of loading something only when you need it

to make 3 columns in grid
selector {
display: grid;
grid-template-columns: size size size;
}

the minmax makes the grid more responsive
minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);

sometimes you dont know how many elements youre going to have, so its good to be dynamic
using the grid-auto-flow takes row or column

if you want something to be inline, instead of using display flex, use the prop inline
{
.class > li { // selects the first element and make everything inline with this element
display: inline
}
}
