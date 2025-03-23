import React from "react";
import {
	Heading,
	Box,
	Flex,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

const PageHeader = ({ title, onBackClick }) => {
    return (
        <Flex width="100%" alignItems="center" position="relative">
            <Box
                position="absolute"
                left={4}
                top="50%"
                transform="translateY(-50%)"
                cursor="pointer"
                onClick={onBackClick}
                _hover={{ transform: "translateY(-50%) scale(1.2)" }}
                transition="all 0.2s"
                zIndex={1}
            >
                <FaArrowLeft color="#319795" size={28} />
            </Box>
            <Heading
                as="h1"
                size="xl"
                textAlign="center"
                width="100%"
                background={"teal.700"}
                color="white"
                p={2}
            >
                {title}
            </Heading>
        </Flex>
    );
};

export default PageHeader;