import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home__row">
                    <Product title="A garota do lago (Português) Capa comum – Edição padrão, 1 janeiro 2017" 
                    price="40,90" 
                    image="https://m.media-amazon.com/images/I/81LRk6+p1HL._AC_UY218_.jpg" 
                    rating={4}/>
                    <Product title="Cafeteira Expresso Prima Latte II, Vermelho, 110v, Oster" 
                    price="1.029" 
                    image="https://images-na.ssl-images-amazon.com/images/I/51tNJ6sZn-L._AC_SX184_.jpg" 
                    rating={5}/>
                </div>
                <div className="home__row">
                    <Product title="Headset Gamer Redragon Zeus Preto e Vermelho" 
                    price="498,30" 
                    image="https://m.media-amazon.com/images/I/41SWnOEFsKL._AC_SY200_.jpg" 
                    rating={5}/>
                    <Product title="Capa de tecido para Kindle 10ª Geração" 
                    price="89,00" 
                    image="https://m.media-amazon.com/images/I/51nlVZTd0mL._AC_SY200_.jpg" 
                    rating={5}/>
                    <Product title="Cafeteira Expresso Prima Latte II, Vermelho, 110v, Oster" 
                    price="1.029" 
                    image="https://images-na.ssl-images-amazon.com/images/I/51tNJ6sZn-L._AC_SX184_.jpg" 
                    rating={5}/>
                </div>
                <div className="home__row">
                    <Product title="Cafeteira Expresso Prima Latte II, Vermelho, 110v, Oster" 
                    price="1.029" 
                    image="https://images-na.ssl-images-amazon.com/images/I/51tNJ6sZn-L._AC_SX184_.jpg" 
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
