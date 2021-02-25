import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="http://github.com/yansena.png" alt="Yan Sena"/>
            <div>
                <strong>Yan Sena</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1</p>
            </div>
        </div>
        
    )
}