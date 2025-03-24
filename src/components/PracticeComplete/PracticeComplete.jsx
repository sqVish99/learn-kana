import React from "react";
import { VStack, Box, Heading, Text, Button, Container } from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader/PageHeader";

const PracticeComplete = ({ title, message, onBackClick, onRetryClick }) => {
  return (
    <Container width="100vw" maxW="100vw" p={0}>
      <VStack spacing={8} gap={8}>
        <PageHeader title={title} onBackClick={onBackClick} />

        <Box p={8} textAlign="center">
          <Heading size="lg" mb={4}>
            {message}
          </Heading>
          <Text mb={8}>Would you like to practice another set?</Text>
          <Button colorScheme="teal" size="lg" onClick={onRetryClick}>
            Practice Another Set
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default PracticeComplete;