#php 
get website name 
     <?php bloginfo('name') ?>

the loop  
     the famous loop is the core of wordpress
     if you want to loop through a post and get its content, title...
          {
               <?php 

               while(have_posts()) {
                    the_post() ?>
                    <p><a href="<?php the_permalink()?>"><?php the_title() ?></p>
                    <?php the_content() ?>
                    <?php }
               ?>
          }
     you have to do it for everything, even if the posts is only one

if you want to have different stuff for a single post
     create a file named single.php
     do the loop
     add the stuff that you want

if you want to have different stuff for a single page
     create a file named page.php in the theme folder 
     do the loop 
     add the stuff that you want


header and footer
     if you want to have a header
          create a file in the theme called header.php 
     if you want to have a footer 
          create a file in the theme called footer.php 

how to execute scripts 
     create a file named functions.php 
     importing a file     
          function actualFunctionName () {
               wp_enqueue_style('stylename',get_stylesheet_uri());
          }
          add_action('funname','actualFunctionName');

convert static html template into wordpress 

     how to import css 
          on functions.php 
               wp_enqueue_style('main',get_theme_file_uri('build/style-index.css'))
          
     instead of adding the scripts or packs in the html, use in the wp_head() function
          wp_enqueue_style('custom-font','external-url');

if you want to get an image from the file system 
     url : <?php echo get_theme_file_uri('images/library-hero.jpg') ?>

title tag for each screen
     on functions.php    
          add_action('after_setup_theme','uniFeatures');

getting the id of a post
     get_the_ID()

parent and children pages
     getting the id of a parent post 
          wp_get_post_parent_id()
     getting the title 
          get_the_title($parentId)
     getting the permalink 
          get_permalink($parentId)

page menus 
     to get every page and its associations
          wp_list_pages();

to work with list pages you need to have associative arrays

associative arrays are like objects 
     $animalSound = [
          'cat' => 'meow',
          'dog' => 'bark',
     ];
     echo $animalSound['cat']
     
if you want to only list the parent page 
     wp_list_pages([
          'title_li' => null,
          "child_of" => 
     ])

to create page menus automatically
     in functions.php 
          functions menu_functions () {
               register_nav_menu('program-menu-name','human friendly name');
          }
          add_action('after_setup_theme','menu_functions');
     in the page 
          <?php wp_nav_menu('program-menu-name')?>

getting the poster author
     inside the loop 
          the_author_posts_link()
     
pagination
     echo paginate_links()

custom post pages
     create new folder in wp-content called mu-plugins
     create new file 

     function eventTypes()
{
     register_post_type('name', [
          'show_in_rest' => true,
          'supports' => ['title', 'editor', 'excerpt'],
          'rerwite' => ['slug' => 'events'],
          'has_archive' => true,
          'public' => true,
          'menu_icon' => 'dashicons-calendar',
          'labels' => [
               'name' => 'events',
               'add_new_item' => 'Add new event',
               'edit_item' => 'edit Event',
               'all_items' => 'All Events',
               'singuler_name' => 'Event',
          ]
     ]);
}
add_action('init', 'eventTypes');


distplay custom posts 
     $varbane = new WP_Query([
          'posts_per_page' => 2,
          'post_type' => 'post name that you gave in the function'   
     ])
     when having to click to an custom post archive 
          <?php echo get_post_type_archive_link('event') ?> 
     to have a different style for the new post_type
          create new file called single-eventname.php
     when you create a new post type, it doesnt support an archive
          when you just go to the site and /event it says page not found
     in mu-plugins/post-types.php


sometimes you want to have a custom exerpt and not alter the entire website for it 
     get_the_exerpt() ? the_exerpt() : wp_trim_words(get_the_content, 19);
     
custom fields
     when you want to upload more than title and text 
          add advanced custom fields(acf) 

custom query 
     $posts = new WP_Query([
          'posts_per_page' => 2,
          'category_name' => 'category',
          'post_type' => 'page'   
     ]);
     while ($posts->have_posts()) {
          $posts->the_post();    
     } wp_reset_postdata();

