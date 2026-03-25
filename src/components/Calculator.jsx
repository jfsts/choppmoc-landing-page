import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, Database, Lightbulb, ClipboardList, Beaker, Users, Clock } from 'lucide-react';
import GlassCard from './modern/GlassCard';
import ScrollReveal from './modern/ScrollReveal';

const Calculator = () => {
    const [adults, setAdults] = useState(30);
    const [duration, setDuration] = useState('media');
    const [useMargin, setUseMargin] = useState(true);

    const durationRates = {
        curta: { label: 'Curta', sublabel: 'até 4h', rate: 1 },
        media: { label: 'Média', sublabel: '4-6h', rate: 1.5 },
        longa: { label: 'Longa', sublabel: '6h+', rate: 2.5 }
    };

    const calculateBarrels = (targetLiters) => {
        if (targetLiters <= 0) return { kegs30: 0, kegs50: 0, total: 0 };

        let kegs50 = Math.floor(targetLiters / 50);
        let remainder = targetLiters - (kegs50 * 50);

        let kegs30 = 0;

        if (remainder > 0) {
            if (remainder <= 30) {
                kegs30 = 1;
            } else {
                kegs50 += 1;
            }
        }

        const total = (kegs50 * 50) + (kegs30 * 30);
        return { kegs30, kegs50, total };
    };

    const calculation = useMemo(() => {
        const baseLiters = adults * durationRates[duration].rate;
        const targetLiters = useMargin ? baseLiters * 1.15 : baseLiters;
        const config = calculateBarrels(targetLiters);

        return {
            baseLiters: Math.round(baseLiters),
            targetLiters: Math.round(targetLiters),
            marginLiters: Math.round(targetLiters - baseLiters),
            ...config
        };
    }, [adults, duration, useMargin]);

    return (
        <section id="calculator" className="relative py-24 bg-gradient-to-b from-[#0a0f0c] via-[#0d1a12] to-[#0a0f0c] overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0f0c] to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0f0c] to-transparent" />
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2" />
                <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 mb-6">
                            <Beaker className="w-4 h-4" />
                            Calculadora
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Calculadora de
                            <br />
                            <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                                Chopp
                            </span>
                        </h2>
                        <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                            Descubra a quantidade ideal de Chopp Ecobier para garantir a alegria da sua festa, 
                            sem faltar e sem sobrar!
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Calculator Panel */}
                    <ScrollReveal className="lg:col-span-2">
                        <GlassCard variant="dark" className="p-6 lg:p-8">
                            {/* Adults input */}
                            <div className="mb-8">
                                <label className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                                    <Users className="w-5 h-5 text-amber-400" />
                                    Quantos adultos bebem chopp?
                                </label>
                                <div className="flex items-center gap-6">
                                    <input
                                        type="range"
                                        min="5"
                                        max="200"
                                        step="5"
                                        value={adults}
                                        onChange={(e) => setAdults(Number(e.target.value))}
                                        className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400"
                                    />
                                    <div className="flex flex-col items-center justify-center shrink-0 w-20">
                                        <span className="text-4xl font-extrabold text-amber-400 leading-none tabular-nums">{adults}</span>
                                        <span className="text-xs uppercase tracking-wider text-stone-500 font-bold mt-1">Pessoas</span>
                                    </div>
                                </div>
                            </div>

                            {/* Duration buttons */}
                            <div className="mb-8">
                                <label className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                                    <Clock className="w-5 h-5 text-emerald-400" />
                                    Tipo e duração da festa
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {Object.entries(durationRates).map(([key, { label, sublabel }]) => (
                                        <button
                                            key={key}
                                            onClick={() => setDuration(key)}
                                            className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                                                duration === key 
                                                    ? 'border-emerald-500 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/25' 
                                                    : 'border-stone-700 text-stone-400 hover:border-stone-500 hover:text-white'
                                            }`}
                                        >
                                            <span className="font-bold">{label}</span>
                                            <span className="text-xs opacity-70">{sublabel}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Safety margin toggle */}
                            <div className="mb-8 pb-8 border-b border-dashed border-white/10">
                                <label className="flex items-center gap-4 cursor-pointer group">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={useMargin}
                                            onChange={() => setUseMargin(!useMargin)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-12 h-6 bg-stone-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500 shrink-0" />
                                    </div>
                                    <span className="text-base text-stone-300 font-medium group-hover:text-white transition-colors">
                                        Margem de segurança <span className="text-emerald-400">+15%</span>
                                        <span className="block text-sm text-stone-500">Recomendado para evitar falta</span>
                                    </span>
                                </label>
                            </div>

                            {/* Result */}
                            <div className="rounded-2xl bg-gradient-to-br from-emerald-900/50 to-amber-900/30 border border-emerald-500/20 p-6 lg:p-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Liters */}
                                    <div className="text-center md:border-r border-white/10 md:pr-6">
                                        <h4 className="text-sm uppercase tracking-wide text-stone-400 mb-2">Total de Litros</h4>
                                        <div className="text-5xl lg:text-6xl font-extrabold text-amber-400 leading-none tabular-nums">
                                            {calculation.targetLiters}
                                            <span className="text-2xl text-white font-medium ml-2">L</span>
                                        </div>
                                        {useMargin && (
                                            <span className="inline-block mt-3 rounded-full bg-emerald-500/20 px-4 py-1 text-sm text-emerald-300">
                                                Incluindo margem de ~{calculation.marginLiters}L
                                            </span>
                                        )}
                                    </div>

                                    {/* Barrels */}
                                    <div className="text-center md:text-left">
                                        <h4 className="text-sm uppercase tracking-wide text-stone-400 mb-4">Quantidade de Barris</h4>
                                        <div className="space-y-3">
                                            <div className={`flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl bg-white/5 transition-opacity ${calculation.kegs50 > 0 ? 'opacity-100' : 'opacity-40'}`}>
                                                <Database className="w-6 h-6 text-amber-400" />
                                                <span className="text-xl">
                                                    <strong className="text-amber-400 text-2xl">{calculation.kegs50}</strong>x Barril 50L
                                                </span>
                                            </div>
                                            <div className={`flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl bg-white/5 transition-opacity ${calculation.kegs30 > 0 ? 'opacity-100' : 'opacity-40'}`}>
                                                <Database className="w-5 h-5 text-amber-400" />
                                                <span className="text-lg">
                                                    <strong className="text-amber-400 text-xl">{calculation.kegs30}</strong>x Barril 30L
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                                    <p className="text-stone-400">
                                        Rende aproximadamente <strong className="text-white text-lg">{Math.floor((calculation.total * 1000) / 400)} copos</strong> de 400ml
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </ScrollReveal>

                    {/* Info Panel */}
                    <div className="flex flex-col gap-6">
                        <ScrollReveal delay={0.2}>
                            <GlassCard variant="primary" className="p-6 relative overflow-hidden">
                                {/* Chopeira image - bottom right corner */}
                                <div className="absolute -bottom-4 -right-4 w-36 h-36 opacity-30">
                                    <img
                                        src="/assets/256700-1.png"
                                        alt="Chopeira Ecobier"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-start gap-4 mb-4">
                                        <Lightbulb className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                                        <h3 className="text-xl font-bold text-white">Dicas Importantes</h3>
                                    </div>
                                    <ul className="space-y-3 text-sm text-stone-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400 mt-1">•</span>
                                        <span><strong className="text-white">Quem bebe:</strong> Conte apenas os adultos que bebem chopp</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400 mt-1">•</span>
                                        <span><strong className="text-white">Outras bebidas:</strong> Reduza a quantidade se houver outras opções</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400 mt-1">•</span>
                                        <span><strong className="text-white">Temperatura:</strong> Sirva entre 0ºC e -2ºC</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400 mt-1">•</span>
                                        <span><strong className="text-white">Margem:</strong> Melhor sobrar do que faltar!</span>
                                    </li>
                                </ul>
                                </div>
                            </GlassCard>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <GlassCard variant="amber" className="p-6">
                                <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                                    <ClipboardList className="w-6 h-6 text-amber-400" />
                                    Exemplos Práticos
                                </h3>
                                <p className="text-sm text-stone-500 mb-4">(Para 4-5 horas de festa)</p>
                                <ul className="space-y-2">
                                    {[
                                        { people: '10', liters: '15-20L' },
                                        { people: '20', liters: '30-40L' },
                                        { people: '30', liters: '45-60L' },
                                        { people: '50', liters: '75-100L' },
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                            <span className="text-white font-medium">{item.people} Pessoas</span>
                                            <span className="text-amber-400 font-bold">{item.liters}</span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
