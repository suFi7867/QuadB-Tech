import { Badge, Box, Button, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const FetchData = ({id})=>{
  return fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
  .then(res=>res.json())
}


const SingleMoviePage = () => {

  const {id} = useParams();
console.log(id)

  const [data,setData]=useState({})
    const [loading,setloading]=useState(true)
  
    useEffect(()=>{
      handleFetch()
    },[])
  
    const handleFetch = ()=>{
  
      setloading(true)
      try{
          FetchData({id}).then((res)=>setData(res))
          setloading(false)
      }catch(e){
          setloading(true)
          console.log(e.message)
      }
  
    }
    console.log(data)


  if(loading){

    return  <Stack margin={"auto"}  maxW={"1400px"} spacing={5} >
        <Box bg='blue.600'  color="white" fontSize={"2xl"} fontWeight="semibold" borderRadius={5} w='100%' p={4} >
           Movie Shows
        </Box>
        <Image src="https://4.bp.blogspot.com/-tqB3UP6KYaM/VItDu0F9kdI/AAAAAAAAATs/QB0X4AqWWY0/s1600/spinningwheel.gif" />
    </Stack>
  }


 return (
  <Box margin={"auto"}  maxW={"1000px"} spacing={5} >
         <Box bg='blue.600'  color="white" fontSize={"2xl"} fontWeight="semibold" borderRadius={5} w='100%' p={4} >Book Movie Now</Box>

   <HStack spacing={5}  >
   <Image w="350px" alt={data?.name} src={data?.image?.medium} h="100%"/>
     <VStack bg="white" boxShadow="md" w={"100%"}  borderWidth="1px" borderRadius={5} p={5}  >
         
        
        

        <VStack textAlign={"left"}  padding={3} w="full"  alignItems="left" spacing={3}>
        <Text fontSize={"2xl"} as="b" overflow="hidden" >Title : {data?.name}</Text>
        <Text fontSize={"2xl"}   >Genres : {data?.genres}</Text>
        <Text fontSize={"2xl"}   >Runtime : {data?.averageRuntime} Min</Text>
       
        <Badge fontSize="sm" padding="0px 20px" variant="subtle" colorScheme="green" >Language - {data?.language}</Badge>
        
        </VStack>
        
      

</VStack> 






   </HStack>  </Box>
  )
}

export default SingleMoviePage
