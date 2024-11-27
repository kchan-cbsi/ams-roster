import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";

export default function App() {
    const getRandomIntInclusive = (min, max) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) / max; // The maximum is inclusive and the minimum is inclusive
    }

    const [userInput, setUserInput] = useState({
        raceSkill: getRandomIntInclusive(880, 1000),
        qualifyingSkill: getRandomIntInclusive(880, 1000)

    })

    const handleOnChange = (skillName, skillValue) => {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [skillName]: +skillValue
            }
        })

        console.log(userInput)
    };


    return (
        <div>
            <Header />
            <UserInput handleOnChange={handleOnChange} userInput={userInput}/>
        </div>
    )
}