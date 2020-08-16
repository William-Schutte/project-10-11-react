import React from 'react';

function ImagePopup() {
    return (
        <div className="picture">
            <div className="picture__column">
                <img className="picture__img" />
                <h2 className="picture__title"></h2>
                <button type="button" aria-label="Close Picture Button" className="form__exit-button btn-animate"></button>
            </div>
        </div>
    );
}

export default ImagePopup;