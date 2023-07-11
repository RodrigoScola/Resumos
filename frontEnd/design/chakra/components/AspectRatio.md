#chakra-ui 

```js
import { Aspectratio} from '@chakra-ui/react'
```

embed video
     to embed a video with a specific aspect ratio, use an iframe with src pointing to the link of the video 
     pass MaxWidth prop 
          {
               <Aspectratio MaxW='560px' ratio={1}>
               <iframe title='naruto'
               src='link'
               allowFullScreen />
          }
embeded Image 
     how to add 4 by 3 ratio
          <Aspectratio maxW='400px' ratio={4/3}>
               <Image src='link' alt='altname' objectFit='cover />
          </Aspectratio>
