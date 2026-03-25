import React from 'react';
import { GlassWater, ThumbsUp, Medal, Truck, Droplets, Zap, Shield, Clock } from 'lucide-react';
import GlassCard from './modern/GlassCard';
import ScrollReveal from './modern/ScrollReveal';

const Features = () => {
    const features = [
        {
            icon: Medal,
            title: 'Puro Malte',
            description: 'Receita original com ingredientes selecionados e malte premium importado.',
            color: 'emerald',
        },
        {
            icon: GlassWater,
            title: 'Refrescante',
            description: 'Temperatura ideal e colarinho perfeito para máxima satisfação.',
            color: 'amber',
        },
        {
            icon: Shield,
            title: 'Qualidade Garantida',
            description: 'Processo produtivo moderno e seguro com certificação de qualidade.',
            color: 'emerald',
        },
        {
            icon: Truck,
            title: 'Entrega Rápida',
            description: 'Receba a máquina pronta para uso no seu evento em até 24 horas.',
            color: 'amber',
        },
        {
            icon: Droplets,
            title: 'Sabor Autêntico',
            description: 'O sabor inigualável do verdadeiro chopp Ecobier, fresco e natural.',
            color: 'emerald',
        },
        {
            icon: Zap,
            title: 'Praticidade Total',
            description: 'Máquina completa, fácil de usar e com todo suporte técnico incluso.',
            color: 'amber',
        },
    ];

    return (
        <section id="features" className="relative py-24 bg-linear-to-b from-[#0a0f0c] via-[#0d1a12] to-[#0a0f0c] overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#0a0f0c] to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#0a0f0c] to-transparent" />
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-6">
                            <Zap className="w-4 h-4" />
                            Por que escolher o Chopp Ecobier?
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            O Sabor Autêntico do
                            <br />
                            <span className="bg-linear-to-r from-emerald-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
                                Chopp Ecobier
                            </span>
                        </h2>
                        <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                            Produzido com os mais rigorosos padrões de qualidade, 
                            garantindo um sabor refrescante e inigualável para paladares exigentes.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <GlassCard 
                                variant={feature.color === 'emerald' ? 'primary' : 'amber'}
                                hoverEffect
                                glowOnHover
                                className="p-8 h-full"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                                        feature.color === 'emerald' 
                                            ? 'bg-emerald-500/20 text-emerald-400' 
                                            : 'bg-amber-500/20 text-amber-400'
                                    }`}>
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-stone-400 grow">{feature.description}</p>
                                    
                                    {/* Decorative line */}
                                    <div className={`mt-6 h-1 w-12 rounded-full ${
                                        feature.color === 'emerald' 
                                            ? 'bg-linear-to-r from-emerald-500 to-emerald-400' 
                                            : 'bg-linear-to-r from-amber-500 to-amber-400'
                                    }`} />
                                </div>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Product showcase */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-20 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-96 h-96 bg-linear-to-r from-emerald-500/20 to-amber-500/20 rounded-full blur-3xl" />
                        </div>
                        <div className="relative flex flex-col lg:flex-row items-center gap-12 bg-linear-to-r from-emerald-900/20 to-amber-900/20 rounded-3xl p-8 lg:p-12 border border-white/5">
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Experimente a <span className="text-emerald-400">Diferença</span>
                                </h3>
                                <p className="text-stone-400 mb-6">
                                    O Chopp Ecobier é mais do que uma bebida, é uma experiência. 
                                    Cada gole reflete anos de tradição e compromisso com a qualidade.
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <div className="flex items-center gap-2 text-emerald-400">
                                        <Clock className="w-5 h-5" />
                                        <span className="text-sm font-medium">Entrega em 24h</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-amber-400">
                                        <Shield className="w-5 h-5" />
                                        <span className="text-sm font-medium">Garantia de qualidade</span>
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-linear-to-r from-emerald-500/30 to-amber-500/30 blur-2xl rounded-full" />
                                    <img
                                        src="/assets/Copo_Joinvile_EcobierChopp.png"
                                        alt="Copo Ecobier Chopp"
                                        className="relative w-64 lg:w-80 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-float"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Features;
