
import React from 'react'
import { Box, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

const NavItem = ({ to, children, isActive }) => (
	<Link
		as={RouterLink}
		to={to}
		bg={isActive ? "teal.600" : "transparent"}
		_hover={{
			textDecoration: "none",
			color: "teal.100",
			bg: isActive ? "teal.700" : "teal.600",
		}}
		_focus={{ outline: "none", boxShadow: "none" }}
		px={3}
		py={2}
		rounded="md"
		transition="all 0.2s"
	>
		{children}
	</Link>
);

export default NavItem;