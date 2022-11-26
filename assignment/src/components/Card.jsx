import { Badge, Button, Image, Link, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleCard = ({data}) => {
  //  console.log(data.show.image.medium)


    console.log()

  return (

<VStack bg="white" boxShadow="md"  key={data.show.id} maxW="sm" borderWidth="1px" borderRadius={5}  >
         
         <Image w="100%" alt={data.show.name} src={data.show.image.medium} h="100%"/>
        

          <VStack textAlign={"left"}  padding={3} w="full"  alignItems="left" spacing={3}>
        
          <Badge fontSize="sm" padding="0px 20px" variant="subtle" colorScheme="green" >Language - {data.show.language}</Badge>
          <NavLink to={`/show/${data.show.externals.thetvdb}`}>
           <Button  w="full" colorScheme="linkedin" >Book Now</Button>
          </NavLink>
          </VStack>
          
      

</VStack> 
      
 
  )
}

export default SingleCard
