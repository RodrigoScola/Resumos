
This is a summary of the [Build Your First Application](https://www.codeigniter.com/user_guide/tutorial/static_pages.html) module on CodeIgniter

CodeIgniter is a MVC framework, meaning Model, Controller and View

#### How to make a controller

Create a file at **app/Controllers/Pages.php** with the following code:

```php
 <?php 
namespace Appp\Controllers;

class Pages extends BaseController {
	public function index() {
		return view("welcome_message");
	}
	public function view($page = 'home') {
	// ...
	}
}
```

#### Creating page templates

To create an template, you need to create an php file at **app/Views/templates/header.php** and add the following code:

```html
<!doctype html>

<html>
<head>
<title>Tutorial</title>
</head>
<body>
	<h1> <?php echo esc(#title) ?></h1>
```


### Adding Logic To the Controller

Now you can write the `view` function on the controller, which basically is the thing that controls what is sent to the user;

in this function we are making the title uppercase on the first letter

```php
<?php 
public function view(string $page = 'home') {
	if (is_file(APPATH . 'Views/pages/' . $page . '.php')) {
		throw new PageNotFoundException($page);
	}
	$data['title'] = ucfirst($page);
	return view('templates/header', $data) . view('pages/' . $page) . view('templates/footer');
}
 
```

## Initializing a database

If this is your first time you will need the `msqli` extension uncommented on your `php.init` file, after that go to `app/config/Database.php`

I used `phpadmin` when creating a database because it seemed that it just worked.

For the configuration aspect, add the *hostname* as `localhost`, the *username* as `root` and the *database* as the database name you chose.

> [!important] The DBDriver will be MSQLi, you need to change it to `mysqli`

### Setting up the Model

Instead of writing database operations right in the controller, queries should be placed in the model. If you want to learn more about [[models]], click the link.




