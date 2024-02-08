import Field from "./Field";
import Information from "./Information";
import styles from './styles/game.module.css';
import { initState } from './reducer';

export default function GameLayout({store}) {

    return (
        <div className={styles.container}> 
            <Information 
                store = {store}
            />
            <Field
                store = {store}
            />
            <button className={styles.newGameButton} onClick={() => store.dispatch({type: initState})}>Начать новую игру</button>
        </div>  
    )
}
