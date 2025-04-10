import React from "react";
import { Box, Text, Link, Flex } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
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
				<Text fontSize="sm">
					Built with ❤️ by{" "}
					<Link
						href="https://github.com/sqvish99"
						isExternal
						color="teal.200"
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
					color="teal.200"
					_hover={{ scale: "1.1" }}
					target="_blank"
					rel="noopener noreferrer"
                    _focus={{ outline: "none" }}
				>
					<FaLinkedin style={{ marginLeft: "10px" }} />
				</Link>
			</Flex>
		</Box>
	);
};

export default Footer;
