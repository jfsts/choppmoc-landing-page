import React, { useState, useEffect, useMemo } from 'react';
import { Calculator as CalcIcon, Database, Lightbulb, ClipboardList } from 'lucide-react';

const Calculator = () => {
    const [adults, setAdults] = useState(30);
    const [duration, setDuration] = useState('media'); // curta, media, longa
    const [useMargin, setUseMargin] = useState(true);

    const durationRates = {
        curta: { label: 'Festa Curta (até 4h)', rate: 1 },
        media: { label: 'Média/Longa (4h a 6h)', rate: 1.5 },
        longa: { label: 'Churrasco/Dia Inteiro', rate: 2.5 }
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
        <section id="calculator" className="relative bg-[#0f1613] pt-24 pb-12 lg:py-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h2 className="text-3xl font-bold flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 w-full text-white sm:text-4xl">
                        Calculadora de <span className="text-primary">Chopp</span>
                        <CalcIcon size={40} className="text-primary mt-2 lg:mt-0" />
                    </h2>
                    <div className="mt-4 h-1 w-16 rounded bg-yellow-500 mx-auto lg:mx-0"></div>
                    <p className="mt-6 max-w-2xl text-lg text-slate-400 mx-auto lg:mx-0">
                        Descubra a quantidade ideal de Chopp Ecobier para garantir a alegria da sua festa, sem faltar e sem sobrar!
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Interactive Panel */}
                    <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-[#141e19]/80 backdrop-blur p-8 shadow-2xl flex flex-col justify-between">

                        <div className="mb-8">
                            <label className="block text-lg font-bold text-white mb-4">Quantos adultos bebem chopp?</label>
                            <div className="flex items-center gap-6">
                                <input
                                    type="range"
                                    min="5"
                                    max="200"
                                    step="5"
                                    value={adults}
                                    onChange={(e) => setAdults(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-500 hover:accent-yellow-400"
                                />
                                <span className="text-2xl font-bold text-primary min-w-[140px] text-right">{adults} pessoas</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-lg font-bold text-white mb-4">Qual o tipo e duração da festa?</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {Object.entries(durationRates).map(([key, { label }]) => (
                                    <button
                                        key={key}
                                        className={`rounded-xl border-2 px-4 py-3 text-sm font-bold transition-all ${duration === key ? 'border-primary bg-primary text-white shadow-lg shadow-primary/30' : 'border-slate-700 text-slate-400 hover:border-yellow-500 hover:text-white'}`}
                                        onClick={() => setDuration(key)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-10 pb-8 border-b border-dashed border-white/10">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={useMargin}
                                        onChange={() => setUseMargin(!useMargin)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </div>
                                <span className="text-slate-300 font-medium">Adicionar margem de segurança (Recomendado +15%)</span>
                            </label>
                        </div>

                        {/* Result Panel */}
                        <div className="grid sm:grid-cols-2 gap-8 rounded-2xl bg-gradient-to-br from-primary to-[#1a4a32] p-8 text-white shadow-xl">
                            <div>
                                <h4 className="text-sm uppercase tracking-wide text-white/80 mb-4">Quantidade Ideal:</h4>
                                <div className="text-5xl font-extrabold text-yellow-500 mb-2 leading-none">
                                    {calculation.targetLiters} <small className="text-2xl text-white font-medium">Litros</small>
                                </div>
                                {useMargin && <span className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-slate-200">Incluindo ~{calculation.marginLiters}L de segurança</span>}
                            </div>

                            <div>
                                <h4 className="text-sm uppercase tracking-wide text-white/80 mb-4">Recomendação de Barris:</h4>
                                <div className="flex flex-col gap-3 mb-4">
                                    {calculation.kegs50 > 0 && (
                                        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                                            <Database size={24} className="text-yellow-500" />
                                            <div className="text-lg">
                                                <strong className="text-yellow-500 text-xl">{calculation.kegs50}x</strong> {calculation.kegs50 === 1 ? 'Barril' : 'Barris'} de 50L
                                            </div>
                                        </div>
                                    )}
                                    {calculation.kegs50 > 0 && calculation.kegs30 > 0 && (
                                        <div className="text-center text-3xl font-extrabold text-white/50 leading-none -my-2">+</div>
                                    )}
                                    {calculation.kegs30 > 0 && (
                                        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                                            <Database size={20} className="text-yellow-500" />
                                            <div className="text-lg">
                                                <strong className="text-yellow-500 text-xl">{calculation.kegs30}x</strong> {calculation.kegs30 === 1 ? 'Barril' : 'Barris'} de 30L
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="border-t border-white/20 pt-4 text-sm text-white/80">
                                    Rende aproximadamente <strong className="text-white">{Math.floor((calculation.total * 1000) / 400)} copos</strong> de 400ml.
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Information Side Panel */}
                    <div className="flex flex-col gap-6">
                        <div className="relative flex-1 rounded-3xl border border-white/5 bg-[#1a241e] p-6 shadow-lg">
                            <div className="absolute top-0 right-4 -translate-y-1/2">
                                <img
                                    src="/assets/256700-1.png"
                                    alt="Máquina de Chopp Ecobier"
                                    className="h-32 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] animate-[float-obj_6s_ease-in-out_infinite]"
                                    style={{ animation: 'float 6s ease-in-out infinite' }}
                                />
                            </div>

                            <h3 className="mb-4 mt-6 flex items-center gap-2 text-xl font-bold text-white">
                                <Lightbulb size={24} className="text-yellow-500" /> Dicas Importantes
                            </h3>
                            <ul className="flex flex-col gap-3 text-sm text-slate-400">
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-slate-200">Quem bebe:</strong> Conte apenas os adultos que bebem chopp.</span></li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-slate-200">Outras bebidas:</strong> Se houver vodka, whisky ou vinho, a quantidade de chopp pode ser reduzida.</span></li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-slate-200">Barril:</strong> Barris comuns são de 30L ou 50L.</span></li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-slate-200">Margem:</strong> Sempre é melhor sobrar do que faltar. Usamos 15% como padrão de margem.</span></li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-slate-200">Serviço:</strong> O chopp deve ser servido entre 0 e -2º.</span></li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-white/5 bg-[#1a241e] p-6 shadow-lg">
                            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white leading-tight">
                                <ClipboardList size={24} className="text-yellow-500" />
                                <div>Exemplos Práticos<br /><span className="text-sm font-normal text-slate-400">(Para 4-5 horas de festa)</span></div>
                            </h3>
                            <ul className="flex flex-col gap-2 text-sm">
                                <li className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                                    <strong className="text-slate-200">10 Pessoas:</strong>
                                    <span className="text-slate-400">15 a 20 Litros</span>
                                </li>
                                <li className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                                    <strong className="text-slate-200">20 Pessoas:</strong>
                                    <span className="text-slate-400">30 a 40 Litros</span>
                                </li>
                                <li className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                                    <strong className="text-slate-200">30 Pessoas:</strong>
                                    <span className="text-slate-400">45 a 60 Litros</span>
                                </li>
                                <li className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                                    <strong className="text-slate-200">50 Pessoas:</strong>
                                    <span className="text-slate-400">75 a 100 Litros</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
            `}} />
        </section>
    );
};

export default Calculator;
