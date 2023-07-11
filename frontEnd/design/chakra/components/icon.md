#chakra-ui
if you want to add chakra icons 
     npm i @chakra-ui/icons 
     import {PhoneIcon, AddIcon} from '@chakra-ui/icons'

using third party library     
     import {icon} from '@chakra-ui/react'
     import {AnotherIcon} from '../icons/someIcon'
     function Example() {
          return <Icon as={AnotherIcon} />
     }
create custom icons 
     //without the createIcon
     import {Icon} from '@chakra-ui/react';
     <Icon viewBox='0 0 200 200' color='red.500'>
          <path
          fill='currentColor'
          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
     </Icon>
     you can style it with props too
     
     //with createIcon
     const UpDownIcon = createIcon({
          displayName: "upDownIcon",
          viewBox: "0 0 200 200",
          path: ( 
               <path
                    fill='currentColor'
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
               />
          )
     })