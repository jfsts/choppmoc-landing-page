import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="logo">
                    <img src="/assets/Logo - Chopp Moc (para fundo verde).png" alt="ChoppMoc Logo" className="logo-img" />
                </a>

                <div className="nav-links desktop-only">
                    <a href="#hero">Início</a>
                    <a href="#features">O Chopp</a>
                    <a href="#calculator">Calculadora</a>
                    <a href="#gallery">Indústria</a>
                    <a href="#contact">Contato</a>
                </div>

                <a
                    href="https://wa.me/5538998606066?text=Olá,%20gostaria%20de%20pedir%20um%20orçamento%20de%20Chopp%20para%20meu%20evento!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button desktop-only"
                >
                    Pedir Chopp
                </a>

                <div className="mobile-menu-btn mobile-only">
                    <Hamburger
                        toggled={isMobileMenuOpen}
                        toggle={setIsMobileMenuOpen}
                        color="currentColor"
                        size={28}
                        duration={0.4}
                        rounded
                    />
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
                    <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>O Chopp</a>
                    <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)}>Calculadora</a>
                    <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Indústria</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
                    <a
                        href="https://wa.me/5538998606066"
                        className="cta-button-mobile"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Pedir Chopp
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
