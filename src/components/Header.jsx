import React from 'react'
import logo from '../assets/img/logo.svg';
import i18n from "i18next";

function Header({ languages, currentLang }) {
    const [langModal, setLangModal] = React.useState(false);
    const toggleModal = () => {
        setLangModal(!langModal);
    }
    return (
        <header className="header">
            <div className="header__container">
                <a href="/" className="header__logo"><img src={logo} alt="logo" /></a>

                <div className="header__left header-left">
                    <a href="#main" className="button button__primary">AJUTĂ</a>
                    <div className={langModal ? 'header-left__language language active' : 'header-left__language language'}>
                        <span onClick={toggleModal} className="language-current">
                            {currentLang && currentLang.toUpperCase()}
                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0L5 5L10 0H0Z" fill="#323232" />
                            </svg>
                        </span>
                        <ul className="language-dropdown">
                            {languages && languages.map(lang => (
                                <li key={lang.code} style={{ display: currentLang === lang.code ? 'none' : 'block' }}><button onClick={() => { i18n.changeLanguage(lang.code); setLangModal(false) }}> {lang.name}</button></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header