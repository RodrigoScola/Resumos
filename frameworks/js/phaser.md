#javascript 
phaser is an oop programming framework 
     create a game 
          const createSchene = () => {
               this.add.text(x, y, "string", { font: 'fontName', fill: 'fillColor' })
          }
          const game = new Phaser.Game({
               type: Phaser.AUTO,
               width: 450,
               height: 600,
               backgroundColor: "#5f2a55",
               scene: {
                    createScene
               }
          })

draw a circle 
     this.add.circle(x,y,width,fillColor);

load an image 
     if you want to load something, you need first to preload something 
          function preload() {
               this.add.image('somename','path');
          }
          function create() {
               this.add.sprite(x,y,'somename');
          }
to update something, add an function called update 
and add it to the config

storing state 
     create global variables for everything
     attach important variables to the scene itself by creating new props 
     create a gameState obj to keep track of the state 

