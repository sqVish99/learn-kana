import React from "react";
import { useColorModeValue } from "../../components/ui/color-mode";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HomeTile = ({ path, character, title, description }) => {
	const bgColor = useColorModeValue("white", "gray.800");
	const borderColor = useColorModeValue("gray.200", "gray.700");
	const hoverBg = useColorModeValue("teal.50", "teal.900");

	return (
		<Box
			flex="1"
			p={6}
			borderRadius="lg"
			boxShadow="md"
			bg={bgColor}
			border="1px"
			borderColor={borderColor}
			textAlign="center"
			transition="all 0.3s"
			alignContent={"flex-end"}
			_hover={{
				transform: "scale(1.05)",
				boxShadow: "lg",
				bg: hoverBg,
			}}
		>
			<Heading
				size="2xl"
				mb={4}
				color="teal.500"
				fontFamily="'Noto Sans JP', sans-serif"
			>
				{character}
			</Heading>
			<Heading as="h3" size="lg" mb={4}>
				{title}
			</Heading>
			<Text mb={4}>{description}</Text>
			<Button colorScheme="teal" size="md" as={RouterLink} to={path}>
				Practice {title}
			</Button>
		</Box>
	);
};

export default HomeTile;