ordering custom queries 
     $query = new WP_Query([
          'posts_per_page' => 2,
          'order_by' => 'title', // post_date rand meta_value
          'meta_value' => 'event_date',
          'order' => 'asc'
     //filtering past events 
          'meta_query' => [
               [
                    'key' => 'event_date',
                    'compare' => '>=',
                    'value' => date('Ymd'),
                    'type' => 'numeric'
               ]
               //for more things, nest in an array
          ]
     ])

editing default queries
     instead of having a lot of queries you can just alter default one, that way you can still use a lot of features 
          in functions.php    
               funciton funname($query) {
                    if (!is_admin() && is_post_type_archive('event') && $query->is_main_query()) {
                             $query->set('posts_per_page', 1);
                              $query->set('meta_key', 'event_date');
                              $query->set('order_by', 'meta_value_num');
                              $query->set('order', 'asc');
                              $query->set('meta_query', [
                                   [
                                        'key' => 'event_date',
                                        'compare' => ">=",
                                        'value' => date('Ymd'),
                                        'type' => 'numeric'
                                   ]
                              ]);
                    }
               }
               add_action('pre_get_posts','funname')

pagination with custom queries
     in the query 
          $query = new WP_Query([
               ... query 
               'paged' => get_query_var('paged',1);
          ])
     echo paginate_links([
          'total' => $query->max_num_pages ,

     ])

     to get information about the url 
          get_query_var()
     
create relashionships between content
     after creating a new post type, create field group
     on the field type - relashionship
          $related_programs = get_field('fieldname');
          foreach($related_programs as $program) { ?>
               <h1><a href="<?php get_the_permalink($program) ?>"><?php echo get_the_title($program) ?></a></h1>
          <?php } ?> 
           $event_posts = new WP_Query([
               'post_type' => 'event',
               'orderby' => 'meta_value',
               'meta_key' => 'event_date',
               'order' => "desc",
               'meta_query' => [
                    [
                         'key' => "event_date",
                         'compare' => '>=',
                         'value' => date('Ymd'),
                         'type' => 'numeric'
                    ],
                    [
                         'key' => "related_programs",
                         'compare' => 'like',
                         'value' => '"' . get_the_ID() . '"',
                    ]
               ]
          ]);

