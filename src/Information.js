import InformationLayout from "./InformationLayout";

export default function Information({store}) {

    store.subscribe(() => {
        let state = store.getState()

        let topContent = document.querySelector('.topContent')

        if (state.isDraw) {
            topContent.textContent = 'Ничья'
        } else if (state.isGameEnded && !state.isDraw) {
            if(state.currentPlayer === 'X') {
                topContent.textContent = `Победил: 0`
            } else {
                topContent.textContent = `Победил: X`
            }
        } else {
            topContent.textContent = `Ходит: ${state.currentPlayer}`
        }
    })

    return (
        <InformationLayout store = {store}/>    
    )
}