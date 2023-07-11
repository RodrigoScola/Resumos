#html #css #frontEnd 
heading elements accomplish several things
     create structure, dividing the page in groups of increasingly soecific content
     create visual contrast, with lower-numbered headers like h1 displaying in a larger and more striking format 
     provide navigation and contextual information to web browsers, plugins, assistive technologies like screen readers

     having a keyword in a h1 will impact search results more than having the same keyyword in a p tag, because its assumed that words used in the main heading are bery important to the topic of your entire website
     generally you dont skip header numbers, you go h1,h2,h3,h4,h5,h6

real text vs text within images
     using real text instead of text within images provides a website with several key benefits
          sceen readers can transform the text into a voice-over
          users can scale or magnify the text for better legibility without losing image quality
          its less taxing on the browser to load real text versus requesting a large image assets from a server

head / metadata tags
     head <- machine-readable information (metadata) about the document, like metatags, title, style sheets, scripts...
     link <- specifies relashionships between the current document and an external resource, this element is most commonly used to link css, but can be site icons 
          <link rel='stylesheet' href='./styles.css'> <- for stylesheets
          <link rel='icon' href='iconname.ico' type='image/png'> <- for icons
     meta <- metadata that cannot be represented by other html meta-related elements like base,link,script,style,title

content sectioning 
     adress <- indicates that the enclosed html provides contact information for a person or people or an organization
          <address>
               <a href="mailto:email@email.com">email@email.com</a>
               <a href="tel:+ph0nenumber">phonenumber</a>
          </address>
     article <- self contained composition ina a document page, app, or site, is intended to be reusable (forum post, magazine, newspaper article);
     aside <- portion of a document that is indirectly related to the content (sidebars or call out boxes);
     footer <- information about the author/company, usually not that important content
     header <- the title of the website
     main <- the main content of the website
     nav <- a section representing a navigational part, having links to other sites/parts of the site
     section <- generic standalone section of a document,doesnt have a more specific semantic element to represent it
     blockquote <- the enclosed text is a quotation, also has a box that is around its element
          cite <- url that designates the source document or message for the info quoted, intended to point to information explaining the contex or reference for the quote
     dl <- description list, the element encloses a list of groups of terms and descriptions 
          dt <- is the thing that needs the description
          dd <- is the description itself
     div <- generic container for flow content, has no effect on the content or layout until styled in some way using css
     figure <- self contained content, has an img and a figcaption (figcaption optional if you want to explain what is happening)
     ul <- unordered list of items
     ol <- ordered list of items
          li <- the item on an ul or ol 
     p <- represents an paragraph
     pre <- preformatted text which has to be represented exactly as written

inline text semantics 
     a <- link1212
     abbr <- abreviation or acronym (hovering the mouse on it shows the complete thing)
          <abbr title='Cascading Style Sheets'>CSS</abbr>
     b <- bold text 
     br <- line break
     cite <- the author of something, used as the author in a <blockquote>
     code <- text styled as code
     data <- time related content, machine readable
     em <- tilted text
     kbd <- the keyboard input element (letters are in a box simulating the keys);
     mark <- highlighted text
     q <- quotation syntax
     s <- strikethrough text
     small <- small text representing side-comments 
     span <- is like a div (its element doesnt do anything until you use css or another similar thing)
     strong <- bold text



roles
     people using screen readers are not able to use the site properly if the site doesnt have the roles property
          <a href='#' role='link'>link</a>
     when using ol, ul or stuff like that, its quite confusing for the reader, if we dont want the screen reader to read it, use the role presentation
          <ul role='presentation'>
               <li>something</li>
               <li>something else</li>
          </ul>

aria label 

MAKING A WEBSITE RESPONSIVE ------------------------------------------------------------------
Sizing Elements
     em <- the font-size of the current element or the default base font-size set by the browser
          the default is 16px. so if you want the font size to be 32px
               font-size: 2em;
          you alter the default by specifying it and then changing it
               * {
                    font-size: 18px;
               }
               selector {
                    font-size: 1.5em;
               }
     rem <- root em, instead of checking, checks the html element
          html {
               font-size: 20px;
          }
          selector {
               font-size: 2rem;
          }

