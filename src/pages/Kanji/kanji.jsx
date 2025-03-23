import React, { useState, useEffect } from "react";
import {
	Container,
	Text,
	SimpleGrid,
	VStack,
	HStack,
	Button,
	Heading,
	Box,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import kanjiData from "@/data/kanjiData";
import EnhancedTextToSpeech from "@/components/TextToSpeech/TextToSpeech";
import OptionTile from "@/components/OptionTile/OptionTile";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader/PageHeader";

const PRACTICE_SET_SIZE = 5;

const Kanji = () => {
	const navigate = useNavigate();
	const [currentPracticeSet, setCurrentPracticeSet] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [options, setOptions] = useState([]);
	const [isCorrect, setIsCorrect] = useState(null);
	const [practiceComplete, setPracticeComplete] = useState(false);
	// Removed showMeaning state

	const getJapaneseReading = (reading) => {
		return reading ? reading.split(" ")[0].split("(")[0].trim() : "";
	};

	const handleBackClick = () => {
		navigate("/");
	};

	const generateNewPracticeSet = () => {
		const shuffledData = [...kanjiData];

		for (let i = shuffledData.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledData[i], shuffledData[j]] = [
				shuffledData[j],
				shuffledData[i],
			];
		}

		const newSet = shuffledData.slice(0, PRACTICE_SET_SIZE);

		setCurrentPracticeSet(newSet);
		setCurrentIndex(0);
		setIsCorrect(null);
		setPracticeComplete(false);
		// Removed setShowMeaning(false);
	};

	useEffect(() => {
		generateNewPracticeSet();
	}, []);

	const generateOptions = (correctChar) => {
		let incorrectOptions = [];

		const optionsPool = kanjiData.filter(
			(char) => char.character !== correctChar.character
		);

		while (incorrectOptions.length < 3) {
			const randomIndex = Math.floor(Math.random() * optionsPool.length);
			if (!incorrectOptions.includes(optionsPool[randomIndex])) {
				incorrectOptions.push(optionsPool[randomIndex]);
			}
		}

		const allOptions = [correctChar, ...incorrectOptions];
		return shuffleArray(allOptions);
	};

	const shuffleArray = (array) => {
		const newArray = [...array];
		let currentIndex = newArray.length;
		let randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[newArray[currentIndex], newArray[randomIndex]] = [
				newArray[randomIndex],
				newArray[currentIndex],
			];
		}

		return newArray;
	};

	const handleOptionSelect = (selectedChar) => {
		const currentChar = currentPracticeSet[currentIndex];
		const correct = selectedChar.character === currentChar.character;
		setIsCorrect(correct);

		if (correct) {
			toaster.success({
				title: "Correct!",
				description: `That's right! ${selectedChar.character} means "${selectedChar.meaning}"`,
				duration: 2000,
			});

			setTimeout(() => {
				if (currentIndex === currentPracticeSet.length - 1) {
					setPracticeComplete(true);
				} else {
					setCurrentIndex((prevIndex) => prevIndex + 1);
				}
				setIsCorrect(null);
			}, 2000);
		} else {
			toaster.error({
				title: "Try again",
				description: "That's not the right character",
				duration: 1500,
			});

			setTimeout(() => {
				setIsCorrect(null);
			}, 1500);
		}
	};

	useEffect(() => {
		if (currentPracticeSet.length > 0 && !practiceComplete) {
			const currentChar = currentPracticeSet[currentIndex];
			setOptions(generateOptions(currentChar));
		}
	}, [currentIndex, currentPracticeSet, practiceComplete]);

	if (currentPracticeSet.length === 0) {
		return (
			<Container centerContent p={8}>
				<Text>Loading practice set...</Text>
			</Container>
		);
	}

	if (practiceComplete) {
		return (
			<Container width="100vw" maxW="100vw" p={0}>
				<VStack spacing={8} gap={8}>
					<PageHeader
						title="Practice Complete!"
						onBackClick={handleBackClick}
					/>

					<Box p={8} textAlign="center">
						<Heading size="lg" mb={4}>
							Great job! You've practiced {PRACTICE_SET_SIZE}{" "}
							kanji characters.
						</Heading>
						<Text mb={8}>
							Would you like to practice another set?
						</Text>
						<Button
							colorScheme="teal"
							size="lg"
							onClick={generateNewPracticeSet}
						>
							Practice Another Set
						</Button>
					</Box>
				</VStack>
			</Container>
		);
	}

	const currentChar = currentPracticeSet[currentIndex];

	return (
		<Container width="100vw" maxW="100vw" p={0}>
			<VStack spacing={8} gap={8}>
				<PageHeader
					title="Kanji Practice"
					onBackClick={handleBackClick}
				/>

				<VStack spacing={4}>
					<EnhancedTextToSpeech
						text={
							getJapaneseReading(currentChar.reading) ||
							currentChar.character
						}
					/>
				</VStack>

				<SimpleGrid columns={2} spacing={6} gap={4} px={4}>
					{options.map((option, index) => (
						<OptionTile
							key={index}
							option={option}
							isCorrect={isCorrect}
							currentCharacter={currentChar}
							onClick={handleOptionSelect}
							disabled={isCorrect !== null}
						/>
					))}
				</SimpleGrid>

				<HStack>
					<Text>
						Progress: {currentIndex + 1} / {PRACTICE_SET_SIZE}
					</Text>
				</HStack>
			</VStack>
		</Container>
	);
};

export default Kanji;
