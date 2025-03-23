import React from "react";
import { Button, VStack, Text } from "@chakra-ui/react";

const OptionTile = ({ 
    option, 
    isCorrect, 
    currentCharacter, 
    onClick, 
    disabled 
}) => {
    const getColorScheme = () => {
        if (isCorrect === null) return "gray";
        if (isCorrect && option.character === currentCharacter.character) return "green";
        if (!isCorrect && option.character === currentCharacter.character) return "yellow";
        
        return "gray";
    };

    return (
        <Button
            onClick={() => onClick(option)}
            colorScheme={getColorScheme()}
            variant="outline"
            borderWidth="2px"
            _hover={{ bg: "teal.600" }}
            disabled={disabled}
            p={14}
            borderRadius="2xl"
        >
            <VStack>
                <Text
                    fontSize="5xl"
                    fontFamily="'Noto Sans JP', sans-serif"
                >
                    {option.character}
                </Text>
            </VStack>
        </Button>
    );
};

export default OptionTile;