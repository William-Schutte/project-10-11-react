import React from 'react';

function Main(props) {

    return (
        <main className="content">
            {/* Profile section at top of page, contains two buttons for editing profile and cards */}
            <section className="profile">
                <button type="button" className="profile__pic-button" onClick={props.onEditAvatar}></button>
                <img className="profile__picture" src="images/profile-image.jpg" alt="My Profile Pic" />
                <div className="profile__info">
                    <h1 className="profile__name">Jacques Cousteau</h1>
                    <p className="profile__occupation">Explorer</p>
                </div>
                <button type="button" aria-label="Edit Profile Button" className="profile__edit-button btn-animate" onClick={props.onEditProfile}></button>
                <button type="button" aria-label="Add Card Button" className="profile__add-button btn-animate" onClick={props.onAddPlace}></button>
            </section>

            {/* Image cards section, will self-adjust dimensions responsively */}
            <section className="cards">
                <ul className="cards__container">
                </ul>
            </section>

            {/* <div className="picture">
                <div className="picture__column">
                    <img className="picture__img" />
                    <h2 className="picture__title"></h2>
                    <button type="button" aria-label="Close Picture Button" className="form__exit-button btn-animate"></button>
                </div>
            </div> */}
    
        </main>
    );
}

export default Main;