min and max
     min-property <- the minimum width that will be set on the browser
     max-property <- the maximum width that will be set on the browser

to scale an image 
     selector {
          overflow: hidden;
          max-width: 100%;
          height: auto;
          display: block;
     }
Scaling background Images 
     selector {
     }
Media Queries
     example 
          @media only screen and (max-width: 480px) {
               body {
                    font-size: 12px;
               }
          }

               @media <- begins a media query rule and instructs the CSS compiler on how to parse the rest of the rule
               only screen <- indicates what types of devices should use this rule, in early attempts to target different devices 
range
     if you dont know the size of the screen you can use in range
          @media only screen and (min-width: 320px) and (max-width: 480px) {
          }
DPI
     to target by resolution, you can use the min-resolution and max-resolution, these media features accept a resolution value in either dots
     per inch or dots per centimeter.

     @media only screen and (min-resolution: 3999dpi) {
          // css for high resolution
     }
if only one condition on the media query is true you use an comma 
     @media only screen and (min-width: 560px), (orientation: landscape) {

     }

flexbox
     inline-flex <- if you want to use flex but just by the parent element 

justify-content
     flex-start <- all items will be positioned in order, starting from the left, with no space between before them
     flex-end <- all items will be positioned in order, starting from the right, with no space between before them
     center <- the content will be centered to the center of the screen 
     space-around <- all items will be spaced with equal space between elements, with double the space between the first and the last elements
     space-between <- all items will be spaced with equal space between elements, without extra space between the first and the last elements

align-items 
     flex-start <-  all elements will be positioned at the top of the parent container.
     flex-end <-  all elements will be positioned at the bottom of the parent container.
     center <- the elemtn will be positioned between the top and the bottom of the container
     baseline <- the bottom of the content of all items will be aligned with each other
     stretch <- the items will stretch from top to bottom of the container, elements with specified height will not stretch

flex-grow
     the browser will adjust to whenever the window is growing or shrinking, if you want your items to adjust to that, you can use flex-grow
     using flex-grow, you can adjust how much your elements are stretched from the original screen value
          flex-grow: 1; <- the size will percentually be the same
          flex-grow: 2; <- the size will be 2x as wide;
     the same thing are with flex-shrink
          flex-shrink: 1; <- the size will percentually be the same
          flex-shrink: 2; <- the size will be 2x as wide;

flex-basis
     is the setter of the base stretch for the flex-grow and flex-shrink

using the flex you can bypass using the -basis,-grow,-shrink. by declaring one time, and specifying the first one (grow) second (shrink) third (basis);

flex-wrap 
     wrap <- child elements of a flex container that dont fit into a row will move to the next line
     wrap-reverse <- same thing as wrap, but the first line is going down, instead of the second one
     nowrap <- prevents items from wrapping, they will only shrink

align content
     flex-start <-  all elements will be positioned at the top of the parent container.
     flex-end <-  all elements will be positioned at the bottom of the parent container.
     center <- the elemtn will be positioned between the top and the bottom of the container
     baseline <- the bottom of the content of all items will be aligned with each other
     stretch <- the items will stretch from top to bottom of the container, elements with specified height will not stretch

flex-direction
     row <- from left to right starting from the top left corner
     row-reverse <- from right to left starting from the top right corner
     column <- from top to bottom starting from the top left corner
     column-reverse <- from bottom to top starting from the bottom left corner

flex-flow 
     to declaer flex-wrap and flex-direction
          

grid 
     collumn <- a collumn on a grid
     margin <- the margin from the collumn begins and ends
     gutter <- the space between each collumn

creating a grid 
     grid <- for a block level grid 
     inlinde-grid <- for an inline grid 

     an grid element will always try to transform itself to cover the entire area

creating collumns
     grid-template-columns: 100px 200px;
          first we determine that it has 2 columns, because of the number of arguments, then we define the width of the first column, then the second
     if the grid has more items, the grid will divide itself so that it matches, for example: if we have [a,b,c,d,e,f,g] in a collumn
          a,c,e,g will be 100px;
          b,d,f will be 200px;

