import React from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/");
	};

	return (
		<Box
			textAlign="center"
			py={10}
			px={6}
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Box as={TbError404} boxSize="150px" color="teal.500" mb={6} />
			<Text fontSize="lg" color="gray.600" mb={6}>
				Oops! The page you're looking for doesn't exist.
			</Text>
			<VStack spacing={4}>
				<Button colorScheme="teal" size="lg" onClick={handleGoHome}>
					Go to Home
				</Button>
			</VStack>
		</Box>
	);
};

export default NotFound;
