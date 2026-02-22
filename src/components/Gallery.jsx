import React, { useState } from 'react';

const Gallery = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const droneImages = [
        "/assets/dji_fly_20250417_124302_859_1744904602842_photo.jpg",
        "/assets/dji_fly_20250411_113922_831_1744382389369_photo (2).jpg",
        "/assets/dji_fly_20250417_112026_844_1744899678910_photo.jpg",
        "/assets/dji_fly_20250417_112040_845_1744899663053_photo.jpg",
        "/assets/dji_fly_20250417_112050_846_1744899701483_photo.jpg",
        "/assets/dji_fly_20250417_113058_853_1744900285316_photo.jpg"
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-header">
                <h2 className="section-title center">Conheça a <span className="highlight-dark">Indústria Ecobier</span></h2>
                <div className="title-underline center"></div>
                <p className="gallery-subtitle">
                    Nossa estrutura conta com tecnologia de ponta para garantir que a melhor
                    bebida chegue ao seu copo. Estrutura grandiosa que reflete a qualidade do Chopp Ecobier.
                </p>
            </div>

            <div className="industry-info-container">
                <div className="industry-text">
                    <img
                        src="/assets/Logo_Ecobier_Chopp.png"
                        alt="Logo Ecobier"
                        className="industry-brand-logo"
                    />
                    <p className="industry-intro">
                        A Ecobier é uma marca brasileira, tradicional e familiar, com mais de 20 anos de atuação no mercado de cervejas, com produção baseada no Circuito das Águas Paulista, na cidade de Socorro (SP). Destaca-se por unir a tradição cervejeira à sustentabilidade, produzindo chopps e cervejas com águas nobres, focando em qualidade e no padrão "InNatura".
                    </p>

                    <button
                        className="accordion-toggle"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Ocultar detalhes' : 'Ler mais sobre a origem e localização'}
                        <svg className={`accordion-icon ${isExpanded ? 'rotated' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </button>

                    <div className={`accordion-content ${isExpanded ? 'expanded' : ''}`}>
                        <p>
                            <strong>Origem e Localização:</strong> Produzida pela Socorro Bebidas em Socorro-SP, uma área conhecida por sua água de alta pureza, o que influencia a qualidade da bebida. A marca também é conhecida por sua preocupação com o meio ambiente e por oferecer uma experiência de chopp artesanal de alta qualidade para o consumidor final.
                        </p>
                    </div>
                </div>

                <div className="industry-map">
                    <iframe
                        title="Localização Indústria Ecobier"
                        src="https://maps.google.com/maps?q=-22.578006366118778,-46.53661079737324&z=17&output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <div className="gallery-grid">
                {droneImages.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Visão aérea Indústria Ecobier ${index + 1}`} loading="lazy" />
                        <div className="gallery-overlay">
                            <span>Estrutura Ecobier</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
