#app_design 
*** Browser link styles *** 
     links are differentiated from regular text using blue color and underlines to draw users attentnion to their clickability

link styling 
     thie most important aspect of styling links is differentiating links from surrounding text 
     the default blue-text, underlined link style accomplishes this differentiation using two css props: color and text-decoration

tooltips and titles 
in addition to providing descriptive anchor text, it is sometimes helpful to provide additional context to explain links. this context can be particularly helpful when a link
contains or consist of an image, icon or another non-text element 

*** TO ADD TOOLTIPS TO A CLICKABLE ELEMENT LIKE A LINK, ADD A TITLE PROP ***
     its not that good but works 

hover state and cursor 
     in addition to styling elements, other signifiers and visual feedback can be utilized during user interaction, the pseudo-class :hover can be used to style elements on mouse hover
     in additon to text-style changes when hovering over a link, the users cursor should change from the default appearance to a pointing hand, the cursor prop is the one that controls this 

link states 
     active - when the link was clicked
     visited - when the user visited that page 
     hover - when the mouse is hovering the element

skeuomorphism and flat design 
     skeuomorphism is helpful for lowering the learning curve for users. if users can draw a metaphor betwen a familiar real-life object and an interface element , they are more likely to know how to use it without training
     flat design is an alternative approach to skeuomorphism which embraces the fact that computer interfaces dont need to model real-life interfaces 

buttons skeuomorphism styling 
     aims to imitate the appearance and interactivity of a real life button, often including a rased appearance while the button is unpressed and a pressed appearance when clicked 
     in button design it can be implemented using image files, css rules or a combination of both

buttons flat design 
     its called that because of its 2d appearance, elements appear flat on the screen and designers must rely on other styling and signifiers to indicate clickability 

buttons hover state 
     just as links, buttons should make use of hover states and the pointer cursor
     users expect buttons to be clickable, since buttons can consist of any number of total elements, all elements should be clickable, and display their clickability and should return in the same behaviour 

secondary navigation
     primary vs secondary navigation 
          primary navigation typically contains the most important links and buttons that need to be displayed on every page of the site 
          secondary navigation or breadcrum navigation, usually consists of a clickable list of pages or attributes that led to the current page. it can help users understand the extent of the site and also where they are currently
     benefit of using breadcrumbs
          provide a way for a user to quickly jump backward in their navigation of the site          
     
breadcrumb types 
     location - where you are with respect to the navigation structure of the website (list of pages)
     attribute - based on the attributes of the page or product that you are browsing,
     path - the pages that the user took to get to the current page 
     
