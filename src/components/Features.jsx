import React from 'react';
import { GlassWater, ThumbsUp, Medal, Truck } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" className="features-section">
            <div className="features-container">

                <div className="features-text-content">
                    <h2 className="section-title">O Sabor Autêntico do <span className="highlight-dark">Chopp Ecobier</span></h2>
                    <div className="title-underline"></div>

                    <p className="features-description">
                        O Chopp Ecobier é produzido com os mais rigorosos padrões de qualidade,
                        garantindo um sabor refrescante e inigualável. Uma experiência premium
                        para paladares exigentes.
                    </p>

                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <Medal size={32} color="var(--color-primary)" />
                            </div>
                            <div className="benefit-text">
                                <h3>Puro Malte</h3>
                                <p>Receita original com ingredientes selecionados</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <GlassWater size={32} color="var(--color-primary)" />
                            </div>
                            <div className="benefit-text">
                                <h3>Refrescante</h3>
                                <p>Temperatura ideal, colarinho perfeito</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <ThumbsUp size={32} color="var(--color-primary)" />
                            </div>
                            <div className="benefit-text">
                                <h3>Qualidade Garantida</h3>
                                <p>Processo produtivo moderno e seguro</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <Truck size={32} color="var(--color-primary)" />
                            </div>
                            <div className="benefit-text">
                                <h3>Entrega Rápida</h3>
                                <p>Receba a máquina de chopp pronta pro seu evento</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-image-container">
                    <div className="image-wrapper">
                        <img src="/assets/Copo_Joinvile_EcobierChopp.png" alt="Copo Joinvile Ecobier Chopp" className="feature-img copo" />
                        <div className="feature-glow"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;
