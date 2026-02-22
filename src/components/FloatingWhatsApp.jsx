import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/5538998606066?text=Olá,%20gostaria%20de%20pedir%20um%20orçamento%20de%20Chopp%20para%20meu%20evento!"
            className="floating-whatsapp mobile-only"
            target="_blank"
            rel="noopener noreferrer"
            title="Fale conosco no WhatsApp"
        >
            <img
                src="/assets/WhatsApp_Logo_PNG_Sem_Fundo_Transparente.png"
                alt="Fale no WhatsApp"
                className="whatsapp-icon"
            />
        </a>
    );
};

export default FloatingWhatsApp;
