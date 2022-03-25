import React from 'react';
import logo from '../assets/img/footer-logo.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <a href="/">
                    <img src={logo} alt="#" />
                </a>
                <small className="footer__copyright">Copyright © 2022. MĂR. All rights reserved.</small>
                <div className="footer__social">
                    <a href="https://www.instagram.com/asociatiamar/" target="_blank" rel='noreferrer'>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0ZM14.0425 8.458C15.0665 8.4114 15.3937 8.4 18.0009 8.4H17.9979C20.6059 8.4 20.9319 8.4114 21.9559 8.458C22.978 8.5048 23.676 8.6666 24.288 8.90401C24.92 9.14901 25.454 9.47701 25.988 10.011C26.522 10.5446 26.85 11.0802 27.096 11.7116C27.332 12.322 27.494 13.0196 27.542 14.0417C27.588 15.0657 27.6 15.3929 27.6 18.0001C27.6 20.6073 27.588 20.9337 27.542 21.9577C27.494 22.9793 27.332 23.6772 27.096 24.2878C26.85 24.919 26.522 25.4546 25.988 25.9882C25.4546 26.5222 24.9198 26.851 24.2886 27.0962C23.6778 27.3336 22.9793 27.4954 21.9573 27.5422C20.9333 27.5888 20.6071 27.6002 17.9997 27.6002C15.3927 27.6002 15.0657 27.5888 14.0417 27.5422C13.0198 27.4954 12.322 27.3336 11.7112 27.0962C11.0802 26.851 10.5446 26.5222 10.0112 25.9882C9.47741 25.4546 9.14941 24.919 8.90401 24.2876C8.6668 23.6772 8.505 22.9795 8.458 21.9575C8.4116 20.9335 8.4 20.6073 8.4 18.0001C8.4 15.3929 8.412 15.0655 8.4578 14.0415C8.5038 13.0198 8.6658 12.322 8.9038 11.7114C9.14981 11.0802 9.47781 10.5446 10.0118 10.011C10.5454 9.47721 11.081 9.14921 11.7124 8.90401C12.3228 8.6666 13.0204 8.5048 14.0425 8.458Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.1397 10.1301C17.307 10.1298 17.4868 10.1299 17.681 10.13L18.0009 10.1301C20.5642 10.1301 20.868 10.1393 21.8802 10.1853C22.8162 10.2281 23.3242 10.3845 23.6626 10.5159C24.1106 10.6899 24.43 10.8979 24.7658 11.2339C25.1018 11.5699 25.3098 11.8899 25.4842 12.3379C25.6156 12.6759 25.7722 13.1839 25.8148 14.1199C25.8608 15.1319 25.8708 15.4359 25.8708 17.998C25.8708 20.56 25.8608 20.864 25.8148 21.876C25.772 22.812 25.6156 23.32 25.4842 23.658C25.3102 24.106 25.1018 24.425 24.7658 24.7608C24.4298 25.0968 24.1108 25.3048 23.6626 25.4788C23.3246 25.6108 22.8162 25.7668 21.8802 25.8096C20.8682 25.8556 20.5642 25.8656 18.0009 25.8656C15.4375 25.8656 15.1337 25.8556 14.1217 25.8096C13.1857 25.7664 12.6777 25.61 12.3391 25.4786C11.8911 25.3046 11.5711 25.0966 11.2351 24.7606C10.8991 24.4246 10.6911 24.1054 10.5167 23.6572C10.3853 23.3192 10.2287 22.8112 10.1861 21.8752C10.1401 20.8632 10.1309 20.5592 10.1309 17.9956C10.1309 15.4319 10.1401 15.1295 10.1861 14.1175C10.2289 13.1815 10.3853 12.6735 10.5167 12.3351C10.6907 11.8871 10.8991 11.5671 11.2351 11.2311C11.5711 10.8951 11.8911 10.6871 12.3391 10.5127C12.6775 10.3807 13.1857 10.2247 14.1217 10.1817C15.0073 10.1417 15.3505 10.1297 17.1397 10.1277V10.1301ZM23.1254 11.7241C22.4894 11.7241 21.9734 12.2395 21.9734 12.8757C21.9734 13.5117 22.4894 14.0277 23.1254 14.0277C23.7614 14.0277 24.2774 13.5117 24.2774 12.8757C24.2774 12.2397 23.7614 11.7237 23.1254 11.7237V11.7241ZM13.0709 18.0002C13.0709 15.2775 15.2783 13.0701 18.0009 13.0701H18.0007C20.7234 13.0701 22.9302 15.2775 22.9302 18.0002C22.9302 20.7228 20.7236 22.9292 18.0009 22.9292C15.2783 22.9292 13.0709 20.7228 13.0709 18.0002Z" fill="white" />
                            <path d="M18.0008 14.8C19.768 14.8 21.2008 16.2327 21.2008 18.0001C21.2008 19.7673 19.768 21.2001 18.0008 21.2001C16.2334 21.2001 14.8008 19.7673 14.8008 18.0001C14.8008 16.2327 16.2334 14.8 18.0008 14.8Z" fill="white" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/AsociatiaMAR" target="_blank" rel='noreferrer'>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0ZM19.8762 18.7907V28.5836H15.8243V18.791H13.8V15.4163H15.8243V13.3902C15.8243 10.6371 16.9674 9 20.2149 9H22.9186V12.3751H21.2286C19.9644 12.3751 19.8808 12.8467 19.8808 13.7269L19.8762 15.416H22.9377L22.5794 18.7907H19.8762Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer