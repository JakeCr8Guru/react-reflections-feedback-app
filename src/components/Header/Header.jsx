import React from 'react';

// Primer imports:
import { Flex, Box, Heading } from '@primer/components'

const Header = () => {
    return (
        <>
            <Flex justifyContent="center" bg="blue.3" width={1} p={4} >
                <Box>
                    <Heading as="h1" fontSize={4} mb={2}>Feedback</Heading>
                    <h4><i>Don't forget it!</i></h4>
                </Box>
            </Flex>
        </>
    )
}

export default Header;