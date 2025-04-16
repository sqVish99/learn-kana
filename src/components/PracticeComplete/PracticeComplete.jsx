import React from "react";
import { useNavigate } from "react-router-dom";
import {
	VStack,
	Box,
	Heading,
	Text,
	Button,
	Container,
} from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader/PageHeader";

const PracticeComplete = ({ title, message, onBackClick, onRetryClick }) => {
  const navigate = useNavigate();
  const DashboardClick = () => {
    navigate("/");
  }
	return (
		<Container width="100vw" maxW="100vw" p={0}>
			<VStack spacing={8} gap={8}>
				<PageHeader title={title} onBackClick={onBackClick} />

				<Box
					p={8}
					textAlign="center"
				>
					<Heading size="lg" mb={4}>
						{message}
					</Heading>
					<Text mb={8}>Would you like to practice another set?</Text>
					<Box display="flex" flexDirection="row" gap={2}>
						<Button
							colorScheme="teal"
							size="lg"
							onClick={onRetryClick}
						>
							Practice Another Set
						</Button>
						<Button
							colorScheme="teal"
							size="lg"
							onClick={DashboardClick}
						>
							Go to Dashboard
						</Button>
					</Box>
				</Box>
			</VStack>
		</Container>
	);
};

export default PracticeComplete;
