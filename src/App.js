import React from "react";
import Header from './Header';
import About from './About';
import Rooms from './Rooms';
import Gallery from './Gallery';
import Services from './Services';
import Contacts from './Contacts';
import Questions from './Questions';
import Footer from './Footer';
import logo from './img/logo.svg';
import './App.css'

function App() {
    return (
        <div className="App">
            <nav className="Navigation">
                <div className='container'>
                    <a href="#header"><img className='logo' src={logo} alt="logo"/></a>
                    <div className='items'>
                        <a href="#about">О студии</a>
                        <a href="#rooms">Залы</a>
                        <a href="#gallery">Галерея</a>
                        <a href="#services">Услуги</a>
                        <a href="#contacts">Контакты</a>
                        <a href="#questions">Консультация</a>
                    </div>
                    <span className="burger hide"></span>
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
