import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home__row">
                    <Product
                    id={4523452345}
                    title="A garota do lago (Português) Capa comum – Edição padrão, 1 janeiro 2017" 
                    price="40,90" 
                    image="https://m.media-amazon.com/images/I/81LRk6+p1HL._AC_UY218_.jpg" 
                    rating={4}/>
                    <Product 
                    id={39563847}
                    title="Cafeteira Expresso Prima Latte II, Vermelho, 110v, Oster" 
                    price="1.029" 
                    image="https://images-na.ssl-images-amazon.com/images/I/51tNJ6sZn-L._AC_SX184_.jpg" 
                    rating={5}/>
                </div>
                <div className="home__row">
                    <Product
                    id={56754675} 
                    title="Headset Gamer Redragon Zeus Preto e Vermelho" 
                    price="498,30" 
                    image="https://m.media-amazon.com/images/I/41SWnOEFsKL._AC_SY200_.jpg" 
                    rating={5}/>
                    <Product
                    id={4095876349}
                    title="Capa de tecido para Kindle 10ª Geração" 
                    price="89,00" 
                    image="https://m.media-amazon.com/images/I/51nlVZTd0mL._AC_SY200_.jpg" 
                    rating={5}/>
                    <Product
                    id={34958763}
                    title="Pingente Avião Life by Vivara" 
                    price="105" 
                    image="https://images-na.ssl-images-amazon.com/images/I/31P5szb-+2L._AC_SX184_.jpg" 
                    rating={5}/>
                </div>
                <div className="home__row">
                    <Product
                    id={4958763456}
                    title="Kindle 10a. geração com iluminação embutida" 
                    price="331,55" 
                    image="https://m.media-amazon.com/images/I/61X0ISBpD-L._AC_UL320_.jpg" 
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
