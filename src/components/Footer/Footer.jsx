import React from 'react';

// Primer imports:
import { Fixed, Box } from '@primer/components'

const Footer = () => {
    return (
        <>
            <Fixed bg="blue.3" bottom={0} width={1} p={4} >
                <Box>
                    <p>This is the footer</p>
                </Box>
            </Fixed>
        </>
    )
}

export default Footer;