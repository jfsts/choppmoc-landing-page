import React, { useState, useEffect } from 'react';
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

    const handleNavClick = () => {
        setIsMobileMenuOpen(false); // Close mobile menu if open
    };

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-[#141e19]/70 backdrop-blur-md border-b border-white/10 shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="#hero" onClick={handleNavClick} className="flex items-center gap-3">
                    <img src="/assets/Logo - Chopp Moc (para fundo verde).png" alt="ChoppMoc Logo" className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`} />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#hero" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
                        Início
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#features" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
                        O Chopp
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#calculator" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
                        Calculadora
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#gallery" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
                        Indústria
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#contact" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
                        Contato
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
                    </a>
                </div>

                {/* CTA Desktop */}
                <div className="hidden md:flex">
                    <a
                        href="https://wa.me/5538998606066?text=Olá,%20gostaria%20de%20pedir%20um%20orçamento%20de%20Chopp%20para%20meu%20evento!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-yellow-500 px-6 py-2.5 text-sm font-bold text-[#141e19] shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-0.5 uppercase tracking-wide"
                    >
                        Pedir Chopp
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-white">
                    <Hamburger
                        toggled={isMobileMenuOpen}
                        toggle={setIsMobileMenuOpen}
                        color="currentColor"
                        size={28}
                        duration={0.4}
                        rounded
                    />
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#141e19]/95 backdrop-blur-3xl border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl">
                    <a href="#hero" onClick={handleNavClick} className="text-white font-medium border-b border-white/10 pb-2">Início</a>
                    <a href="#features" onClick={handleNavClick} className="text-white font-medium border-b border-white/10 pb-2">O Chopp</a>
                    <a href="#calculator" onClick={handleNavClick} className="text-white font-medium border-b border-white/10 pb-2">Calculadora</a>
                    <a href="#gallery" onClick={handleNavClick} className="text-white font-medium border-b border-white/10 pb-2">Indústria</a>
                    <a href="#contact" onClick={handleNavClick} className="text-white font-medium border-b border-white/10 pb-2">Contato</a>
                    <a
                        href="https://wa.me/5538998606066"
                        className="rounded-full bg-yellow-500 px-6 py-3 text-center font-bold text-[#141e19] mt-2 shadow-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Pedir Chopp
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
