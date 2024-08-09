import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Button, HStack, VStack, Input, InputGroup, Box } from "@chakra-ui/react";

const Header = ({ setSearchQuery }) => {
    const location = useLocation();
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        setSearchQuery(inputValue);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Box p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
            <VStack
                w={'full'}
                spacing={4}
                alignItems={'flex-start'}
                display={['flex', 'flex', 'none']}
            >
                {/* Navigation buttons for mobile */}
                <HStack spacing={5} justifyContent={'center'}>
                    <Button variant={'unstyled'} color={'white'}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button variant={'unstyled'} color={'white'}>
                        <Link to={'/coins'}>Coins</Link>
                    </Button>
                    <Button variant={'unstyled'} color={'white'}>
                        <Link to={'/exchanges'}>Exchanges</Link>
                    </Button>
                </HStack>

                {/* Search Box and Button for mobile */}
                {location.pathname === '/coins' && (
                    <InputGroup maxW={'100%'} mx={'auto'}>
                        <Input
                            placeholder="Search coins..."
                            color={'white'}
                            value={inputValue}
                            mr={'3'}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'sm'}
                            h={'10'}
                            px={'6'}
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </InputGroup>
                )}
            </VStack>

            <HStack
                w={'full'}
                justifyContent={'space-between'}
                alignItems={'center'}
                display={['none', 'none', 'flex']}
            >
                {/* Navigation buttons for larger screens */}
                <HStack spacing={5}>
                    <Button variant={'unstyled'} color={'white'}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button variant={'unstyled'} color={'white'}>
                        <Link to={'/coins'}>Coins</Link>
                    </Button>
                    <Button variant={'unstyled'} color={'white'}>
                        <Link to={'/exchanges'}>Exchanges</Link>
                    </Button>
                </HStack>

                {/* Search Box and Button for larger screens */}
                {location.pathname === '/coins' && (
                    <InputGroup maxW={'250px'}>
                        <Input
                            placeholder="Search coins..."
                            color={'white'}
                            value={inputValue}
                            mr={'3'}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'sm'}
                            px={'6'}
                            h={10}
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </InputGroup>
                )}
            </HStack>
        </Box>
    );
};

export default Header;