adding thumbnail features
     on functions.php 
          function features() {
               add_theme_support('post-thumbnails');
          } // that alone only works with blog posts
     on mu folder and post type 
          'supports' => ['editor','title', 'thumbnail']
     to show the featured image
          <?php the_post_thubmnail() ?>
     whenever you upload an image, it actually uploads 5 of them, but on different sizes
     you can tell to add more with another custom size 
          in funcitons.php    
               function features() {
                    add_theme_support('post-thumbnails);
                    add_image_size('name',width,height,crop?);
               }
          add regenerate thumbnails plugins
     to display the images 
          on the template 
               <?php the_post_thubmnail('image-size-name') ?>

to crop an image from the sides 
     in funcitons.php
          add_image_size('name',width,height,'left,right or center','top right or center');
     however not one thing is good 
          install manunal image crop tomasz
     
page banner dynamic background image
     is not featured image
     in wp a post can only have 1 single featured image // why?

REUSABLE COMPONENTS
     in function.php
     <?php function page_banner () {
          ?>
               <div>
               ...
               </div>
          <?php 
     } ?>

you can also create another file 
     get_template_part('/components/filename');
          normal php code
     you can add another argument function and make it dinamic 
     get_template_part('/components/filename', get_post_type()); // this will work with filename-program filename-event and make different components for the same thing

live search
     ub tge src/index.js
          import $ from 'jquery';
               class Search {
                    constructor() {
                         this.openButton = $(".js-search-trigger");
                         this.closeButton = $('.search-overlay__close');
                         this.searchOverlay = $(".search-overlay");
                         this.events()
                    }
                    events() {
                         this.openButton.on('click',this.openOverlay.bind(this));
                         this.closeButton.on('click',this.closeOverlay.bind(this));
                    }
                    openOverlay() {
                         this.searchOverlay.addClass('search-overlay--active');
                    }
                    closeOverlay() {
                         this.searchOverlay.removeClass('search-overlay--active');
                    }
               }
               export default Search;

keyboard shortcuts 
     $(document).on('keyup',this.funcname.bind(this));
     funcname(key) {
          if (key.keyCode chrome://flags/#enable-force-dark== 25) {
               //do something
          } 
     }
to fetch data of all posts
     http://localhost:10004/wp-json/wp/v2/posts
to fetch data of all pages
     http://localhost:10004/wp-json/wp/v2/pages
adding more information you can add ?per_page=1 // returns 1 number
to add id 
     posts/id 
add search 
     ?search=something
doing dynamic search instead of posts or pages 
     when(req1, req2).then((req1,req2) => {
          const combined = posts[0].concat(pages[0]);
               ...
     })
adding something to the api request 
     go to functions.php
          add_action('rest_api_init', 'uniFeatur');
          function uniFeatur() {
               register_rest_field('post','author_name',[
                    'get_callback' => function () {return get_the_author()}
               ])
          }
custom post type 
     by default a custom post type would not be included in the post api
          go to mu-plugins
               post types 
                    on the register_post_type 
                         show_in_rest => true
importing file to php functions
     require get_theme_file_path('path')
creating a new search api 
     function uniRegisterSearch() {
          register_rest_route('university/version','search',[
               'methods' => WP_REST_Server::READABLE
               'callback' => 'funcname'
          ]);
     }
    function uniSearchRes($reqData)
{

     $mainQuery = new WP_Query([
          'post_type' => [
               'post', 'page', 'teacher', 'program', 'event', 'campus'
          ],
          's' => sanitize_text_field($reqData['term'])
     ]);
     $results = [
          'generalInfo' => [],
          'teacher' => [],
          'program' => [],
          'event' => [],
          'campus' => [],
     ];
     while ($mainQuery->have_posts()) {
          $mainQuery->the_post();
          $type = '';
          switch (get_post_type()) {
               case 'teacher':
                    $type = 'teacher';
                    break;
               case "program":
                    $type = 'program';
                    break;
               case "event":
                    $type = 'event';
                    break;
               case 'campus':
                    $type = 'campus';
                    break;
               default:
                    $type = 'generalInfo';
                    break;
          }
          array_push($results[$type], [
               'ID' => get_the_ID(),
               'title' => get_the_title(),
               'permalink' => get_the_permalink()
          ]);
     }
     return $results['teacher'];
}
     add_action('rest_api_init')

search logic thats aware of relashionships
__its best to create another field for posts 
the search engine will grab everything in title and in body, meaning if you search for biology and the body has the word math,
it will also grab math teachers, math events...

     create another query

// reduced bc of space 
function uniSearchRes($reqData)
{
     $mainQuery = new WP_Query([
          'post_type' => [ 'post', 'page', 'teacher', 'program', 'event', 'campus' ],
          's' => sanitize_text_field($reqData['term'])
     ]);
     $results = [ 'generalInfo' => []];
     while ($mainQuery->have_posts()) {
          $mainQuery->the_post();
          $type = ''; $excerpt = null;
          $relatedCampuses = null;
          $event_date = new DateTime(get_field('event_date'));
          switch (get_post_type()) {
               case "program":
                    $type = 'program';
                    $relatedCampuses = get_field('related_campus');
                    break;
               case "event":
                    $type = 'event';
                    array_merge($results['event'], [
                         'month' => $event_date->format('M'),
                         'day' => $event_date->format('d') ]);
                    break;
               case "post":
                    $type = 'generalInfo';
                    array_merge($results[$type], [
                         'author' => get_the_author(),
                    ]);
                    break;
          }
          if (has_excerpt()) {
               $excerpt = get_the_excerpt();
          } else {
               $excerpt = wp_trim_words(get_the_content(), 18);
          }
          if ($relatedCampuses) {
               foreach ($relatedCampuses as $campus) {
                    array_push($results['campus'], [
                         'title' => get_the_title($campus),
                         'permalink' => get_the_permalink($campus),
                    ]);
               }
          }
          array_push($results[$type], [
               ...arr
          ]);
     }
     if ($results['program']) {
          $programsMeta = [ 'relation' => "OR" ];
          foreach ($results['program'] as $item) {
               array_push($programsMeta, [
                    'key' => 'related_programs',
                    'compare' => "LIKE",
                    'value' => '"' . $item['ID'] . '"'
               ]);
          }
          $programRelashionship = new WP_Query([
               'post_type' => ['event', 'teacher'],'meta_query' => $programsMeta]);
          while ($programRelashionship->have_posts()) {
               $programRelashionship->the_post();
               if (get_post_type() == 'teacher') {
                    array_push($results['teacher'], [
                         ...arr
                    ]);
               }
          }
          //to avoid duplicates
          $results['teacher'] = array_values(array_unique($results['teacher'], SORT_REGULAR));
     }
     return $results;
}
making the search page without js
     create file page-search.php
     make an form that redirects to /?s=term
          <form method="GET" action="<?php echo esc_url(site_url('/')) ?>">
               <input name='s' type="search" />
               <button type="submit">Submit</button>
          </form>

managing roles 
          add ultimate planner roles  
     create role 
          go to post-type 
               register_post_type('event',[
                    'capability_type' => 'event',
                    'map_meta_cap' => true,
               ])

open registration
     configurations on admin wp site
          settings - general membership - anyone can register 
          now users can register 
create registration page 
     check if user is signed in 
          wp_is_user_logged_in()
     logout user 
          echo wp_logout_url()
     to lead to user page 
          echo wp_login_url();
          echo wp_registration_url()
     display users profile image           
          echo get_avatar(get_current_user_id(),size);
to redirect users from the dashboard when the sign up/log on
     functions.php  
          add_action('admin_init',funcname);
          function funcname() {
               $currUser = wp_get_current_user();
               if (count($currUser->roles) == 1 && $currUser->roles[0] == 'subscriber') {
                    wp_redirect(site_url('/'))
                    exit;
               }
          }
to not show admin bar to subscribers 
     function subscriberFunc()
     {
          $currentUser = wp_get_current_user();
          if (count($currentUser->roles) == 1 && $currentUser->roles[0] == 'subscriber') {
               show_admin_bar(false);
          }
     }
     add_action("wp_loaded", 'subscriberFunc');

on registration page theres a big wordpress logo that if you 
click it you are going to be redirect it to wordpress.com 
to change it to your website 
     in functions.php
          function newLoginHeaderUrl() {
               return esc_url(site_url('/'));
          }
     the logo is not an image, its an css background image 
     if you want to change it 
          in fucntions.php
          function newLoginLogo()          {
               wp_enqueue_style('main', get_theme_file_uri('build/..file'));
          }
          add_action('login_enqueue_scripts', 'newLoginLogo');

in the login page the title says powered by wordpress 
to change that 
     add_filter('login_headertitle','funcname');
     function funcname() {
          return get_bloginfo('name');
     }

user generated content 
     register_post_type('note', [
          'show_in_rest' => true, //you cant work with it if its false
          'public' => false,
          'show_ui' => true, //show in admin dashboard
     ]);

$.ajax({
     url: url,
     type: 'req_type',
     success: function,
     error: function,
}) // custom request

if you are not logged in, you will not be able to delete/edit a post 

     in functions.php 
          wp_localize_script('name','data',[
               'root_url' => get_site_url(),
               'nonce' => wp_create_nonce('wp_rest')
          ])
     will create a number that is on a session
     $.ajax({
			url: universityData.root_url + "wp-json/wp/v2/note/95",
			beforeSend: (xhr) => {
				xhr.setRequestHeader('X-WP-Nonce',universityData.nonce)
			}
		})
selecting the parent of an element
     $(e.target).parent('selector')
     getting the id 
     <li data-id="<?php echo get_the_ID ?>">
     note.data('id')

to make an input read only 
     <input readonly />

whenever you are fetching a post from the server you need to add new data,
you need to add some required data 
     data : {
          status: 'publish', //not be saved as draft 
          //if you are adding content to a post type 
          title: val,
          content: val,
     }
to add new post 
url /wp-json/wp/v2/${postType}/
type: 'post'


right now every user is not able to add a new note, to fix that 
     got ot mu-plugins/post-types
          go to note post type 
               register_post_type('note',[
                    'capability_type' => "note",
                    'map_meta_cap' => true,
               ])

          go to the subscriber role in the wp-admin 
     edit_published_notes
     delete_notes	
     publish_notes
     edit_notes
     delete_published_notes

however this will always show in the rest api
to fix it 
     when you have the request to post something
          var newPost = {
                    title: $(".new-note-title").val(),
                    content: $(".new-note-body").val(),
                    status: "private",
               }
     in functions.php 
          add_filter('wp_insert_post_data', 'makeNotePrivate');
          function makeNotePrivate($data)
               {
                    if ($data['post_type'] == 'note' && $data['post_status'] !== 'trash') {
                         $data['post_status'] = 'private';
                    }
                    return $data;
               }
     now the title displays private...
          to fix it 
               echo str_replace("Private: ", '', esc_attr(get_the_title())) 

to not let ppl add html 
        if ($data['post_type'] !== 'note') return null;
     $data['post_content'] = sanitize_textarea_field($data['post_content']);
     $data['post_title'] = sanitize_text_field($data['post_title']);

per user post limit 
     in functions.php make note private
            if (count_user_posts(get_current_user_id(), 'note') > 4) {
          die('You have created too many posts');
     }
     add_filter('wp_insert_post_data', 'makeNotePrivate', 10,2); //2 is the num of params
     function makeNotePrivate($data, $postArr)
{
     if ($data['post_type'] !== 'note') die();
     if (count_user_posts(get_current_user_id(), 'note') > 4 && !$postArr['ID']) {
          die('You have created too many posts');
     }}
custom rest 
when a user deletes a note, the rest sends back a count of how many slots they have left 
     add_action('rest_api_init', 'uni_custom_rest');
     function uni_custom_rest()
{
     register_rest_field('note', 'user_note_count', [
          'get_callback' => function () {
               return count_user_posts(get_current_user_id(), 'note');
          }
     ]);
}

adding likes to profile 
     user has to be logged in first 
     user can only add one like
     user can 'like' again but it removes one 
     
     getting all from likes from a specific teacher
      <?php $likeCount = new WP_Query([
                              'post_type' => 'like',
                              'meta_query' => [
                                   [
                                        'key' => 'teacher_id',
                                        'compare' => '=',
                                        'value' => get_the_ID(),
                                   ]
                              ]
                         ]);
     getting if user liked already
       $existsVal = 'no';
                         $exists = new WP_Query([
                              'author' => get_current_user_id(),

                              'post_type' => 'like',
                              'meta_query' => [
                                   [
                                        'key' => 'teacher_id',
                                        'compare' => '=',
                                        'value' => get_the_ID(),
                                   ]
                              ]
                         ]);
                         if ($exists->found_posts) {
                              $existsVal =  'yes';
                         }
                         ?>
programatically create and delete posts 
     function createPost ($data) {
          $teacher = $data['teacher_id'];
          wp_insert_post)[
               'post_type' => "like",
               'post_status' => 'publish',
               'post_title' => 'title",
               'post_content' => 'content',
               'meta_input' => [
                    'teacherid ' => $teacher
               ]
          ]
     }
     and you send the data with the prop data on the body or data if youre using ajax

you can check users permissions in the php code itself 
     current_user_can('permission');
          remember to add a nonce code
               beforeSend: (xhr) => {
				xhr.setRequestHeader("X-WP-Nonce", universityData.nonce)
			},
fetch an html from an attribute
				const likeCount = likeBox.find('.like-count').html();
     
getting the id of an post 
     <?php echo $query->posts[0]->ID ?>


plugin development 

query vars 
     https://www.udemy.com/course/become-a-wordpress-developer-php-javascript/learn/lecture/8362044#overview
     