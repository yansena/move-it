import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
    const { minutes, 
            seconds, 
            hasFinished, 
            isActive, 
            startCountdown, 
            resetCountdown 
        } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    

    return(
        <div>
            <div className={styles.CountdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                            Abondonar ciclo
                        </button>  
                    ) : (
                        <button onClick={startCountdown} type="button" className={styles.countdownButton}>
                            Iniciar Ciclo
                        </button>
                    )}  
                </>

            ) }

            
            

            


        </div>
    );
}