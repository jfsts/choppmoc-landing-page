import React, { useState } from 'react';
import { ChevronDown, Building2, MapPin, Factory, Leaf } from 'lucide-react';
import GlassCard from './modern/GlassCard';
import ScrollReveal from './modern/ScrollReveal';

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

    const features = [
        { icon: Factory, label: 'Tecnologia de Ponta' },
        { icon: Leaf, label: 'Sustentabilidade' },
        { icon: Building2, label: 'Estrutura Moderna' },
        { icon: MapPin, label: 'Socorro - SP' },
    ];

    return (
        <section id="gallery" className="relative py-24 bg-linear-to-b from-[#0a0f0c] via-[#0d1a12] to-[#0a0f0c] overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#0a0f0c] to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#0a0f0c] to-transparent" />
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-6">
                            <Factory className="w-4 h-4" />
                            Nossa Estrutura
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Conheça a
                            <br />
                            <span className="bg-linear-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                                Indústria Ecobier
                            </span>
                        </h2>
                        <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                            Nossa estrutura conta com tecnologia de ponta para garantir que a melhor
                            bebida chegue ao seu copo.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Brand section */}
                <ScrollReveal delay={0.2}>
                    <div className="mb-20">
                        <GlassCard variant="primary" className="p-8 lg:p-12">
                            <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                                <div className="lg:w-1/3 flex justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
                                        <img
                                            src="/assets/Logo_Ecobier_Chopp.png"
                                            alt="Logo Ecobier Chopp"
                                            className="relative h-32 sm:h-40 lg:h-48 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/3 text-center lg:text-left">
                                    <h3 className="text-3xl font-bold text-white mb-4">Tradição InNatura</h3>
                                    <p className="text-stone-400 leading-relaxed text-lg mb-6">
                                        A Ecobier é uma marca brasileira, tradicional e familiar, com mais de 20 anos de atuação
                                        no mercado de cervejas, com produção baseada no Circuito das Águas Paulista, na cidade
                                        de Socorro (SP). Destaca-se por unir a tradição cervejeira à sustentabilidade.
                                    </p>

                                    {/* Features grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 justify-items-center lg:justify-items-start">
                                        {features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm text-emerald-400">
                                                <feature.icon className="w-4 h-4" />
                                                <span>{feature.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className="flex items-center justify-center lg:justify-start gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group mx-auto lg:mx-0"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                    >
                                        {isExpanded ? 'Ocultar detalhes' : 'Ler mais sobre a origem'}
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-stone-400 pl-4 border-l-2 border-emerald-500/50 text-left">
                                            <strong className="text-white">Origem e Localização:</strong> Produzida pela Socorro Bebidas
                                            em Socorro-SP, uma área conhecida por sua água de alta pureza, o que influencia a
                                            qualidade da bebida. A marca também é conhecida por sua preocupação com o meio ambiente
                                            e por oferecer uma experiência de chopp artesanal de alta qualidade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </ScrollReveal>

                {/* Gallery Grid */}
                <ScrollReveal delay={0.3}>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-20">
                        {droneImages.map((src, index) => (
                            <div
                                key={index}
                                className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/5 bg-stone-900"
                            >
                                <img
                                    src={src}
                                    alt={`Visão aérea Indústria Ecobier ${index + 1}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-medium">
                                            <Building2 className="w-4 h-4" />
                                            Estrutura Ecobier
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Map */}
                <ScrollReveal delay={0.4}>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Localização da Fábrica</h3>
                            <p className="text-stone-400">Socorro - SP, Circuito das Águas Paulista</p>
                        </div>
                        <GlassCard variant="dark" className="overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-emerald-500/50 to-transparent z-10" />
                                <iframe
                                    title="Localização Indústria Ecobier"
                                    src="https://maps.google.com/maps?q=Socorro+Bebidas,+Socorro+-+SP&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="250"
                                    className="border-0 w-full"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </GlassCard>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Gallery;
