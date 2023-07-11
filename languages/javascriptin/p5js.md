#frontEnd #web #javascript

The canvas and Setup Functions

canvas is the thing that you show stuff, to create a canvas
    createCanvas(width,height);
        if the canvas is not explicity called, the element will be created with 100px width,100px height;
    change the canvas color 
        background(num) (number is between 0 and 255);
            to change the canvas to a random gray color
                background(Math.floor(Math.random() * 256))

to make the drawing stop looping
    noLoop();

you can change the framerate of the canvas by using the frameRate() function
    frameRate(1);

the draw() function is similar to the setup() function in that p5.js will automatically execute it at the right time. the draw() function will run after all 
the code in the setup() function is complete. Unlike the draw() function will repeatedly execute in what is known as the draw loop. the draw() function will 
execute indefinetelly until the sketch ends by closing the browser window or navigating away from the sketch.
    the draw loop will also terminate when the noLoop() function is called 

Drawing and coloring Shapes
    you can make an singular shape by using beginShape() and endShape()
        beginShape()
        point(x,y);
        circle(0,0,12)
        endShape()
    
    Point and line
        the point() function draws a single pixel to the canvas. requires an x and a y position 
            point(x,y);
        the line draws a line between two points, requires the x and y for the 1 and 2 point
            line(x1,y1,x2,y2);
    Square and Rectangle 
        you can draw a rectangle by determining the starting pos and the height and width   
            rect(x,y,height,width);
        you can draw a square with determining the x, y and the width;
            square(x,y,width);
    Circle and Elipse
        you can draw an Ellipse by determining the center with x and y, then adding the width and height 
            ellipse(x,y,width,height)
        you can draw an circle by determining the x and y and the width 
            circle(x,y,width);
    Triangle and Quad
        you can draw an triangle by determining the x and y of each point   
            triangle(x1,y1,x2,y2,x3,y3)
        and you can draw an quad by determining each x and y 
            quad(x1,y1,x2,y2,x3,y3,x4,y4);

the height and width variables get set whenever you use the createCanvas() function 

Background Colors
    by using just one value, you can make the background a grayscale, the value is between 0 and 255, 0 being pure black and 255 pure white.
        background(50);
    by adding 2 values, it transforms into an rgb value
        background(100,50,255);
    by using an string, you can add css color 
        background('DodgerBlue');
    by adding an # on that string, you can use an hex Code
        background('#ff00ff');
    by having 2 numbers you add an alpha value
        background(50,120);
    by adding 4 numbers you add an alpha value to the rgb 
        background(0,255,0,23);

Fill and noFill
    the fill() allows us to set the fill color, or the inside color of a shape
    the noFill() makes so the shape doesnt have color;
stroke() and noStroke()
    its the same thins as the fill but its the outside of the shape;
        stroke(color)
    the thickness of strokes can be set with the strokeWeight(), the function takes a numeric value as input for the width of pixels
        strokeWeight(num);
   
Animation In p5js
    you can see how many frames the animation is on with the frameCount built in variables
    you can change the frameRate with the framerate function
        frameRate(num);
    since the framerate is the number of time per second that the draw function is executed, you can increment positions and sizes and whatever 
        color += 1;
        alpha += 1;
        size += 0.5;

Speed And Direction
    they alter the position of the element, and thats what will happen
    everytime that draw() is called, the shape is created again, and what changed is the position, speed and direction are factor that change that
       let speed = 0;
       let direction = 0;
       let xpos,ypos;
       function draw() {
           cicle(xpos,yPos,height/2)
           xpos += speed; <- the higher the speed the further from the last point will be 
       }

Random 
    the random() returns a random value everytime it is called
        random() <- returns a value between 0 and 1 
        random(max) <- returns a value between 0 and the max value, excluding the max value;
        random(min,max) <- returns a value between min and max

