import React from "react";
import {
	Box,
	Flex,
	Heading,
	HStack,
	Link,
	Image,
	useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import NavItem from "../NavItem/NavItem";
import KanaLight from "../../assets/images/kana.svg";
import KanaDark from "../../assets/images/kanadark.svg";
import { ColorModeButton, useColorMode } from "../ui/color-mode";

const NavBar = () => {
	const location = useLocation();
	const { colorMode } = useColorMode();
	const showText = useBreakpointValue({ base: false, md: true });

	const navItems = [
		{ path: "/hiragana", label: showText ? "Hiragana" : "あ" },
		{ path: "/katakana", label: showText ? "Katakana" : "ア" },
		{ path: "/kanji", label: showText ? "Kanji" : "漢" },
	];

	const isActive = (path) => {
		return location.pathname === path;
	};

	return (
		<Box as="nav" bg="teal.500" color="white" px={4} py={3} shadow="md">
			<Flex justify="space-between" align="center" mx="auto" px={3}>
				<Heading
					as="h1"
					size="md"
					display="flex"
					alignItems="center"
					gap={2}
				>
					<Link
						as={RouterLink}
						to="/"
						_hover={{ textDecoration: "none", color: "teal.100" }}
						_focus={{ outline: "none", boxShadow: "none" }}
					>
						<Image
							src={colorMode === "light" ? KanaDark : KanaLight}
							alt="Kana"
							boxSize="32px"
							objectFit="contain"
						/>
					</Link>
					{showText && (
						<Link
							as={RouterLink}
							to="/"
							_hover={{
								textDecoration: "none",
								color: "teal.100",
							}}
							_focus={{ outline: "none", boxShadow: "none" }}
						>
							LearnKana
						</Link>
					)}
				</Heading>

				<HStack spacing={8} fontWeight="medium">
					{navItems.map((item) => (
						<NavItem
							key={item.path}
							to={item.path}
							isActive={isActive(item.path)}
						>
							{item.label}
						</NavItem>
					))}
				</HStack>

				<ColorModeButton />
			</Flex>
		</Box>
	);
};

export default NavBar;
