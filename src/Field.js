import { changeCurrentPlayer, changeField, changeIsDraw, changeIsGameEnded } from './reducer';
import FieldLayout from './FieldLayout';


export default function Field({store}) {

    let state = store.getState()

    function click(event, lineIndex, buttonIndex) {
   
        let currentButton = event.target

        if (!(state.isDraw || state.isGameEnded) && currentButton.textContent === '') {

            store.subscribe(() => {    
                currentButton.textContent = store.getState().field[lineIndex][buttonIndex]
                state = store.getState()
            })

            store.dispatch({type: changeField, payload: [lineIndex, buttonIndex]})
            
            store.dispatch({type: changeCurrentPlayer})

            const WIN_PATTERNS = [
                state.field[0][0] === state.field[0][1] && state.field[0][0] === state.field[0][2] && state.field[0][0] !== '',
                state.field[1][0] === state.field[1][1] && state.field[1][0] === state.field[1][2] && state.field[1][0] !== '',
                state.field[2][0] === state.field[2][1] && state.field[2][0] === state.field[2][2] && state.field[2][0] !== '', 
                state.field[0][0] === state.field[1][0] && state.field[0][0] === state.field[2][0] && state.field[0][0] !== '', 
                state.field[0][1] === state.field[1][1] && state.field[0][1] === state.field[2][1] && state.field[0][1] !== '', 
                state.field[0][2] === state.field[1][2] && state.field[0][2] === state.field[2][2] && state.field[0][2] !== '', 
                state.field[0][0] === state.field[1][1] && state.field[0][0] === state.field[2][2] && state.field[0][0] !== '', 
                state.field[2][0] === state.field[1][1] && state.field[2][0] === state.field[0][2] && state.field[2][0] !== '', 
            ]

            if (WIN_PATTERNS.includes(true)){
                store.dispatch({type: changeIsGameEnded})
            } else if (!state.field[0].includes('') && !state.field[1].includes('') && !state.field[2].includes('')) {
                store.dispatch({type: changeIsDraw})
                store.dispatch({type: changeIsGameEnded})
            }
        }

    }

    return (
        <FieldLayout  click = {click} store = {store}/>    
    )
}
