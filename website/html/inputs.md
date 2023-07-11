#html 

related: [[html - responsive design]]


A lot of the times in todays day and age, you want your website to be interactive, Of course not always and not fully interactive. But if you want to get some kind of information from an user you will need to use Inputs (or something else more shady)

Inputs are any type of Tag that the user can interact with and its dependable on user interaction. For example an type `text` attribute is valuable without the user interacting with it, but an type  `email` input is worthless without user interaction.

The default user input is written like this:

```html
<input />
```
## Attributes 

It sounds backwards to talk about attributes before talking about input types, but to understand the more complex types, it is necessary to understand the basics of attributes.

An attribute is something that adds to the input, like a restriction (you can only type numbers above a certain amount, you can only type an email address from this domain), something that you want this input to have.

attributes are written after the tag, adding a space between them, like this
```html
<input type='email' value='valuehere' />
```
VALUE –
The most important of them, some inputs like the text input, the value is not require for it to work, but for something like a checkbox, it is. The value attribute is what the user typed in that field, what the user selected, the value of the input.

Since the checkbox is something that the user is not supposed to alter, it needs a default value, that is why it is required in something like the checkbox or a radio button. To add the value input write:

<input value='valuehere' />
NAME –
It is mostly used in checkboxes or radio buttons, is what you call the value, for example: Imagine you own an online store, but you want to know the shipping that the user wants to have, if you dont use the name, you will just have a list of stuff that you dont know what to do with it, but if you have a name you can see exactly what that list means. To use it, write:

<input type='radio' value='UPS' name='shipping-type' />
PLACEHOLDER –
You can look at it like an instruction or a prompt to help the user to know what to write, the placeholder only appears when the value of the input doesn’t exist yet. To use the placeholder value write:

<input type='email' placeholder='johndoe@gmail.com' />
and will look something like this:

<input type="email" placeholder="johndoe@gmail.com">
REQUIRED –
This is the last of the inputs that we need to know before moving on. It makes so the input cannot be unfilled before moving on. It is a good practice to make every input in a form required. To use it, write:

<input type='email' required />
Input Types –
There are a lot of input types, more than i can reasonably cover in this post, or any succeding posts after this. If you want to learn more specifics types of inputs, head over to this url. w3Schools input guide

Text –
This is the default type, one that the user can type anything that they want, it can be used as an email, password, date input. But we really recommend for you to use the specific ones, because a lot of them have restrictions that you may want to use to your favor, like for a number input, you can have a minimum number and a maximum, you cant write text. For the email input, the user has to write an email address so and so on.

<input />
It will look something like this:
<input />

Password –
What the user types in this input is not visible to them, rather, the user will see *** instead of the password. To use it, write:

<input type='password' />
It will look something like this:
<input type='password' />

Email –
For this input it has something called a pattern, something that we will discuss in a later post, but in short. The user has to use @email.com. To use it, write:

<input type='email' />
It will look something like this:
<input type='email' />

Checkbox –
This input is when you want the user to pick between specific options, But what differs from the radio input type, is that the user is allowed to pick more than one option. To use it, you need to use the same name attribute, we will see more about that later in this section. But to use it, write:

<label><input type='checkbox' value='Vanilla' name='flavor' />Vanilla</label>
<!-- we will look into the label tag later in this chapter -->
It will look something like this:
<label><input type='checkbox' value='Vanilla' name='flavor' />Vanilla</label>

Vanilla
Radio –
The radio input is the same as the checkbox input. However the difference is that with the radio button, you can only pick between one value, or the other. It needs the same name value to correctly work.

<label><input type='radio' value='Rock' name='music-type' />Rock</label>
It will look something like this
<label><input type='radio' value='Rock' name='music-type' />Rock</label>

Rock
Label –
It is something that when you click it, focuses the input that you are trying to fill. There are a few ways for you to use it.

Using it with the input inside it, the most common. To use it write:
<label>What is your email <input type='email' required /></label>
2. Using an for attribute, makes it so you can have labels that are in different locations than the input. To use it, write:

<label for='#email_input'>What is Your email? Follow this image for instructions</label>
<img src="#' alt='image that will be followed for instructions' />
<input id='email_input' placeholder='what is your email? />
Example –
using what we learned, we can create an user registration form. Forms are something that needs a post in itself, Click here to learn about them.

<form>
     <label>
          What is your name?
          <input required  />
     </label>
     <label>
          What is your email?
          <input type='email'  />
     </label>
     <label>
          What is your age?
          <input type="number" min="13" max="122" />

     </label>
     <ul>
          <li><label for="vanilla">Vanilla</label></li>
          <li><label for="Chocolate">Chocolate</label></li>
          <li><label for="Strawberry">Strawberry</label></li>
     </ul>
     <fieldset>
          <p>Vanilla<input id="vanilla" name="iceCream" value="Vanilla"></p>
          <p>Chocolate<input id='Chocolate' name="iceCream" value="Chocolate"></p>
          <p>Strawberry<input id='Strawberry' name="iceCream" value="Strawberry"></p>
     </fieldset>
     <fieldset>
          <label><input type='radio' name="band" value="Rock" />Rock</label>
          <label><input type='radio' name="band" value="Band" />Band</label>
     </fieldset>
</form>
And will look something like this:

<form>
     <label>
          What is your name?
          <input required="">
     </label>
     <label>
          What is your email?
          <input type="email">
     </label>
     <label>
          What is your age?
          <input type="number" min="13" max="122">

     </label>
     <ul>
          <li><label for="vanilla">Vanilla</label></li>
          <li><label for="Chocolate">Chocolate</label></li>
          <li><label for="Strawberry">Strawberry</label></li>
     </ul>
     <fieldset>
          <p>Vanilla<input id="vanilla" name="iceCream" value="Vanilla"></p>
          <p>Chocolate<input id="Chocolate" name="iceCream" value="Chocolate"></p>
          <p>Strawberry<input id="Strawberry" name="iceCream" value="Strawberry"></p>
     </fieldset>
     <fieldset>
          <label><input type="radio" name="band" value="Rock">Rock</label>
          <label><input type="radio" name="band" value="Band">Band</label>
     </fieldset>
</form>
Conclusion –
If you want some information from the user, use an input! Just remember that there are many many other inputs than what we talked about, you can go to w3Schools input guide for more information.

