export const Event = ({event, starDate, endDate}) => {
    return(
        <div className="event-container">
            <h3>{event}</h3>
            <p>Inincio: {starDate}</p>
            <p>Fin: {endDate}</p>
        </div>
    )
}