import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="video-background-container">
                <video
                    className="video-background"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/a54c90efe_Ecobier-Chopp-Caneca.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">Sua festa merece o <span className="highlight">Melhor Chopp</span></h1>
                <p className="hero-subtitle">Descubra a Experiência ChoppMoc com o autêntico Chopp Ecobier na sua casa ou evento.</p>
                <div className="hero-actions">
                    <a href="https://wa.me/5538998606066" className="cta-button-large">
                        Solicite um Orçamento Online
                    </a>
                </div>
            </div>

            <div className="hero-image-container">
                <img src="/assets/barril 1.png" alt="Barril de Chopp Ecobier" className="hero-barrel-img" />
            </div>
        </section>
    );
};

export default Hero;
