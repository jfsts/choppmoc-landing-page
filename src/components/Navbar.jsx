import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { MessageCircle, Phone } from 'lucide-react';

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
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { href: '#hero', label: 'Início' },
        { href: '#features', label: 'O Chopp' },
        { href: '#calculator', label: 'Calculadora' },
        { href: '#gallery', label: 'Indústria' },
        { href: '#testimonials', label: 'Depoimentos' },
        { href: '#contact', label: 'Contato' },
    ];

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
            isScrolled 
                ? 'bg-[#0a0f0c]/80 backdrop-blur-2xl border-b border-emerald-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3' 
                : 'bg-transparent py-5'
        }`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <a href="#hero" onClick={handleNavClick} className="flex items-center gap-3 group">
                    <div className="relative">
                        <img 
                            src="/assets/Logo - Chopp Moc (para fundo verde).png" 
                            alt="ChoppMoc Logo" 
                            className={`transition-all duration-500 ${isScrolled ? 'h-14' : 'h-18'} group-hover:scale-105`} 
                        />
                        <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href}
                            href={link.href} 
                            onClick={handleNavClick} 
                            className="relative px-4 py-2 text-sm font-medium text-stone-400 hover:text-white transition-all duration-300 group"
                        >
                            {link.label}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-300 group-hover:w-3/4 rounded-full" />
                            <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                        </a>
                    ))}
                </div>

                {/* CTA Desktop */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="tel:+5538998606066"
                        className="flex items-center gap-2 text-stone-400 hover:text-emerald-400 transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-medium">(38) 99860-6066</span>
                    </a>
                    <a
                        href="https://wa.me/5538998606066?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Chopp!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-6 py-2.5 text-sm font-bold text-stone-900 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:-translate-y-0.5"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Pedir Chopp
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <Hamburger
                        toggled={isMobileMenuOpen}
                        toggle={setIsMobileMenuOpen}
                        color="#f5f5f5"
                        size={28}
                        duration={0.4}
                        rounded
                    />
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
                isMobileMenuOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-4'
            }`}>
                <div className="bg-[#0a0f0c]/95 backdrop-blur-3xl border-t border-emerald-500/10 p-6 shadow-2xl">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a 
                                key={link.href}
                                href={link.href} 
                                onClick={handleNavClick} 
                                className="relative px-4 py-3 text-white font-medium rounded-xl hover:bg-white/5 transition-all duration-300 group"
                            >
                                <span className="relative z-10">{link.label}</span>
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-emerald-500 to-amber-500 transition-all duration-300 group-hover:h-1/2 rounded-full" />
                            </a>
                        ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <a
                            href="https://wa.me/5538998606066?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Chopp!"
                            className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-6 py-3 text-center font-bold text-stone-900 shadow-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Pedir Chopp
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
