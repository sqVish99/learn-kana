import React from "react";
import { Box, Text, Link, Flex } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { useColorMode } from "../ui/color-mode";

const Footer = () => {
	const { colorMode } = useColorMode();
	return (
		<Box
			as="footer"
			bg="teal.500"
			color="white"
			py={4}
			px={6}
			textAlign="center"
			shadow="md"
		>
			<Flex justify="center" align="center" display="flex" gap={2}>
				<Text fontSize="sm" color={colorMode === "light" ? "black" : "white"}>
					Built with ❤️ by{" "}
					<Link
						href="https://sqvish99.github.io/vishwas-portfolio"
						isExternal
						_hover={{ textDecoration: "underline" }}
						target="_blank"
						rel="noopener noreferrer"
					>
						Vishwas MH
					</Link>
				</Text>
				<Link
					href="https://www.linkedin.com/in/vishwas-m-h/"
					isExternal
					_hover={{ scale: "1.1" }}
					target="_blank"
					rel="noopener noreferrer"
                    _focus={{ outline: "none" }}
				>
					<FaLinkedin />
				</Link>
			</Flex>
		</Box>
	);
};

export default Footer;
