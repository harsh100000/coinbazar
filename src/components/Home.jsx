import React from 'react'
import {Box, Image, Text} from "@chakra-ui/react"
import btc2 from "../assets/btc2.jpg"
const Home = () => {
  return (
    <Box
    bgColor={'blackAlpha.900'}
    w={'full'}
    h={['88vh','85vh']}
    >
      <Image w={'full'} h={'full'} objectFit={'cover'} src={btc2} ></Image>
      <Text 
      fontSize={'6xl'} 
      textAlign={['center','right']}
      mr={['0','10']}
      fontWeight={'thin'}
      color={'whiteAlpha.700'}
      mt={'-120px'}
      >Coin Baazar</Text>
    </Box>
  )
}

export default Home