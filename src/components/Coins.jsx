import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from "../index";
import Loader from './Loader';
import { Container, HStack, RadioGroup, Radio, Button } from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = ({ searchQuery }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');

  const currencySymbol = currency === 'inr' ? '₹' : currency === 'usd' ? '$' : '€';

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(20).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}&per_page=20`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error while fetching Coins"} />;

  const filteredCoins = coins.filter((coin) => {
    const searchString = `${coin.name} ${coin.symbol}`.toLowerCase();
    return searchString.includes(searchQuery.toLowerCase());
  });

  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={'10'} mt={'7'}>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {filteredCoins.map((coin) => (
              <CoinCard
                id={coin.id}
                key={coin.id}
                name={coin.name}
                img={coin.image}
                rank={coin.market_cap_rank}
                price={coin.current_price}
                symbol={coin.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={'full'} overflowX={'auto'} p={'8'}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={'blackAlpha.900'}
                color={'white'}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
