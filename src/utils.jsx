export const shuffleArray = (array) => {
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

export const generateOptions = (correctChar, dataPool, optionCount = 4) => {
	const incorrectCount = optionCount - 1;
	let incorrectOptions = [];

	const optionsPool = dataPool.filter(
		(char) => char.character !== correctChar.character
	);

	while (incorrectOptions.length < incorrectCount) {
		const randomIndex = Math.floor(Math.random() * optionsPool.length);
		if (!incorrectOptions.includes(optionsPool[randomIndex])) {
			incorrectOptions.push(optionsPool[randomIndex]);
		}
	}

	const allOptions = [correctChar, ...incorrectOptions];

	return shuffleArray(allOptions);
};

export const generatePracticeSet = (data, size) => {
    const shuffledData = [...data];

    for (let i = shuffledData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }

    return shuffledData.slice(0, size);
};

export default generatePracticeSet;