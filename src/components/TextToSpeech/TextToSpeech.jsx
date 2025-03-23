import React, { useState, useEffect, useRef } from "react";
import { Button, Box } from "@chakra-ui/react";
import { FaVolumeUp } from "react-icons/fa";

const TextToSpeech = ({ text }) => {
    const [utterance, setUtterance] = useState(null);
    const hasMounted = useRef(false);

    useEffect(() => {
        const synth = window.speechSynthesis;
        synth.cancel();
        
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "ja-JP";
        u.rate = 0.3;
        
        setUtterance(u);

        const autoPlay = () => {
            synth.speak(u);
        };

        if (hasMounted.current) {
            setTimeout(autoPlay, 300);
        } else {
            hasMounted.current = true;
            setTimeout(autoPlay, 800);
        }

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        if (utterance) {
            const synth = window.speechSynthesis;
            synth.cancel();
            synth.speak(utterance);
        }
    };

    return (
        <Button
            onClick={handlePlay}
            colorScheme="teal"
            size="lg"
            p={6}
            borderRadius="md"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            transition="all 0.3s"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box mr={2} display="inline-block">
                <FaVolumeUp />
            </Box>
            Play Sound
        </Button>
    );
};

export default TextToSpeech;