creating rows
     grid-template-rows: 100px 200px;
          first we determine that it has 2 rows, because of the number of arguments, then we define the width of the first row, then the second
     if the grid has more items, the grid will divide itself so that it matches, for example: if we have [a,b,c,d,e,f,g] in a row
          a,c,e,g will be 100px;
          b,d,f will be 200px;

grid template
     grid template is the same thing as grid-template-rows or grid-template-columns, but you dont need to set them individually;

fractions
     the property will add all the fr and then divide from the total available space each thing will take
          grid-template-row: 1fr 1fr 1fr;
          each row will take 33%, because 100% / 3 will result in +- 33%;

repeat    
     if you dont want to hard code how much items each collumn or row will have, you can use the repeat(num, size);
          num <- how many columns / rows will have 
          size <- what the size of each row or column
      
minmax 
     you can clamp values for when the size of the screen is variable

grid gap 
     grid-row-gap: size <- the size of the horizontal gap
     grid-column-gap <- the size of the vertical gap

multiple row items 
     using grid-row-start and grid-row-end we can makes single grid items take up multiple rows
          or you can use grid-row: start / end ;
     
span 
     is how many collumns or rows you want to move towards to
          grid-row: 2 / span 2;
               from 2 to 4

grid template areas
     instead of using grid areas or stuff like that , you can use the area
          grid-template-areas: "head head"
                               "nav nav" 
                               "footer footer"
          header {
               grid-area: head;
          }
          nav {
               grid-area: nav;
          }

overlapping elements
     z-index <- witch element comes first

justify items 
     start <- aligns grid items to the left side of the grid area
     end <- aligns grid items to the right side of the grid area
     center <- aligns grid items to the center of the grid area
     stretch <- stretches all items to fill the grid area

justify content
    start <- aligns the grid to the left side of the grid container 
    end <- aligns the grid to the right side of the grid container
    center <- centers the grid horizontally in the grid container
    stretch <- stretches the grid items to increase the size of the grid to expand horizontally across the container
    space-around <- includes an equal amount of space between elements as there is before the first and last element
    space-between <-includes an equal amount of space between grid items and no space at either end
    space evenly <- places an even amount of space between grid items and at either end 
 
align items
     start <- aligns grid items to the top of the side of the grid area
     end <- aligns grid items to the bottom side of the grid area
     center <- aligns grid items to the center of the grid area
     stretch <- stretches all items to gill the grid area
align content
     start <- aligns the grid to the top of the grid container
     end <- aligns th egrid to the bottom of th grid container
     center <- centers the grid vertically in the grid container
     stretch <- stretches the grid items to increase the size of the grid to expand vertically across the container
     space-around <- includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last elements
     space-between <- includes an equal amount of space between grid items and no space at either end
     space-evenly <- places an even amount of space between grid items and at either end

justify self and align self
     specify how all grid items contained within a single container will position themselves along the row and column axes, respectively 
          justify-self specifies how an individual element should position itself with respect to the row axis.
          align-self <- how an individual element should position itself with respect to the column axis. this property will override align-items for any item on which its declared
               start <- positions grid items on the left side / top of the grid area
               end <- positions grid items on the right side / bottom of the grid area
               center <- positions grid items on the center of the grid area
               stretch <- positions grid items to fill the grid area
          
grid auto 
     rows <- specifies the height of implicity added grid rows
     columns <- specifies the height of implicity added grid columns
          they accept the same values as their explicit counterparts, grid-template-columns grid-template-rows
     
grid-auto-flow
     specifies whether new elements should be added to rows or columns and is declared on grid containers
          row <- specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements
          column <- specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements 
          dense <- this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added 
               you can pair elements togheter (grid-auto-flow: row dense);

the transform-origin is used to set the point around which a css transformation is applied.
     when performing a rotate, the transform origin determines around which point the element is rotated.

the @keyframes is used to define the flow of a css animation, use % to define key points and a name 
     @keyframes names {
          12% {
               color: green;
          }
     }
the animation-iteration-count sets how many times the animation should repeat
     if the animation should always run, set it to infinite 
the animation-timing-function sets how the animation should progress over time

the skew transform function rotates the element but also cuts the excess to keep the element from overflowing
