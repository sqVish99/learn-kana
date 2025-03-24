import React, { useState, useEffect } from "react";
import { Container, Text, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import kanjiData from "@/data/kanjiData";
import EnhancedTextToSpeech from "@/components/TextToSpeech/TextToSpeech";
import OptionTile from "@/components/OptionTile/OptionTile";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader/PageHeader";
import { generateOptions, generatePracticeSet } from "@/utils";
import PracticeComplete from "@/components/PracticeComplete/PracticeComplete";
import useOptionSelect from "@/components/UseOptionSelect/UseOptionSelect";

const PRACTICE_SET_SIZE = 5;

const Kanji = () => {
	const navigate = useNavigate();
	const [currentPracticeSet, setCurrentPracticeSet] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [options, setOptions] = useState([]);
	const [practiceComplete, setPracticeComplete] = useState(false);

	const { isCorrect, handleOptionSelect } = useOptionSelect(
		currentPracticeSet,
		currentIndex,
		setCurrentIndex,
		setPracticeComplete
	);

	const getJapaneseReading = (reading) => {
		return reading ? reading.split(" ")[0].split("(")[0].trim() : "";
	};

	const handleBackClick = () => {
		navigate("/");
	};

	const generateNewPracticeSet = () => {
		const newSet = generatePracticeSet(kanjiData, PRACTICE_SET_SIZE);
		setCurrentPracticeSet(newSet);
		setCurrentIndex(0);
		setPracticeComplete(false);
	};

	useEffect(() => {
		generateNewPracticeSet();
	}, []);

	useEffect(() => {
		if (currentPracticeSet.length > 0 && !practiceComplete) {
			const currentChar = currentPracticeSet[currentIndex];
			setOptions(generateOptions(currentChar, kanjiData));
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
			<PracticeComplete
				title="Practice Complete!"
				message={`Great job! You've practiced ${PRACTICE_SET_SIZE} kanji characters.`}
				onBackClick={handleBackClick}
				onRetryClick={generateNewPracticeSet}
			/>
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
