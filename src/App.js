import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import axios from 'axios'

import Header from './components/Header'
import Footer from './components/Footer'

import { addProduct, removeProduct } from './redux/cart'
import './assets/scss/style.scss'

const languages = [
    {
        code: 'ro',
        name: 'RO',
        country_code: 'ro'
    },
    {
        code: 'en',
        name: 'EN',
        country_code: 'gb'
    },
    {
        code: 'ru',
        name: 'RU',
        country_code: 'ru'
    },
    {
        code: 'fr',
        name: 'FR',
        country_code: 'fr'
    },
]

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "ro",
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
        backend: {
            loadPath: '/lang/{{lng}}/translation.json',
        },
        react: { useSuspense: false }
    });



function App() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    let count = 1;
    const [products, setProducts] = React.useState([]);
    const [partners, setPartners] = React.useState([]);
    const [info, setInfo] = React.useState([]);

    React.useEffect(() => {
        document.title = t('page_title');
    }, [t]);

    React.useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/products');
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
        const getPartners = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/partners');
                setPartners(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getPartners();
        const getPayments = async () => {
            try {
                const res = await axios.get('https://test-provided_api_host/api/Payments');
                setInfo(res);
                console.log(info);
            } catch (error) {
                console.log(error);
            }
        }
        getPayments();
    }, [info])

    const addToCart = (product) => {
        dispatch(addProduct({ ...product, count }))
    }

    const removeFromCart = (product) => {
        dispatch(removeProduct({ ...product }))
    }

    return (
        <div className='wrapper'>
            <Header languages={languages} currentLang={i18n.language}></Header>
            <main>
                <section className="hero">
                    <div className="hero__container">
                        <div className="hero__body">
                            <h1>{t('donate')} <span>{t('food')}</span> <br /> {t('refugees')}</h1>
                            <p>
                                {t('descr1')}
                            </p>
                            <p>
                                {t('descr2')}
                            </p>
                            <h2>{t('subtitle1')}</h2>
                            <h2 className="dark">{t('subtitle2')}</h2>
                            <small>
                                {t('metatext')}
                                <a href="https://www.facebook.com/AsociatiaMAR">https://www.facebook.com/AsociatiaMAR</a>
                            </small>
                        </div>
                    </div>
                </section>

                <div className="main" id="main">
                    <div className="main__container">
                        <div className="main__body main-body">
                            <div className="main-body__products main-products">
                                {
                                    products && products.map(product => (
                                        <div key={product._id} className="main-products__product product">
                                            <img src={product.image} className="product__image" alt="#" />
                                            <div className="product__body product-body">
                                                <div className="product-body__name">{product.name}</div>
                                                <p className="product-body__desc">
                                                    {product.description}
                                                </p>
                                                <div className="product-body__price">{product.price} MDL</div>
                                                <button onClick={() => addToCart(product)} className="product-body__add button button__secondary">Adaugă în coș</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <aside className="main-body__sidebar main-sidebar">
                                <div className="main-sidebar__header">
                                    <p>Listă lunch-uri spre achitare:</p>
                                </div>
                                <div className={cart.products.length > 0 ? "main-sidebar__body sidebar-body" : 'main-sidebar__body sidebar-body sidebar-body--empty'}>
                                    {
                                        cart.products.length === 0 && <h2>Coșul este gol</h2>
                                    }
                                    {
                                        cart.products && cart.products.map(cartProduct => (
                                            <div key={cartProduct._id} className="sidebar-body__product sidebar-product">
                                                <div className="sidebar-product__name">{cartProduct.name}</div>
                                                <div className="sidebar-product__meta product-meta">
                                                    <div className="product-meta__price"><strong>Preț:</strong>{cartProduct.price * cartProduct.count} MDL</div>
                                                    <div className="product-meta__count">x{cartProduct.count}</div>
                                                </div>
                                                <button onClick={() => removeFromCart(cartProduct)} className="sidebar-product__delete" type="button">Anulează</button>
                                            </div>
                                        ))
                                    }
                                </div>
                                {
                                    cart.products.length > 0
                                        ?
                                        <div className="main-sidebar__footer sidebar-footer">
                                            <div className="sidebar-footer__total">
                                                <strong>Preț final:</strong>
                                                {cart.totalPrice} MDL
                                            </div>
                                            <button type="button" className="sidebar-footer__checkout button button__outline">
                                                Spre achitare
                                            </button>
                                        </div>
                                        :
                                        ''
                                }
                            </aside>
                        </div>
                    </div>
                </div>

                <section className="partners">
                    <div className="partners__container">
                        <div className="partners__header">
                            <h2>Partenerii noștri</h2>
                        </div>
                        <div className="partners__body">
                            {
                                partners && partners.map(partner => (
                                    <img key={partner._id} src={partner.image} className="partners__partner" alt="#" />
                                ))
                            }
                        </div>

                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App