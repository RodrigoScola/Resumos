install 
     npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5

inputs 
     import { Input } from '@chakra-ui/react';
to change the size of the input 
     extra small size 
          xs (24px) 
     small 
          sm(32)
     medium 
          md(40px)
     large
          lg(48px)
     
color mode
     chakra comes with built in support for managing color mode in the apps 
     by default most of the components are compatible of dark mode 
setup 
     update the theme config to determine how chakra should manage color mode updates 
     add ColorModeScript to the application and set the initial color mode of the application should start with light, dark or system 
     {
          import { extendedTheme} from '@chakra-ui/react 
          const Cookie = require('universal-cookie');
          const cookie = new Cookie();
          

          const config = {
               useSystemColorMode: true,
               initialColorMode: cookie.get('@store/color-mode'),
          }
     }
behavior of ColorMode 
     if useSystemColorMode is true, the system color is used as default, initialColorMode is the fallback if system color
     if initialColorMode = system , system-color will be used as default and initialColorMode is the fallback if system color mode istn resolved
difference between initialColorMode = system and useSystemColorMode
     if useSystemColorMode = true, we will always try to match the users system color and fallback to initialColorMode with this behavior the colorMode toggle wont have any effect 
     if initialColormode system we will try to match uses system color and fallback to light after the user has toggled the value 

https://chakra-ui.com/docs/features/color-mode

changing ColorMode 
     to manage color mode in the application, you can use the hooks 
          useColorMode gives you access to the current color mod and a function to toggle it 
               {
                    function Example(){
                         const {colorMode, toggleColor} = useColorMode()
                         return (
                              <div onClick={toggleColor}>
                                   <button>Click me to toggle modes</button>
                              </div>
                         )
                    }
               }
useColorModeValue
     change any value or style based on the color mode
          const value = useColorModeValue(lightModeValue,darkModeValue);
               {
                    function StyleColorMode() {
                         const { toggleColorMode } = useColorMode()

                         const bg = useColorModeValue('red.500', 'red.200')
                         const color = useColorModeValue('white', 'gray.800')
                         return (
                         <>
                              <Box mb={4} bg={bg} color={color}>
                              This box's style will change based on the color mode.
                              </Box>
                              <Button size='sm' onClick={toggleColorMode}>
                              Toggle Mode
                              </Button>
                         </>
                         )
                         }
               }
     
customize theme 

customizing theme tokens      
     to extend or override a token in the default theme, import the extendedTheme and add the keys youd like to override
     if youd like to update the colors in the theme to include the brand colors, heres what you do 
          {
               import {extendTheme} form '@chakra-ui/react'
               const theme = extendTheme({
                    colors: {
                         brand: {
                              100: "#f7fafc",
                              900: "#1a202c",
                         }}})
               function Appendix () {
               return(
                    <ChakraProvider theme={theme}>
                         <App />
                    </ChakraProvider>
                    )}
               function App() {
                    return <div bg='brand.100'></div>
               }
          }

customizing component styles 
     the main idea is most components have default or base syles (baseStyle) for different sizes and syles for different visual variants

customizing single components 
     a component style consists of baseStyle, sizes, variants
     heres what the component style obj looks like 
          const ComponentStyle = {
               baseStyle : {
                    //styles for different sizes ('sm','md','lg');
               },
               sizes: {
                    // styles for different visual variants ('outline','solid')
               },
               variants :{
                    // default values for 'size' and 'variant'
               },
               defaultProps: {
                    size: '',
                    variant:'
               }
          }

overriding a theme 
     {
          const theme = extendTheme({
               components: {
                    Button: {
                         baseStyle:{
                              fontWeight: 'bold'
                         },
                         sizes: {
                              xl: {
                                   h: "56px",
                                   fontSize: "lg",
                                   px: "32px"
                              },},
                         variants: {
                              'with-shadow': {
                                   bg: 'red.400',
                                   boxShadow: "0 0 2px 2px #efdfde',
                              },
                              solid: (props) => ({
                                   bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
                              }),
                         },},},})
          // when you use
          <Button size='x1' variant='with-shadow'>subscribe</Button>
     }

customizint global styles 

to add global styles, update the theme.styles.global key in the theme. global styles can be a style obj or function 
     {
          import { extendTheme } from '@chakra-ui/react'
          import { mode } from '@chakra-ui/theme-tools'
          const theme = extendTheme({
          styles: {
          global: {
               // styles for the `body`
               body: {
               bg: 'gray.400',
               color: 'white',
               },
               // styles for the `a`
               a: {
               color: 'teal.500',
               _hover: {
                    textDecoration: 'underline',
               },
               },
          },
          },
          })
     }

component style 
     writing component styles in a way that is easy to maintain over the life of a growing and changing project is a challenging task 
     to solve this, use a style configuration or styleConfig  
base styles and modifier styles 
     common modifier styles includes 
          size - component can have different sizes 
          variant - component can have different variants (outline,solid,ghost)
          color scheme - component can have different color schemes (outline button with a red color scheme)
          color mode - a component can change its visual styles based on color mode 
     
single part and multipart components
     single part component is a component that returns a single element (button renders a button)
     multipart component is a component that has multiple parts and require these parts to work correctly 
          Tabs component consists of TabList, Tab, TabPanes and TabPanel

Components 
     Aspectratio - image or video in a certain Aspectratio
          maxW - the maxWidth 
          ratio - the ratio that you want
     Box 
          as - you can change the render to make it a button if you want 
     