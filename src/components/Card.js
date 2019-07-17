import React from 'react';


const Card = ({name, email, id, set}) => {
    return (
        <div className="tc bg-purple dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?${set}&100x100`} ></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
