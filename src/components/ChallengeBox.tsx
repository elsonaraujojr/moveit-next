import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenges, resetChallenge, completeChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenges ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenges.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenges.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenges.description}</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton} onClick={resetChallenge}>Falhei</button>
            <button type="button" className={styles.challengeSucceededButton} onClick={completeChallenge}>Completei</button>
          </footer>
        </div>
      ) : (
        <div className = {styles.challengeBoxActive}>
      <strong>
        Finalize um ciclo para receber um desafio
        </strong>
      <p>
        <img src="icons/level-up.svg" alt="Level Up" />
          Avence de level completando os desafios.
        </p>
    </div>
      )}
    </div>
  )

}