Noise 
    when the random() is too random, theres a thing for that
        the noise() returns a random value based on the perlin noise,
    the noise() selects values that produce a more harmonic sequence of numbers
        https://static-assets.codecademy.com/Courses/Learn-p5/animation/random_ball_movement.gif
            this is with the random function 
        https://static-assets.codecademy.com/Courses/Learn-p5/animation/noise_ball_movement.gif
            this is with the noise function 

Origin
    the origin of the shape determines which point the shape is transformed from. for example, some built-in p5.js drawing functions such as rect() are oriented,
    the RectMode and EllipseMode() functions allow you to modify the location from which the shape is drawn by changing how the x and the y arguments are passed to 
    rect and ellipse
    When the rectMode(CENTER) is called, the x and y coordinates passed to the rect() changes to represent the center of the rectangle, instead of the 
    top left corner
        rectMode(CENTER);
            https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/rect_mode_center_2.png
        rectMode(CORNER);
            https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/rect_mode_corner_2.png
        ellipseMode(CENTER);
            https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/ellipse_mode_center_2.png
        ellipseMode(CORNER);
            https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/ellipse_mode_corner_3.png

Translate
    there are two ways to move a shape across the canvas. you can add the coordinates when you draw the shape, or you can use the Translate()
        one thing to be careful is that using translate() will move the entire sketch, to go around it, you use inside a function
        translate(x,y);

Rotate
    rotating an element in p5js means rotating the canvas from the top left at (0,0) , you can rotate with the rotate();
        rotate(angle)
            https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/rotation_grid_5.gif
    you can rotate using angles or using PI
        π = PI
        π / 2 = HALF_PI
        π / 4 = QUARTER_PI
        2 π = TWO_PI
    you can also convert a degree into an radian by calling the radians()
        rotate(radians(num));
    as with rectMode or ellipseMode, using angleMode() determines the value inside the rotate() is interpreted as either degrees or radians
        angleMode(DEGREES);
        angleMode(RADIANS);
        
Rotate Around a Shapes center
    the rotate() on its own is not enough to rotate a shape around its center. when we rotate() an element, it often moves off the screen because the whole
    sketch, first you need to translate() the shape to be in the middle of the canvas, then you need to specify the rectMode to center, then rotate()
        rectMode(CENTER);
        translate(width/2,height/2);
        rotate(frameCount);
        square(0,0,15);
    rotation from corner 
        https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/rotation_from_center_corner_3.gif
    rotation from center    
        https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/rotation_from_center_corner_3.gif

Scale 
    the scale() is another function that transforms the p5js coordinate system as shown in the image below, you can see that the scale() changes the size of the
    coordinate system aswell as the elements placed on it 
        https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/scale_graph.jpg
    it takes two arguments, if only one is specified, it will count for the both of them
        scale(x,y);
    similar to the rotate() it will scale based on the origin point 
        rectMode(CORNER || Center);
            https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/scale_corner_center.jpg

Shear
    shear functions skew a shape in a specific direction. the shape is sheared by the angle amount specified as the functions argument. in p5js shapes are 
    sheared in a clockwise direction.
        https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/shearX_and_Y.gif
    the shearX() angles a shape around the x-axis by the amount given as its argument. 
        shearX(0.5);
        rect(100,100,150,200);
            https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/shearX_1.gif
    the shearY() functionangles a shape around the y-axis by the amount specified as the argument.
        shearY(QUARTER_PI);
        rect(100,100,150,200);
            https://static-assets.codecademy.com/Courses/Learn-p5/grouping-transforming-shapes/shearY_1.gif
Push and Pop
    this helps with isolating transformations, wich is helpfull if you have a lot of them
        all you have to do is use push() on the beginning and pop at the end
            push()
            translate(width/2,height/2);
            fill(255,0,0);
            square(0,0,100);
            pop()

Relative Position and size  
    creating a canvas that matches the dimensions of your brouser, then createCanvas(windowWidth,windowHeight), they store the current width and height of your
    browser
    however, if the window is resized, then the proportions wont be the same, thats why you need the function windowResized() 
        function windowResized() {
            resizeCanvas(windowWidth,windowHeight);
        }
