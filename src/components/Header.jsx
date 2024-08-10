import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Button, HStack, Input, InputGroup, Box, Flex } from "@chakra-ui/react";

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

    const navButtons = [
        { to: '/', text: 'Home' },
        { to: '/coins', text: 'Coins' },
        { to: '/exchanges', text: 'Exchanges' },
    ];

    return (
        <Box p={4} shadow="base" bgColor="blackAlpha.900">
            <Flex 
                direction={['column', 'column', 'row']} 
                w="full" 
                justifyContent="space-between" 
                alignItems={['flex-start', 'flex-start', 'center']}
            >
                <HStack spacing={5} mb={[4, 4, 0]}>
                    {navButtons.map((button) => (
                        <Button key={button.to} variant="unstyled" color="white">
                            <Link to={button.to}>{button.text}</Link>
                        </Button>
                    ))}
                </HStack>

                {(location.pathname === '/coins' || location.pathname === '/exchanges') && (
                    <InputGroup maxW={['100%', '100%', '250px']}>
                        <Input
                            placeholder={location.pathname === '/coins' ? "Search coins..." : "Search exchanges..."}
                            color="white"
                            value={inputValue}
                            mr={3}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <Button
                            variant="solid"
                            colorScheme="teal"
                            size="sm"
                            px={6}
                            h={10}
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </InputGroup>
                )}
            </Flex>
        </Box>
    );
};

export default Header;