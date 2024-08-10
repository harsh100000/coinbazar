import React from 'react';
import { Image, Box, Stack, VStack, Text } from "@chakra-ui/react";
import img from "../assets/img.png";

const Footer = () => {
    return (
        <Box
            bgColor={'blackAlpha.900'}
            color={'whiteAlpha.700'}
            minHeight={'24'} // Reduced minimum height
            px={'12'} // Horizontal padding
            py={['2', '3']} // Vertical padding, smaller on mobile
            pb={['0', '2']} // Specific bottom padding, smaller on mobile
        >
            <Stack
                direction={['column', 'row']}
                spacing={['2', '3']} // Spacing between items
                alignItems={'center'}
            >
                <VStack
                    w={'full'}
                    spacing={['1', '2']} // Spacing between text elements
                    alignItems={['center', 'flex-start']}
                >
                    <Text fontWeight={'bold'} fontSize={['sm', 'md']}>
                        About us
                    </Text>
                    <Text fontSize={'sm'} letterSpacing={'wide'}>
                        We are a one-stop solution to all your Crypto-related queries.
                    </Text>
                </VStack>

                <VStack
                    w={'full'}
                    spacing={['1', '2']} // Spacing between text elements
                    alignItems={['center', 'flex-end']}
                >
                    <Image src={img} w={'20'} h={'20'} /> {/* Image size */}
                    <Text fontSize={'sm'}>Developed By</Text>
                    <Text fontSize={'sm'}>Harsh Vardhan</Text>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;
