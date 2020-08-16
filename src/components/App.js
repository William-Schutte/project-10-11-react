import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

    // Declaration of three hooks that act as state variables for the visibility of each form
    const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
    const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
    const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
    
    function handleEditAvatarClick() {
        setIsEditAvatarOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfileOpen(true);
    }
    
    function handleAddPlaceClick() {
        setIsAddPlaceOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarOpen(false);
        setIsEditProfileOpen(false);
        setIsAddPlaceOpen(false);
    }

  return (
    <>
        {/* Header section, simply contains logo and bottom border */}
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer />

        {/* Popup Edit User Info Form */}
        <PopupWithForm name="form-edit" title="Edit profile" isOpen={isEditProfileOpen} btnText="Save" onClose={closeAllPopups}>
            <label className="form__input-field">
                <input id="form-name" name="primary" className="form__name form__input" type="text" placeholder="Name" required minlength="2" maxlength="40" pattern="[A-Za-z -]*" />
                <span id="form-name-error" className="form__error"></span>
            </label>
            <label className="form__input-field">
                <input id="form-occupation" name="secondary" className="form__occupation form__input secondary" type="text" placeholder="About" required minlength="2" maxlength="200" />
                <span id="form-occupation-error" className="form__error"></span>
            </label>
        </PopupWithForm>
        {/* Popup Edit User Pic Form */}
        <PopupWithForm name="form-pic" title="Change userpic" isOpen={isEditAvatarOpen} btnText="Save" onClose={closeAllPopups}>
            <label className="form__input-field">
                <input id="form-name" name="primary" className="form__name form__input" type="url" placeholder="Image link" required />
                <span id="form-name-error" className="form__error"></span>
            </label>
        </PopupWithForm>
        {/* Popup Add Form */}   
        <PopupWithForm name="form-add" title="New place" isOpen={isAddPlaceOpen} btnText="Create" onClose={closeAllPopups}>
            <label className="form__input-field">
                <input id="form-place" name="primary" className="form__place form__input" type="text" placeholder="Title" required minlength="1" maxlength="30" />
                <span id="form-place-error" className="form__error"></span>
            </label>
            <label className="form__input-field">
                <input id="form-url" name="secondary" className="form__url form__input" type="url" placeholder="Image link" required />
                <span id="form-url-error" className="form__error"></span>
            </label>
        </PopupWithForm>
        {/* Popup Delete Form */}
        <PopupWithForm name="form-delete" title="Are you sure?" isOpen={null} btnText="Yes" onClose={closeAllPopups} />

        <ImagePopup />

        {/* Template for Image Cards */}
        <template id="card-template">
            <li className="card">
                <img className="card__image" />
                <button type="button" aria-label="Card Delete Button" className="card__delete-button"></button>
                <div className="card__overlay">
                    <h2 className="card__name"></h2>
                    <div className="card__like-column">
                        <button type="button" aria-label="Card Favorite Button" className="card__fav-button"></button>
                        <p className="card__like-count"></p>
                    </div>
                </div>
            </li>
        </template>
    </>
  );
}

export default App;