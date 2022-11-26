import { Box, Card, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import SingleCard from './Card'




const Home = () => {

  const { data, loading, setloading } = useContext(AppContext);
    
 

  if(loading){

    return  <Stack margin={"auto"}  maxW={"1400px"} spacing={5} >
        <Box bg='blue.600'  color="white" fontSize={"2xl"} fontWeight="semibold" borderRadius={5} w='100%' p={4} >
           Movie Shows
        </Box>
        <Image src="https://4.bp.blogspot.com/-tqB3UP6KYaM/VItDu0F9kdI/AAAAAAAAATs/QB0X4AqWWY0/s1600/spinningwheel.gif" />
    </Stack>
  }

  return (
    <Stack margin={"auto"}  maxW={"1400px"} spacing={5} >

        <Box bg='blue.600'  color="white" fontSize={"2xl"} fontWeight="semibold" borderRadius={5} w='100%' p={4} >
           Movie Shows
        </Box>

        <SimpleGrid p={5} spacing="50px" h="full" columns={{sm: 2, md: 3, lg:4}} >

            {
                data.map((el)=>  <SingleCard data={el}/> )
            }

        </SimpleGrid>


    
    </Stack>
  )
}

export default Home
