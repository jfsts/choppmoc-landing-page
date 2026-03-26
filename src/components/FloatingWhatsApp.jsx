import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Tooltip */}
            <div className="group relative">
                <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-stone-900 border border-white/10 rounded-xl px-4 py-2 shadow-xl backdrop-blur-xl">
                        <p className="text-sm text-white font-medium whitespace-nowrap">Precisa de ajuda?</p>
                        <p className="text-xs text-stone-400">Fale conosco no WhatsApp</p>
                    </div>
                    <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-stone-900 border-r border-b border-white/10" />
                </div>

                {/* Main button */}
                <a
                    href="https://wa.me/5538998606066?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Chopp!"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 animate-[pulse-glow_3s_ease-in-out_infinite]"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Fale conosco no WhatsApp"
                >
                    {/* Pulse ring */}
                    <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />

                    {/* Icon */}
                    <MessageCircle className="h-6 w-6 relative z-10" strokeWidth={2} />
                </a>
            </div>
        </div>
    );
};

export default FloatingWhatsApp;