Interactions
    built in variables that store mouses position
        mouseX, mouseY
    detecting MouseEvents
        the mousePressed() is called whenever the mouse is pressed over the canvas;
        the mouseMoved() is called whenever the mouse moves while the mouse has not been pressed
        the mouseClicked() is called whenever the mouse is pressed and released
understanding the dist()
    os a tool for calculating the distance between two points, stationary or dynamic. this function is oftentimes used with mouse events. 
        https://static-assets.codecademy.com/Courses/Learn-p5/interaction/dist.svg
        dist(x1,y1,x2,y2);

using Key Input 
    using the key variable makes possible to use key input
        if (key === 'a') {
            textSize(22)
            text('the a key was pressed',mouseX,mouseY);
        }
    if you want the keys that arent on the keyboard, use the keyCode
        if (keyCode === '32'){
            text('the spacebar was pressed');
        }
    similar to how we can use mouse input to perform acttions in our p5js sketches, we can also use key events for interactions! these key events are used 
    with general key input for detecting specific key presses.
    the keyIsPressed returns true when any key is pressed.
        keyReleased() gets called whenever a key is released
        keyTyped() gets called for each time a specific key is pressed
        keyIsDown() whenever a key is being pressed

Images and Videos

Loading and Drawing Images 
    imlike shapes, media is considered an external asset. to load them you need to use special built in functions
        to loan an image    
            img = loadImage('filename.jpg')
        after loading an image, we use the image() to draw it. the function requires the image,x ,your  
            image(img,0,0);
        optionally, you can add the width and the height 
            image(img,0,0,drawnwidth,drawnheight);

the Preload funciton 
    if the image takes too long to load, it can lead to problems, thats why you can load it before any code is ran
        function preload() {
            img = loadImage('filename.jpg')
        }
Videos 
    to load a video 
        video = createvideo('filename.mp4')
    to play the video
        video.play()
to display the video, you can use the image()
        image(video,0,0);
    to hide the original html you can use the .hide()
        video.hide()

Video Options 
    if you want the video to loop  
        video.loop()
    to stop a video 
        video.stop()
    if you want to pause the video  
        video.pause
    to control the volume
        video.volume(numbetween 0 to 1);

filters
    you can apply filters on images 
        img.filter(filtername)
    some filters require an additional numerical argument
        img.filter(POSTERIZE,num);
    the filter applies to everything drawan on the canvas before its called.
    filternames
        gray    
        invert <- inverts Colors
        posterize <- reduces the detail of color
        threshold <- makes it deepfried black and white

Pixrl Manipulation
    the get() accesses the color of a specific puxel on the canvas. when given the pixel location, returns the color of that pixel as an array of the rgb values
        let pixelColor = get(28,35); returns [r,g,b,a]
    also the get can retrieve regions of the canvas, returning them as an image element 
        let partOfTheCanvas = get(x,y,w,h)
    when no arguments specified the get returns the whole canvas
        get()
    set() sets a pixel at a given location to a new color
        let red = [255,0,0,255]
        set(28,28,red);
    to see the changes, use the updatePixels()
        it also works on individual items
            updatePixels()
            img.updatePixels()
 
The Pixels array
    the pixels array is a special datastructure that enables us to acess and manipulate pixel data
        https://static-assets.codecademy.com/Courses/Learn-p5/media/pixelsDiagram.svg
    loading the Pixels array    
            Return the current pixel density
        pixelDensity()
            set the density to 1
        pixelDensity(1);
    before acessing the pixels array, you need to load the pixels   
        loadPixels()
    just like with get() and set(), you can also acess pixels for individual images or videos. to do this use the .loadPixels(), wich will populate the .pixels
        img.loadPixels()
        console.log(img.pixels);
Manipulating the pixels array

