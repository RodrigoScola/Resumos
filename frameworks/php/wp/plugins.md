#wordpress #php 
how to create a new plugin
     go to wp-content/plugins
          create new folder 
     inside the file add a comment 
          /*
          Word Adder Plugin
          Description: the test of my first plugin
          Version: 1.0
          */
     if you want to alter a thing like title, posts...
          add_filter('the_thing','funName');
          function funName($post) {
               return $post . "<p>hello there</p>
          }

adding a menu page 
          function funcName(){
     add_options_page('main title', 'options title', 'manage_options', 'word_count_page', 'actualhtmlpage');
     }
     function actualhtmlpage() { ?>
     <h1>hello there</h1>
     <?php } ?>
     add_action('admin_menu', 'funcName');

using classes in php
     classes are good because you can rewrite your code programatically and not needing to be on the same file that you created the plugin
     rewriting the same code but with being inside a class 

     class NewClassForSomething {
          function __construct() {
               add_action('admin_menu', [$this, 'funcname]);
          }
          function funcName() {
               add_options_page('wordCount settings','word count','manage options','word_count_page',[$this,actualHtmlPage]);
          }
          function actualHtmlPage() { ?>
               <h1>Hello there</h1>
          <?php } ?>
     }
     $wordCount = new NewClassForSomething();

storing settings and optiondata 
          add_action('admin_init', [$this, 'settings']);
          function settings() {
          add_settings_field();

          register_setting('groupName','settingName',[
               "sanitize_callback" => 'sanitize_text_field',
               'default' => "0"
          ]);
          }

code explanation

class WordCountandTimePlugin
{
     // just a variable to be easier to change it 
     public $menuSettings = [
          "locationText" => 'Display Location',
          "slug" => 'word_count_page'
     ];
     function __construct()
     {
          //adding the actions, nothing special here
          add_action('admin_menu', [$this, 'adminPage']);
          add_action('admin_init', [$this, 'settings']);
     }
     function settings()
     {
          $section_name = 'wcp_first_section';
          //section name and slug
          add_settings_section('wcp_first_section', null, null, $this->menuSettings['slug']);
          add_settings_field('wcp_location', $this->menuSettings['locationText'], [$this, 'locationHtml'], $this->menuSettings['slug'], $section_name);

          //registering the setting on the group name
          //you can think of it as setting useState
          register_setting('wordCountPlugin', "wcp_location", [
               "sanitize_callback" => "sanitize_text_field",
               "default" => "0"
          ]);
     }
     function locationHtml()
     { ?>
          //wordpress will look for the section name for the state change 
          //you can think of it as the same as an onChange method
          <select name="wcp_location">
               <option value='0'>Beginning of post</option>
               <option value='1'>end Of post</option>
          </select>
     <?php }

     //function to show page html
     function menuHtml()
     { ?>
          <div class='wrap'>
               <h1>Word Count Settings</h1>
               //options.php to send the form to wp
               <form action="options.php" method="POST">
                    <?php
                    //register_namegroup location
                    settings_fields('wordCountPlugin');
                    // slug of the settings page 
                    do_settings_sections('word_count_page');
                    submit_button()
                    ?>

               </form>
          </div>
<?php }
     function adminPage()
     {
          //group name, title page, slugs, function to show html
          add_options_page('Word Count Settings', 'Word Count', 'manage_options', $this->menuSettings['slug'], [$this, 'menuHtml']);
     }
}
$wordCountandTime = new WordCountandTimePlugin();

if you want to check if a value in the database 
     get_option('section_name')
if you want to compare it to the value you are expecting in an input
     selected(get_option('section_name'), 'expected_value')
to not have more duplicate code you can pass arguments to the function rendering html 
     add_settings_field('name','text','function','slug','section_name',['params' => 'value'])

to have custom validation login
     on sanitize_callback, add a function with [$this, 'funcname'];
if you want to add an error to the page 
     add_settings_error('wcp...','newVal','err message');

if any of the configs are active
     if ((is_main_query() && is_single()) and (get_option('wcp_word_count', '1') || get_option('wcp_char_count', "1") || get_option('wcp_read_time', '1'))) {
               return $content + 'something';
          }

translations / localization
     in the main plugin file where you have the plugin name, description, version...
          add 
               Text Domain: pluginnamedomain
               Domain path: /languages
          path to the language folder

     if you want to call a translating function 
          esc_html__(string, textdomain);

     __construct() {
          add_action('init',[$this, 'languages'])
     }
     function languages() {
          load_plugin_textdomain('textdomain',false,dirname(plugin_basename(__FILE__)). '/languages')
     }
download the plugin loco translate 
     create template
          add language 
               translate the things that you used esc_html__('string',textdomain);
          
--------------------------------------------------
word filter 

// add sidebar menu
     class className {
          function __construct() {
               add_action('admin_menu',[$this, 'adminMenu']);
          }
          funciton adminMenu() {
               add_menu_page('docTitle','sidebartitle','manage_options','slug','functiontorenderhtml','icon','numbertobeindex')
          }
     }
// add sub menu 
     add_submenu_page('slug', 'submenutitle','adminsidebarText','manage_options','submenuslug',[$this, 'renderhtml']);

loading custom css files in a specific plugin page 
     funciton adminMenu() {
          $mainPageHook = add_menu_page('docTitle','sidebartitle','manage_options','slug','functiontorenderhtml','icon','numbertobeindex')

          add-action("load-{$mainPageHook}");
          }

manually handling admin form submit 
     function handleForm() {
          update_option('html_selector',sanitize_text_field($_POST['html_selector']))
     ?>
     <div class='updated'>
          <p>your form was updated</p>
     </div>
     <?php }

     <form method="post">
          <?php if ($_POST['just_submitted'] == 'true') {
               $this->handleForm
          } ?>
          <input type='hidden' name='just_submitted' value='true' />
          <input name='html_selector' />

JAVASCRIPT BLOCK EDITING -----------------------
     create a new plugin 
          create a new class 
               in the constructor 
                    add_action('enqueue_block_editor_assets', [$this, 'initClass']);
               
          the function   
               function initClass()
               {
                    wp_enqueue_script('blockType', plugin_dir_url(__FILE__) . 'index.js', ['wp-blocks']);
               }
          
     in the index.js
          wp.blocks.registerBlockType("uniquePluginName/plugin-name", {
          title: "frontend Title",
          icon: "icons",
          category: "common",
          //will be shown in the admin screen
          edit: () => {
               return wp.element.createElement("elementType", null, "textValue")
          },
          //save will be shown on the website
          save: () => {
               return wp.element.createElement("elementType", null, "elementValue")
          },
          })


block types attributes
     making the text dynamec
     in the register Block type add 
          attributes: {
               name: {
                    type: 'string'
               },
          }
     edit: function(props) {
          function updateSkyColor (e){
               props.setAttributes({name: e.target.value})
          }
          return (<div>
          <input onChange={updateSkyColor} value={props.attributes.skyColor} />
          </div>)
     }
     save: (props) {
          return <>
          <p> today the sky is {props.attributes.skyColor} </p>
          </>
     }
register a block type with the same name and / and add a new block type
         function __construct()
     {
          // add_action('enqueue_block_editor_assets', [$this, 'initClass']);
          add_action('init', [$this, 'initClass']);
     }
     function initClass()
     {
          // wp_enqueue_script('blockType', plugin_dir_url(__FILE__) . 'build/index.js', ['wp-blocks', 'wp-element']);
          wp_register_script('blockType', plugin_dir_url(__FILE__) . 'build/index.js', ['wp-blocks', 'wp-element']);
          register_block_type('ourplugin/quiz-block', [
               'editor_script' => 'blockType',
               'render_callback' => [$this, 'renderHtml'],

          ]);
     }
     function renderHtml($data)
     {
          return '<p>today the sky is ' . $data['skyColor'] . 'and the grass is ' . $data['grassColor'];
     }

     this way is better because wordpress saves each post as its own thing, if you need to change it you will have to manually resave every single post because wordpress is good :)

YOU CAN APPARENTLY RETURN HTML Now 

     function render html($data) {
          ob_start(); ?>


          <?php return ob_get_clean();
     }
     now everything in between is going to be returned 

adding css 

create a new file and import it on the js 
register a new style and link it to the biuld folder  register_style('name','route')
add it in register_block_type
     editor_style => 'stylename'

onChange save attributes 

onChange={(e) => {
     const newArr = props.attributes.answers.concat([])
     newArr[idx] = e;
     props.setAttributes({answers: newArr})
}}

how to have an useEffect wp and check on your components 

const startFunction = () => {
     wp.data.subscribe(() => {
          const results = wp.data.select('core/block-editor').getBlocks().filter(({name}) => {
               return name == 'pluginName'
          })
          ...code 
     })
}

if you want to lock updating or posting a post 
     wp.data.dispatch('core/editor').lockPostSaving('noanswer');
if you want to unlock it 
     wp.data.dispatch('core/editor').unlockPostSaving('noanswer');

react on the frontend 
in the php file 
     function renderHtml($data) {
          if (!is_admin()) {

          wp_enqueue_script('domename',plugin_dir_url(__FILE__). 'build/frontent.js',['wp_element' ,])
          wp_enqueue_style('someName',plugin_dir_url(__FILE__,'build/frontend.scss,['wp_element']);
          }
          ob_start()
          ?>

          <div class='someClassName'></div>

          <?php 
          return ob_get_clean();

     }

     in the other file
          import react and react dom 
     
          select the elements with an class 
          use ReactDOM.render to render the component 
          {
               import React from 'react';
               import ReactDOM from 'react-dom'
               const divs = document.querySelectorAll('.classname');
               divs.forEach(element => {
                    ReactDOM.render(<SomeComponent />, element);
               })
               const SomeComponent =  () => {
                    return (<div>
                    ...content
                    </div>)
               }
          }

passing data from the php data to the react component 

     renderHtml($props) {
          <div>
               <pre style="display:none">
                    <?php echo wp_json_encode($props) ?>
               </pre>
          </div>

     in the react 

     divs.forEach(element => {
          const props = JSON.parse(element.querySelector('pre').innerHTML);
          ReactDOM.render(<Component props={props}, element);
     })

adding custom options in a block component 
import { PanelBody, PanelRow} from "@wordpress/components"
import {InspectorControls} from '@wordpress/block-editor'
     return (
          <div>
          <InspectorControls>
				<PanelBody title="Background Color">
					<PanelRow>hello there</PanelRow>
				</PanelBody>
			</InspectorControls>
               ...rest
     )

altering the block menu config 
     import { InspectorControls, BlockControls, AlignmentToolbar } from "@wordpress/block-editor"
     
     <BlockControls>
     <AlignmentToolbar value={val} onChange={e => setVal(e)} />
     </BlockControls>

add a preview 
     in the wp.blocks.registerBlockType
          add prop example
               example: {
                    question: "What is your question?",
                    correctAnswer: 1,
                    answers: ["what is life", "what is something", "what is another thing"],
                    backgroundColor: "#EBEBEB",
                    textAlign: "center",
               }
adding an description
     add a description prop
the block.json
     it uses to load the plugins faster
          https://www.udemy.com/course/become-a-wordpress-developer-php-javascript/learn/lecture/31639752#overview
to get data from the server you dont need to use fetch stuff for that
you can query in the javascript itself
     wp.data.select("core").getEntityRecords('postType', 'actualPostType,{
          per_page: -1,
          ...query
     })
import {useSelect} from @wordpress/data
const allThings = useSelect((select) => {
     return select('core').getEntityRecords('postType','actualPostType',options);
})


you can add an rest api endpoint

in the __construct() 
     add_action('rest_api_init',[$this,'profHTML'])
     function profHTML() {
          register_rest_route('route','restRoute',[
               'methods' => WP_REST_SERVER::READABLE,
               'callback' => [$this, 'renderhtml']
          ]);
     }
     function renderHtml($data) {
          return ...
     }// you can also make a function that renders html in php you can use it in the frontend and in the backend

to make a rest fetch 
     import apiFetch from '@wordpress/api-fetch'

     useEffect(() => {
          const go = async () => {
               const res = await apiFetch({
                    path: '/featuredTeacher/v1/getHtml?profId=${id}`
                    method: "GET"
               })
               go()
               setHtml(res)
          }
     },[id])
     and to change in the html 
     <div dangerouslySetInnerHtml={{
          __html: html
     }}></div>

post metadata 
     to update the meta values 
          wp.data.dispatch('core/editor').editPost({
               meta: {
                    //value that you want to save
               }
          })
     but what if you have more than one block 
          const blocks = wp.data.select('core/block-editor').getBlocks().filter(item => item.name == 'blockname').map(v => v.attributes);

you also need to register the new metadata in php
     in the index.php
          register_meta('post', 'featuredTeacher', [
                    "show_in_rest" => true,
                    'type' => 'number',
                    'single' => false,
                    ]);

handle component unmounting 
     useEffect(() => {
          return () => {
               updateMeta()
          }
     })
and to query it in php
     $teacherQuery = new WP_Query([
          'post_type' => "post",
          "posts_per_page" => -1,
          'meta_query' => [
               [
                    'key' => 'featuredTeacher',
                    'compare' => '=',
                    'value' => $id
               ]
          ]
     ]);

--------------------------------------------------------------------
storing the plugins data in the databse 


if you want to run code whenever you activate a plugin 
     add_action('activate_new-pluginname/pluginFilename',[$this, 'funcname'])

create database table 

     global $wpdb;
     $tablename = $wpdb->prefix . 'pets';
 require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta("CREATE TABLE $tablename (
      id bigint(20) unsigned not null AUTO_INCREMENT,
      primary key  (id) //has to have 2 spaces :)
    ) $wbdb->get_charset_collate();");

insert in table 
     global $wpdb;
     $wpdb->insert($this->tablename, [
          "collumn" => value
     ]);

query table for data 
     global $wbdb;
     $pets = $wpdb->get_results("query");

that can be unsafe so wp helps 
     $wpdb-prepare(query,param);
     query = select * from table where species = %s limit 10
     param = ['dog'];

dynamic queries 
     getting from the url 
          use the $_GET

add to database and delete from the database 
     https://www.udemy.com/course/become-a-wordpress-developer-php-javascript/learn/lecture/26880980#overview

     