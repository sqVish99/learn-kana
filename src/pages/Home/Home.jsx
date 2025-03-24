import React, { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Text,
    Container,
    VStack,
    Flex,
    Button,
} from "@chakra-ui/react";
import HomeTile from "../../components/HomeTile/HomeTile";

const Home = () => {
    const [text, setText] = useState("");
    const [fullText, setFullText] = useState("ようこそ");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [messageIndex, setMessageIndex] = useState(0);

    const messages = ["ようこそ", "ウェルカム", "歓迎"];

    const explanations = [
        "Welcome (Hiragana)",
        "Welcome (Katakana)",
        "Welcome (Kanji)",
    ];

    const writingSystems = [
        {
            path: "/hiragana",
            character: "あ",
            title: "Hiragana",
            description:
                "The basic Japanese phonetic script. Master these 46 characters to read and write everyday Japanese.",
        },
        {
            path: "/katakana",
            character: "ア",
            title: "Katakana",
            description:
                "Used for foreign words and emphasis. These 46 characters are essential for understanding modern Japanese.",
        },
        {
            path: "/kanji",
            character: "漢",
            title: "Kanji",
            description:
                "Chinese characters adopted for Japanese. Begin with the most common kanji and gradually build your knowledge.",
        },
    ];

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                if (!isDeleting && index <= fullText.length) {
                    setText(fullText.substring(0, index));
                    setIndex(index + 1);
                } else if (isDeleting && index >= 0) {
                    setText(fullText.substring(0, index));
                    setIndex(index - 1);
                } else if (index < 0) {
                    setIsDeleting(false);
                    setMessageIndex((messageIndex + 1) % messages.length);
                    setFullText(messages[(messageIndex + 1) % messages.length]);
                    setIndex(0);
                } else {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1500);
                }
            },
            isDeleting ? 80 : 180
        );

        return () => clearTimeout(timeout);
    }, [fullText, index, isDeleting, messageIndex]);

    return (
        <Container maxW="100vw" py={10}>
            <VStack spacing={8} align="center" justify="center" minH="70vh">
                <Box textAlign="center">
                    <Heading
                        as="h1"
                        size="3xl"
                        letterSpacing="tight"
                        mb={6}
                        fontFamily="'Noto Sans JP', sans-serif"
                    >
                        {text}
                        <Box
                            as="span"
                            ml={1}
                            display="inline-block"
                            h="1em"
                            w="2px"
                            bg="teal.500"
                            animation="blink 1s step-end infinite"
                        ></Box>
                    </Heading>

                    <Text fontSize="xl" fontStyle="italic">
                        {explanations[messageIndex]}
                    </Text>
                </Box>

                <Box maxW="600px" textAlign="center" mt={8}>
                    <Text fontSize="lg">
                        Start your journey to mastering Japanese characters with
                        LearnKana. Practice Hiragana, Katakana, and Kanji
                        through interactive exercises.
                    </Text>
                </Box>

                <Flex
                    direction={{ base: "column", md: "row" }}
                    w="100%"
                    justify="center"
                    gap={6}
                    mt={10}
                >
                    {writingSystems.map((system, index) => (
                        <HomeTile
                            key={index}
                            path={system.path}
                            character={system.character}
                            title={system.title}
                            description={system.description}
                        />
                    ))}
                </Flex>
            </VStack>
        </Container>
    );
};

export default Home;