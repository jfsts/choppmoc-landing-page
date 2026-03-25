import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';

const testimonials = [
    {
        id: 1,
        name: 'Maria Silva',
        role: 'Festa de Aniversário',
        content: 'Fiz a festa de 50 anos do meu pai e o ChoppMoc foi um sucesso! Chegou tudo certinho, a máquina funcionou direitinho e o chopp geladinho. Todo mundo ficou elogiando!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?img=9',
    },
    {
        id: 2,
        name: 'João Santos',
        role: 'Confraternização da Empresa',
        content: 'Contratamos para a confraternização de fim de ano da empresa e foi perfeito! Entrega na hora certa, chopp bom demais. A galera adorou, vamos contratar de novo!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?img=3',
    },
    {
        id: 3,
        name: 'Ana Oliveira',
        role: 'Casamento',
        content: 'No meu casamento o chopp foi o grande sucesso! Os convidados não paravam de elogiar. A equipe foi muito atenciosa e cuidou de tudo. Super recomendo!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?img=5',
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        role: 'Evento da Empresa',
        content: 'Já pedimos o ChoppMoc três vezes para os eventos da empresa. Sempre chega no horário, o chopp fica perfeito e o atendimento é nota 10. Melhor custo-benefício da região!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?img=8',
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="relative py-24 bg-gradient-to-b from-stone-950 via-emerald-950/20 to-stone-950 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-6">
                            <Star className="w-4 h-4" />
                            Depoimentos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">clientes</span> dizem
                        </h2>
                        <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                            A satisfação dos nossos clientes é nossa maior recompensa. 
                            Veja o que eles têm a dizer sobre nossa experiência.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Testimonials carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                    <GlassCard variant="primary" className="p-8 md:p-12">
                                        <div className="flex flex-col items-center text-center">
                                            {/* Quote icon */}
                                            <Quote className="w-12 h-12 text-emerald-500/30 mb-6" />
                                            
                                            {/* Rating */}
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                            
                                            {/* Content */}
                                            <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-8 italic">
                                                "{testimonial.content}"
                                            </p>
                                            
                                            {/* Author */}
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={testimonial.name}
                                                    className="w-14 h-14 rounded-full border-2 border-emerald-500/50 object-cover"
                                                />
                                                <div className="text-left">
                                                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                                    <p className="text-sm text-emerald-400">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        
                        {/* Dots indicator */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'w-8 bg-emerald-500' 
                                            : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                        
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <ScrollReveal delay={0.3}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                        {[
                            { number: '500+', label: 'Eventos Realizados' },
                            { number: '98%', label: 'Clientes Satisfeitos' },
                            { number: '10+', label: 'Anos de Experiência' },
                            { number: '24h', label: 'Entrega Rápida' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-stone-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Testimonials;