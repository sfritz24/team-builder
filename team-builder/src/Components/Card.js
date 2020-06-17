import React from "react";
import CharacterCard from './Character';

function Card(props) {
    const {characters} = props
    return (
        <div className='cardContainer'>
            {
                characters.map(character =>{
                    return(
                        <CharacterCard key={character.id} details={character}/>
                    )
                })
            }
        </div>
    )
}

export default Card