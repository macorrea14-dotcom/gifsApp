import React from "react";
import { Header } from "./components/Header";
import { events } from "./data/events";
import { Event } from "./components/Event"

export const App = () => {

    return(
        <>
            {dataEvents.map((event) =>{
                return (
                    <Event
                    key={event.id_evento}
                    event={event.evento}
                    starDate={event.fecha_inicio}
                    endDate={event.fecha_final}
                    />
                );
            })}
        </>
    );
};