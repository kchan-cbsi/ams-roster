import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";

export default function App() {
    const generateRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1));
    }

    const [userInput, setUserInput] = useState({
        raceSkill: generateRandomInt(880, 1000),
        qualifyingSkill: generateRandomInt(880, 1000)

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