import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json'

interface Challenges {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenges: Challenges
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {

  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(30)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenges, setActiveChallenges] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengesindex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengesindex]

    setActiveChallenges(challenge)
  }

  function resetChallenge() {
    setActiveChallenges(null)
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge,
      activeChallenges,
      resetChallenge,
      experienceToNextLevel
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}