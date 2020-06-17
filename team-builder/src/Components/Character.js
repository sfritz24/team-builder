import React from "react";

function CharacterCard(props){
    const {details} = props

    if(!details) {
        return <h3>Fetching your character&apos;s details...</h3>
    }

    return(
        <div className='characterCard'>
            <h2>{details.name}</h2>
            <p>From a {details.from} called {details.title}</p>
            <p>{details.name} is a {details.species}</p>
        </div>
    )
}

export default CharacterCard