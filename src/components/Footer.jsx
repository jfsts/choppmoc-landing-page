import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

const Footer = () => {
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=-16.717906971114633,-43.84515091534221";

    return (
        <footer id="contact" className="bg-[#141e19] border-t border-white/10 pt-10 lg:pt-20 pb-8 text-slate-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-3 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
                        <img
                            src="/assets/Logo - Chopp Moc (preto).png"
                            alt="ChoppMoc Logo"
                            className="h-20 w-auto object-contain lg:self-start brightness-0 invert"
                        />
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            O melhor chopp para o seu evento. Qualidade premium, entrega rápida e o autêntico sabor Ecobier na sua casa.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h3 className="text-yellow-500 font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2 w-full">
                            <span className="w-8 h-1 bg-yellow-500 rounded-full inline-block"></span>
                            Contato
                        </h3>
                        <ul className="flex flex-col items-center lg:items-start gap-4">
                            <li>
                                <a href="https://wa.me/5538998606066" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start gap-3 hover:text-yellow-400 transition-colors group">
                                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-yellow-500/10 transition-colors">
                                        <Phone size={18} className="text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                                    </div>
                                    <span className="font-medium">(38) 99860-6066</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/choppmoc/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start gap-3 hover:text-yellow-400 transition-colors group">
                                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-yellow-500/10 transition-colors">
                                        <Instagram size={18} className="text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                                    </div>
                                    <span className="font-medium">@choppmoc</span>
                                </a>
                            </li>
                            <li>
                                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start justify-center lg:justify-start gap-3 hover:text-yellow-400 transition-colors group mt-2 text-left">
                                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-yellow-500/10 transition-colors shrink-0">
                                        <MapPin size={18} className="text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                                    </div>
                                    <span className="text-sm leading-relaxed mt-1">Av. Dulce Sarmento, 1632 - Monte Carmelo<br />Montes Claros - MG, 39401-485</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full">
                        <h3 className="text-white font-bold text-xl lg:text-lg mb-6 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-2 w-full">
                            <span className="w-12 lg:w-8 h-1 bg-yellow-500 rounded-full inline-block"></span>
                            <span className="leading-tight">Onde Estamos em <br className="lg:hidden" />Montes Claros MG</span>
                        </h3>
                        <div className="flex flex-col gap-5 w-full">
                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1613] shadow-lg">
                                <iframe
                                    src="https://maps.google.com/maps?q=-16.717906971114633,-43.84515091534221&hl=pt-BR&z=17&output=embed"
                                    width="100%"
                                    height="160"
                                    className="border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização ChoppMoc"
                                ></iframe>
                            </div>
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center rounded-full bg-yellow-500 py-3 text-sm font-bold text-[#141e19] shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-1 uppercase tracking-wider mt-2"
                            >
                                Traçar Rota no Google Maps
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} ChoppMoc - By FSWeb. Todos os direitos reservados.</p>
                    <p className="flex items-center gap-1">
                        Distribuidor Autorizado <span className="font-bold text-slate-400">Ecobier</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
