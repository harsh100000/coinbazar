import React from 'react'
import { Container, HStack, Heading, Image, VStack, Text } from '@chakra-ui/react';
import {Link} from "react-router-dom"


const CoinCard = ({id, name, img, rank, price, symbol, currencySymbol="₹"}) =>(
    <Link to={`/coin/${id}`}>
        <VStack 
        w={['60','48']} 
        shadow={'lg'} 
        p={'8'} 
        borderRadius={'lg'} 
        transition={"all 0.3s"}
        m={'4'}
        css={{
            "&:hover":{
            transform:"scale(1.1)"
            }
        }}
        >
            <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt='Exchange image' />
            <Heading size={'md'} noOfLines={1} >{rank}</Heading>
            <Text noOfLines={'1'} > {name} </Text>
            <Text noOfLines={'1'} > ({symbol}) </Text>
            <Text noOfLines={'1'} >{price ? `${currencySymbol} ${price}` : "NA"}</Text>
        </VStack>
    </Link>
  )

export default CoinCard