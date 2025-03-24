import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import correctSoundFile from "@/assets/sounds/correct.mp3";
import incorrectSoundFile from "@/assets/sounds/incorrect.mp3";

const useOptionSelect = (
	currentPracticeSet,
	currentIndex,
	setCurrentIndex,
	setPracticeComplete,
	toastDuration = 2000
) => {
	const [isCorrect, setIsCorrect] = useState(null);

	const correctSound = new Audio(correctSoundFile);
	const incorrectSound = new Audio(incorrectSoundFile);

	const handleOptionSelect = (selectedChar) => {
		const currentChar = currentPracticeSet[currentIndex];
		const correct = selectedChar.character === currentChar.character;
		setIsCorrect(correct);

		if (correct) {
			correctSound.play();

			toaster.success({
				title: "Correct!",
				description: `That's right! ${selectedChar.character} ${
					selectedChar.meaning
						? `means "${selectedChar.meaning}"`
						: `is "${selectedChar.romaji}"`
				}`,
				duration: toastDuration,
			});

			setTimeout(() => {
				if (currentIndex === currentPracticeSet.length - 1) {
					setPracticeComplete(true);
				} else {
					setCurrentIndex((prevIndex) => prevIndex + 1);
				}
				setIsCorrect(null);
			}, toastDuration);
		} else {
			incorrectSound.play();

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

	return {
		isCorrect,
		handleOptionSelect,
	};
};

export default useOptionSelect;
