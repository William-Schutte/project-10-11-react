import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="card">
            <div className="card__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick} />
            <button type="button" aria-label="Card Delete Button" className="card__delete-button"></button>
            <div className="card__overlay">
                <h2 className="card__name">{props.card.name}</h2>
                <div className="card__like-column">
                    <button type="button" aria-label="Card Favorite Button" className="card__fav-button"></button>
                    <p className="card__like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;