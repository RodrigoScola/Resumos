<?php

echo 'hello there \n ';

class Shortcode
{
     protected $defaultAtts = [
          'id' => "",
          'class' => '',
          'name' => ''
     ];
     public $atts = [];
     public $shortcodeName;
     public function get_default_atts()
     {
          return $this->defaultAtts;
     }
     public function set_default_atts(array $ndatts = [])
     {
          return $this->defaultAtts = array_merge($this->defaultAtts, $ndatts);
     }
     public function get_atts()
     {
          return $this->atts;
     }
     public function get_att($key)
     {
          return $this->atts[$key];
     }
     public function get_shortcode_name()
     {
          if ($this->shortcodeName == '') {
               return get_class($this);
          }
          return $this->shortcodeName;
     }
     public function set_shortcode_name(string $name = null)
     {
          if ($name == null) {
               $name = get_class($this);
          }
          $name = ucfirst(strtolower($name));
          return $this->shortcodeName = $name;
     }
     public function init($name, $items)
     {
          $this->set_shortcode_name($name);
          $this->add_atts(array_merge([
               'name' => get_class($this)
          ], $items));
          if (method_exists($this, 'render')) {
               // add_shortcode($this->get_shortcode_name(), [$this, 'render']);
          }
     }
     public function add_atts(array $natts = [])
     {
          if (empty($this->atts)) {
               $this->atts = $this->defaultAtts;
          }
          $this->atts = array_merge($this->atts, $natts);
          return $this->atts;
     }
}
class Button extends Shortcode
{
     function __construct($name, $atts = [])
     {
          $this->set_default_atts();
          parent::init($name, $atts);
     }
}
$btn = new Button('BuTton', [
     'color' => "blue",
]);
var_dump($btn);
