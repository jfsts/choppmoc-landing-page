import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Clock, ArrowUp } from 'lucide-react';
import GlassCard from './modern/GlassCard';

const Footer = () => {
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=-16.717906971114633,-43.84515091534221";

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="relative bg-gradient-to-b from-[#0a0f0c] via-[#061008] to-[#030503] pt-20 pb-8 text-stone-300 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0f0c] to-transparent" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute top-40 right-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-4 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
                        <img
                            src="/assets/Logo - Chopp Moc (preto).png"
                            alt="ChoppMoc Logo"
                            className="h-20 w-auto object-contain lg:self-start brightness-0 invert"
                        />
                        <p className="text-stone-400 text-sm leading-relaxed">
                            O melhor chopp para o seu evento. Qualidade premium, entrega rápida e o autêntico sabor Ecobier na sua casa.
                        </p>
                        {/* Social links */}
                        <div className="flex gap-4">
                            <a href="https://wa.me/5538998606066" target="_blank" rel="noopener noreferrer" 
                               className="p-3 rounded-full bg-white/5 border border-white/10 text-stone-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/choppmoc/" target="_blank" rel="noopener noreferrer" 
                               className="p-3 rounded-full bg-white/5 border border-white/10 text-stone-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />
                            Links Rápidos
                        </h3>
                        <ul className="space-y-3 w-full flex flex-col items-center lg:items-start">
                            {[
                                { href: '#hero', label: 'Início' },
                                { href: '#features', label: 'O Chopp' },
                                { href: '#calculator', label: 'Calculadora' },
                                { href: '#gallery', label: 'Indústria' },
                                { href: '#testimonials', label: 'Depoimentos' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-stone-400 hover:text-emerald-400 transition-colors duration-300 flex items-center justify-center lg:justify-start gap-2 group">
                                        <span className="w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-4" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />
                            Contato
                        </h3>
                        <ul className="space-y-4 w-full flex flex-col items-center lg:items-start">
                            <li>
                                <a href="https://wa.me/5538998606066" target="_blank" rel="noopener noreferrer" 
                                   className="flex items-center justify-center lg:justify-start gap-3 text-stone-400 hover:text-emerald-400 transition-colors group">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                                        <Phone className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-sm">(38) 99860-6066</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start justify-center lg:justify-start gap-3 text-stone-400">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 mt-0.5">
                                        <MapPin className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-sm leading-relaxed text-left">
                                        Av. Dulce Sarmento, 1632 - Monte Carmelo<br />
                                        Montes Claros - MG, 39401-485
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center justify-center lg:justify-start gap-3 text-stone-400">
                                    <div className="p-2 rounded-lg bg-amber-500/10">
                                        <Clock className="w-4 h-4 text-amber-500" />
                                    </div>
                                    <span className="text-sm">Seg - Sáb: 8h às 20h</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />
                            Localização
                        </h3>
                        <GlassCard variant="dark" className="overflow-hidden w-full">
                            <iframe
                                src="https://maps.google.com/maps?q=-16.717906971114633,-43.84515091534221&hl=pt-BR&z=17&output=embed"
                                width="100%"
                                height="160"
                                className="border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização ChoppMoc"
                            />
                        </GlassCard>
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full text-center rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:-translate-y-0.5 inline-block"
                        >
                            Ver no Maps
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4 text-center">
                    <p className="text-sm text-stone-500">
                        &copy; {new Date().getFullYear()} ChoppMoc - By FSWeb. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-sm text-stone-500">
                            Distribuidor Autorizado <span className="font-bold text-emerald-400">Ecobier</span>
                        </span>
                        <button 
                            onClick={scrollToTop}
                            className="p-2 rounded-full bg-white/5 border border-white/10 text-stone-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;