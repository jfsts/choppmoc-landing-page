import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlowButton from './modern/GlowButton';
import BubbleParticles from './modern/BubbleParticles';
import ScrollReveal from './modern/ScrollReveal';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-[#0a0f0c] via-[#0d1a12] to-[#0a0f0c]">
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">
                {/* Video background */}
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/a54c90efe_Ecobier-Chopp-Caneca.mp4" type="video/mp4" />
                </video>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-linear-to-br from-[#0a0f0c]/95 via-[#0d1a12]/80 to-[#0a0f0c]/95 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent z-10" />

                {/* Animated blobs */}
                <div
                    className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob"
                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                />
                <div
                    className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-blob"
                    style={{
                        animationDelay: '2s',
                        transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
                    }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-5 z-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Bubble particles */}
            <BubbleParticles count={30} color="rgba(16, 185, 129, 0.4)" />

            {/* Main content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
                        <ScrollReveal direction="up" delay={0.1}>
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                                <Sparkles className="w-4 h-4" />
                                Distribuidor Oficial Ecobier
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.2}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                                Sua festa merece o
                                <br />
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-linear-to-r from-emerald-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
                                        Melhor Chopp
                                    </span>
                                    <span className="absolute inset-0 blur-2xl bg-linear-to-r from-emerald-400/50 via-amber-300/50 to-emerald-400/50 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
                                        Melhor Chopp
                                    </span>
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.3}>
                            <p className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-xl">
                                Descubra a Experiência <span className="text-emerald-400 font-semibold">ChoppMoc</span> com o autêntico Chopp Ecobier entregue pronto na sua casa ou evento.
                                <span className="text-amber-400 font-semibold"> Qualidade premium, sabor incomparável.</span>
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.4}>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <GlowButton
                                    variant="amber"
                                    size="lg"
                                    href="https://wa.me/5538998606066?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Chopp!"
                                    icon={ArrowRight}
                                >
                                    Solicitar Orçamento
                                </GlowButton>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.5}>
                            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                                {[
                                    { number: '500+', label: 'Eventos' },
                                    { number: '100%', label: 'Puro Malte' },
                                    { number: '24h', label: 'Entrega' },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl font-bold text-white">{stat.number}</div>
                                        <div className="text-xs text-stone-500 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Content - Product Image */}
                    <ScrollReveal direction="up" delay={0.3} className="relative flex items-center justify-center mt-8 lg:mt-0">
                        <div className="relative">
                            {/* Subtle glow */}
                            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-amber-500/20 blur-3xl rounded-full scale-75" />

                            {/* Main image */}
                            <img
                                src="/assets/Copo_Joinvile_EcobierChopp.png"
                                alt="Copo Ecobier Chopp"
                                className="relative z-10 w-48 sm:w-64 lg:w-80 h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-float"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-xs text-stone-500 uppercase tracking-wider">Role para baixo</span>
                    <div className="w-6 h-10 rounded-full border-2 border-stone-600 flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-emerald-500 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
