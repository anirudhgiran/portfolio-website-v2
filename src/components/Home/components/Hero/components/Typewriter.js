import React, { useState, useEffect } from "react";

const words = [
    "A Software Developer",
    "A Web Developer",
    "A Passionate Photographer",
];

const TypeWriter = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [duration, setDuration] = useState(200);
    const [currentWord, setCurrentWord] = useState("");
    const spedUp = 50;
    const normalSpeed = 200;

    useEffect(() => {
        const interval = setInterval(() => {
            let newSubIndex = subIndex;
            let newIndex = index % words.length;
            let deleting = isDeleting;
            let end = false;

            if (!deleting && subIndex < words[newIndex].length) {
                setCurrentWord((prev) =>
                    prev.concat(words[newIndex][subIndex])
                );
                newSubIndex += 1;
            }

            if (deleting && subIndex >= 0) {
                setCurrentWord((prev) => prev.substring(0, prev.length - 1));
                newSubIndex -= 1;
            }

            if (newSubIndex === words[newIndex].length) {
                end = true;
                deleting = true;
            }

            if (newSubIndex === 0 && deleting) {
                setCurrentWord("");
                deleting = false;
                newIndex += 1;
            }

            setIsEnd(end);
            setIsDeleting(deleting);
            setSubIndex(newSubIndex);
            setIndex(newIndex);

            setDuration(end ? 1500 : deleting ? spedUp : normalSpeed);
        }, duration);

        return () => clearInterval(interval);
    }, [subIndex, index, currentWord, isEnd, isDeleting, duration]);

    return <h1 className={"text"}>{currentWord}</h1>;
};

export default TypeWriter;
