import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`picture ${props.card && (`popup-opened`)}`}>
            <div className="picture__column">
                <img className="picture__img" src={props.card ? props.card.link : ''} />
                <h2 className="picture__title">{props.card ? props.card.name : ''}</h2>
                <button type="button" aria-label="Close Picture Button" className="form__exit-button btn-animate" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;