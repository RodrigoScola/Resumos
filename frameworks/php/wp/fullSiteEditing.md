#wordpress
on creating a new theme 
     you have to create a new folder in the themes
          create style.css file 
               /*
               Theme Name: your Theme Name
               */
          create index.php file 
               leave blank
          create templates folder  
               create index.html file 
          
index.html is the universal fallback
but if you want to have a fallback for a page, is the same as php, just create an single.html 

in the post editor if you add / you can access the post properties within the editor
     /post title - you get the posts title

to create blocks 
     create a subfolder (name doesnt matter)

to create a new block/component
     in that subfolder create a new file filename.js 
          wp.blocks.registerBlockType('blocktheme/name' ,{
               title: title,
               edit: ...
               save: ...
          })
     in a functions.php
          wp_register_script('bannerBlockScript',get_stylesheet_directory_uri() . '/build/banner.js',[
               'wp-blocks','wp-editor'
          ]);
          register_block_type('ourblockTheme/banner',[
               'editor_script' => 'bannerBlockScript'
          ]);
adding css in the editor
          add_theme_support('editor-styles');
          add_editor_style([
          'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i',
          'build/style-index.css', 'build/index.css',
     ]);

if you use <InnerBlocks /> it lets you add or remove other blocks instead of only the ones you added in code 
     import {InnerBlocks} from '@wordpress/block-editor'
     
if you want to save/show the content 
     in the SaveComponent()   
          <InnerBlocks.Content />

if you want to restrict the user to only some type of blocks 
     <InnerBlocks allowedBlocks={['core/paragraph','core/heading','core/list']} />

the more blocks you add it can get quite long so just create a new class for that 
     class JSXBlock{
           function __construct($name){
          $this->name = $name;
          add_action('init', [$this, 'onInit']);
     }
     function onInit(){
          wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
          register_block_type("ourblocktheme/{$this->name}", array(
               'editor_script' => $this->name
          ));
          }
     }

instead of having to code all the input types you can use the <RichText />
     to make it an h1 <RichText tagName="h1" />
     
adjusting the toolbar 
     on the RichText add a prop called allowedFormats={['core/bold']}
     if you want to add options on the toolbar 
          import {ToolbarGroup, ToolbarButton} from '@wordpress/components'
          import {BlockControls, RichText} from '@wordpress/block-editor'

adding a link of the website 
     

the theme.json is a great thing that you can change default settings and you can add your own settings to the mix such as color pallets
     {
	"version": 2,
	"settings": {
		"layout": {
			"contentSize": "800px"
               }
          }
     }

if you want to have a palette 
     in the settings obj 
          "color": {
               "palette": [
                    {
                         "slug": "computerFriendlyName",
                         "color: "#color",
                         "name": "Human Friendly"
                    }
               ]
          }
if you want to alter the default value of components 
     {"styles":{
          "blocks": {
               "core/button": {
                    "color": {
                         "text": "#FFFFFF",
                         "background": "var(--wp--preset--color--primary)"
                    }
               }
          }
     }}
to disable options globally
     in the settings obj 
               "typography": {
                    "fontSizes": []
               }

to disable options per block 
     in the settings obj 
          "blocks": {
               "core/button": {
                    "color": false,
                    "radius" :false,
                    "style":false
               }
          }
adding a menu 
     import { PanelBody, PanelRow, ToolbarGroup, ToolbarButton, } from "@wordpress/components"

php render callback 
     in the functions.php 
          when youre declaring the jsx object, have a rendecallback param and on an init function if the rendecallback is true then add render_callback and a function to args 

          {
               function onInit() {
                    $args = [
                         'editor_script'=> this->name
                    ]
                    if ($this->rendecallback) {
                         $args['render_callback'] => [$this,'renderFunctionName']
                    }
               }
          }
you can make a theme file so you can render different components with one function 
     function renderCallback($attributes,$content) {
          ob_start();
          require get_theme_file_path("/ourBlocs/${this}.php)
          return    ob_get_clean()
     }

to upload images 
     import {InspectorControls, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor'
     import {PanelBody, PanelRow} from "@wordpress/components"
          <InspectorControls>
				<PanelBody initialOpen={true} title="background">
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onFileSelect}
								value={63}
								render={({ open }) => <Button onClick={open}>Chose Image</Button>}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
     
when you choose a new image, sometimes the sizes are not that good, thats why you can use the custom sizes from php 
     import { apiFetch } from "@wordpress/api-fetch"
          useEffect(() => {
		const fetchData = async () => {
			const data = await apiFetch({
				path: `/wp/v2/media/${bannerId}`,
				method: "GET",
			})
			props.setAttributes({
				bannerUrl: data.media_details.sizes.medium_large.source_url,
			})
			console.log(data.media_details)
		}
		fetchData()
	}, [props.attributes.bannerId])

sometimes the user might have installed wordpress on a nested folder or something different than you are anticipating, this can break what you are trying to do,to avoid that you can pass data from php to js 
      function __construct($name, $callRender = null,$data = null)

      wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
          if ($this->data) {
               wp_localize_script($this->name,$this->name,$this->data);
          }

php saves the data in the html and to access it you can write
     window.scriptName.scriptValue

when its things that you dont really want customization, you can always  just add a blank component and route to a php file where you write your normal wordpress code there 

header and footer blocks 
     make blank components and add them on pages, copy and paste the php you did 

single page and post templates 

just create a new block and code page away

for individual pages
     if it doesnt have a template, then it will use the index template, to change that add a page.html file 

if its an hardcoded page like about-us, the template is index.html so it will not work 
     if you want a custom template for those kinds of pages,
          create front-page.html and paste your index page there 

if you want a template specific for archives you need to create a template called archived-postType.html

only allow certain block types in certain editor enviroment
     in functions.php 
          function allowedBlocks($allowed_block_types, $editor_ctx)
          {

               // if is on a page/post screen
               if (!empty($editor_ctx->post)) {
                    return $allowed_block_types;
               }
               return $allowed_block_types;
          }


          add_filter('allowed_block_types_all', 'allowedBlocks', 10, 2);

creating a blank template 
     when youre creating a page you dont need to create it by scratch, you can create a template that helps you speed up the process 
     it doesnt "import" the components, but if you add the same component, it alters it