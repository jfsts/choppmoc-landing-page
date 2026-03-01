import React from 'react';
import { GlassWater, ThumbsUp, Medal, Truck } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" className="bg-[#141e19] pt-8 pb-12 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Text Content */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                O Sabor Autêntico do <br className="lg:hidden" /><span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-200">Chopp Ecobier</span>
                            </h2>
                            <div className="mt-4 h-1 w-16 rounded bg-yellow-500 mx-auto lg:mx-0"></div>
                        </div>

                        <p className="max-w-xl text-lg text-slate-400">
                            O Chopp Ecobier é produzido com os mais rigorosos padrões de qualidade,
                            garantindo um sabor refrescante e inigualável. Uma experiência premium
                            para paladares exigentes.
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2 w-full">
                            <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                    <Medal size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-bold text-white">Puro Malte</h3>
                                    <p className="text-sm text-slate-400">Receita original com ingredientes selecionados</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                    <GlassWater size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-bold text-white">Refrescante</h3>
                                    <p className="text-sm text-slate-400">Temperatura ideal, colarinho perfeito</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                    <ThumbsUp size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-bold text-white">Qualidade Garantida</h3>
                                    <p className="text-sm text-slate-400">Processo produtivo moderno e seguro</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                    <Truck size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-bold text-white">Entrega Rápida</h3>
                                    <p className="text-sm text-slate-400">Receba a máquina pronta para o evento</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative mx-auto w-full max-w-xs sm:max-w-md lg:max-w-none">
                        <div className="relative flex aspect-square sm:aspect-auto items-center justify-center rounded-full bg-linear-to-tr from-primary/10 to-transparent lg:aspect-4/3 lg:rounded-3xl lg:bg-none">
                            <div className="absolute left-1/2 top-1/2 -z-10 h-48 w-48 sm:h-64 sm:w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/20 blur-3xl"></div>
                            <img
                                src="/assets/Copo_Joinvile_EcobierChopp.png"
                                alt="Copo Joinvile Ecobier Chopp"
                                className="relative z-10 w-48 sm:w-full sm:max-w-[320px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
