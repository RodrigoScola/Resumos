#html 

related: [[html - responsive design]]

Html is one of the pillars of web development. The others are css and javaScript. Html is considered the most accessible language of those two, and is still so relevant today, being used in almost every website (in some aspects) and even some apps/game development.

## Tags

html is written in tags, a tag is a container that gives the shape of the content that you will write in them, for example:

to open a tag you write : <name of the tag>. And to close a tag, </name of the tag>
```html
<h1>Hello world</h1>
```
However some tags like images or inputs, don’t need the closing tag, that’s what we call a self closing tag.

```html
<input />
```

## Headings 

Headings are tags to show the user the topic change. Headings tags start with an h and a number from *1 to 6*.

<h1>heading level 1</h1>

<h2>heading level 2</h2>

<h3>heading level 3</h3>

<h4>heading level 4</h4>

<h5>HEADING LEVEL 5</h5>

<h6>HEADING LEVEL 6</h6>

Generally it is considered best practice to keep the headings in a sort of style:

level 1 – title
level 2 – title of something within the title, for example, if the website is all about food, the heading level 1 would be “FOOD” and the heading level 2 would be “FRUITS”
and the other levels follow the sub-title rule, if the subject is more specific than the title.
Text –
Another text tag is the paragraph text. It is the most used by far, to use it write:

<p>The text you want to show</p>
It is just text.

Images –
for an image to work properly, you need to offer one of two things. One is an URL hosted on the internet. another is a file path, wich is not that common, but still good to know.

to add an image you write:

<img src='#' alt="#" />
You may have noticed the # in the code, that is intentional and has a purpose, if you dont have an image ready and dont write anything in the source property, some frameworks might give you an error, adding the hashtag is a way for you to keep the framework happy and you wont need to change anything when you have that image ready.

the alt element is also important, the internet uses that to give an description to the people that cannot view it normally, so it reads it out loud. It is also a thing that you should look out for if you want to have your website boosted by search engine optimization, we will talk about that in a later chapter, but the whole process of being recommended more is called SEO (search engine optimization).

Links –
if you want to share something with the reader, you use a link. We call the link tag an a element. if you want to create a link element, write:

<a href="link here">Click me to go to the link</a>
However, when someone clicks the link, the page will open in the current page, that happens because of

Anchor Links
if that is not what you want, but instead to open in a new page, add an property of target=”_blank”.

Click me to go to another page
Anchor links –
If you have a long page with a lot of elements, it might be best to create something that the reader can navigate through, for example in this page, the headings have anchor elements that if you want to access them, you can go to the menu on the top of the page and click through them to jump to that specific part of the post.

Anchor links use the a tag, however the process is a bit different.

when you are typing an element that you want to be the target, you add a property called an id, an id is a text, without spaces that is unique to that element in that page, you can have the same id (it is a good practice to have a somewhat persistent structure) as long as that id is not in the same page. An example of that is:

<h1 id='page-title'>This is the title of the page</h1>
When adding an Anchor link, we type the id, and an # to symbolize that what we’re talking about is an id.

<a href='#page-title'>Click me to go to the page title</a>
Tags Inside Tags.
You can do that! A lot of the times, tags will flow to another line and most of the times you don’t want that when writing text

Might disturb the flow of the page.
to do that, just write an tag inside the tag.

<h4>This is a tag <a>Inside a tag</a></h4>
Lists
When you want to use a list, the process is not that intuitive at first, however as you use it more and more, you can find ways to use it in more creative ways.

Unordered Lists or Bullet point lists
its the most common type of list, one where the order of the items is not that important, to create one you write:

<ul></ul>
However if you write normal html you wont find any difference, that is because you need to write the list item tag, that will tell the code that the item that you want to add is an item and not just any other code. To create an working unordered list, write

<ul>
   <li>I am a list Item</li>
</ul>
and on the page it will look something like this.

I am a list Item
this is most useful when you don’t want the number. You use it with other things with css.

Ordered Lists or Numbered Lists
When you want to make a clear order for that list, you can use the Ordered List tag, to create one:

<ol></ol>
and the process to create an item is the same, just add the list item tag inside it to display the number.

<ol>
    <li>I am the first List Item</li>
    <li>And I am the Second Item</li>
</ol>
and the result will look something like this:

I am the first List Item
And I am the Second Item
And thats about it for the basics of the tag in html! Dont worry there is much much more about it. Seeing them just by themselves is not that impressive, however with just those tags, you can create some interesting things like this:

## Example Code

Don't worry about the section and div tags, we will learn about them in a bit.

<section>
<div id='list-items'>
  <ul>
    <li><a href="#video_1">This is my first Video</a></li>
    <li><a href='#video_2'>This is my second Video</a></li>
  </ul>
</div>
<ol>
<li>
<h3 id='video_1'>This is the title of my first post ever</h3>
<img src='https://www.youtube.com/watch?v=btucSPVAIRc&list=RDMMSgnSMftcFN0&index=12' alt='this is the first video i was talking about' target="_blank" />
</li>
<li>
<h3 id='video_2'>This is the second video i was talking about</h3>
<img src='https://www.youtube.com/watch?v=BoGrTWEt7y8' target="_blank" alt='video 2 thumbnail image' />
</li>
</ol>
</section>

```html
<section>
<div id='list-items'>
  <ul>
    <li><a href="#video_1">This is my first Video</a></li>
    <li><a href='#video_2'>This is my second Video</a></li>
  </ul>
</div>
<ol>
<li>
<h3 id='video_1'>This is the title of my first post ever</h3>
<img src='https://www.youtube.com/watch?v=btucSPVAIRc&list=RDMMSgnSMftcFN0&index=12' alt='this is the first video i was talking about' target="_blank" />
</li>
<li>
<h3 id='video_2'>This is the second video i was talking about</h3>
<img src='https://www.youtube.com/watch?v=BoGrTWEt7y8' target="_blank" alt='video 2 thumbnail image' />
</li>
</ol>
</section>
```