import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {server} from "../index"
import Loader from './Loader';
import { Container, HStack, Heading, Image, VStack, Text } from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fectcExchanges = async() =>{
      try {
        const{data} = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fectcExchanges();
  }, [])
  
  if(error) return (<ErrorComponent message={"Error while fetching Exchanges"} />)

  return (
    <Container maxW={'container.xl'} >

    {loading?<Loader/>:(
      <>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {
              exchanges.map((i)=>(

                <ExchangeCard 
                key={i.id}
                name={i.name} 
                img={i.image} 
                rank={i.trust_score_rank} 
                url={i.url} 
                />

              ))
            }
          </HStack>
      </>
    )}

    </Container>
  )
}


const ExchangeCard = ({name, img, rank, url}) =>(
  <a href={url} target={'blank'}>
    <VStack 
    w={['60','48']} // 1st mobile, 2nd laptop
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
      <Image src={img} w={['20','10']} h={['20', '10']} objectFit={'contain'} alt='Exchange image' />
      <Heading size={'md'} noOfLines={1} >{rank}</Heading>
      <Text noOfLines={'1'} > {name} </Text>
    </VStack>
  </a>
)

export default Exchanges
