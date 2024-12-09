import React, { useState } from "react";
import Header from './components/Header/Header';
import About from './components/About/About';
import Rooms from './components/Rooms/Rooms';
import Gallery from './components/Gallary/Gallery';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contacts';
import Questions from './components/Questions/Questions';
import Footer from './components/Footer/Footer';
import logo from './img/logo2.svg';
import './App.css'

function App() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="App">
            <nav className="Navigation">
                <div className='container'>
                    <a href="#header" className="logo-item"><img className='logo' src={logo} alt="logo"/></a>
                    <div className={menuActive ? 'items active' : 'items'}>
                        <a href="#about">О студии</a>
                        <a href="#rooms">Залы</a>
                        <a href="#gallery">Галерея</a>
                        <a href="#services">Услуги</a>
                        <a href="#contacts">Контакты</a>
                        <a href="#questions">Консультация</a>
                    </div>
                    <div className="burger-block" onClick={() => setMenuActive(!menuActive)}><span className="burger"></span></div>
                </div>
            </nav>
            <header id="header" ><Header /></header>
            <section id="about"><About /></section>
            <section id="rooms"><Rooms /></section>
            <section id="gallery"><Gallery /></section>
            <section id="services"><Services /></section>
            <section id="contacts"><Contacts /></section>
            <section id="questions"><Questions /></section>
            <footer><Footer /></footer>
        </div>
    )
}

export default App;
