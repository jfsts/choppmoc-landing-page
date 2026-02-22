import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <img src="/assets/Logo - Chopp Moc (preto).png" alt="ChoppMoc Logo Preto" className="footer-logo" />
                    <p className="footer-slogan">O melhor chopp para o seu evento. Qualidade premium, entrega rápida.</p>
                </div>

                <div className="footer-contact">
                    <h3 className="footer-title">Contato</h3>
                    <ul className="contact-list">
                        <li>
                            <a href="https://wa.me/5538998606066" target="_blank" rel="noopener noreferrer">
                                <Phone size={20} className="contact-icon" />
                                <span>(38) 99860-6066</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/choppmoc/" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} className="contact-icon" />
                                <span>@choppmoc</span>
                            </a>
                        </li>
                        <li>
                            <div className="address-container">
                                <MapPin size={24} className="contact-icon" />
                                <span>Av. Dulce Sarmento, 1632 - Monte Carmelo<br />Montes Claros - MG, 39401-485</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-map">
                <h3 className="footer-title">Onde Estamos</h3>
                <div className="map-container">
                    <iframe
                        src="https://maps.google.com/maps?q=-16.717906971114633,-43.84515091534221&hl=pt-BR&z=17&output=embed"
                        width="100%"
                        height="200"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização ChoppMoc"
                    ></iframe>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ChoppMoc. Todos os direitos reservados. Distribuidor Autorizado Ecobier.</p>
            </div>
        </footer>
    );
};

export default Footer;
