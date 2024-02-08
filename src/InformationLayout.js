export default function InformationLayout({store}) {
    return (
        <h1 className="topContent">{`Ходит: ${store.getState().currentPlayer}`}</h1>
    )
}