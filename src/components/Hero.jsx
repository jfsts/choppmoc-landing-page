import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="relative flex min-h-screen items-start lg:items-center justify-center pt-30 overflow-x-clip bg-[#141e19]">
            {/* Full bleed background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/a54c90efe_Ecobier-Chopp-Caneca.mp4" type="video/mp4" />
                </video>
                {/* Dark gradient overlay to match modern design */}
                <div className="absolute inset-0 bg-linear-to-br from-[#141e19]/90 via-[#1a241e]/80 to-[#141e19]/90 z-10"></div>
            </div>

            <div className="relative z-20 flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
                {/* Left Content */}
                <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left gap-6 pt-8 lg:pt-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
                        <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                        O Verdadeiro Sabor Ecobier
                    </span>
                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-white lg:text-7xl">
                        Sua festa merece o <br />
                        <span className="bg-size-[200%_auto] animate-[gradient_3s_linear_infinite] bg-clip-text text-transparent bg-linear-to-r from-yellow-500 via-yellow-200 to-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">Melhor Chopp</span>
                    </h1>
                    <p className="max-w-xl text-lg font-light leading-relaxed text-slate-300 sm:text-xl">
                        Descubra a Experiência ChoppMoc com o autêntico Chopp Ecobier na sua casa ou evento.
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4">
                        <a
                            href="https://wa.me/5538998606066"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-base font-bold text-[#141e19] shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-1 uppercase tracking-wider"
                        >
                            Solicite um Orçamento
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1"></span>
                        </a>
                    </div>
                </div>

                {/* Right Image Container (Floating Barrel) */}
                <div className="hidden md:block absolute right-[-5%] bottom-[-40%] lg:bottom-[-55%] lg:right-[5%] w-48 lg:w-72 drop-shadow-[0_20px_50px_rgba(234,179,8,0.2)] z-30">
                    <img
                        src="/assets/barril 1.png"
                        alt="Barril de Chopp Ecobier"
                        className="animate-[float-slow_8s_ease-in-out_infinite] w-full h-auto object-contain"
                        style={{ animation: 'float-slow 8s ease-in-out infinite' }}
                    />
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float-slow {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(3deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
            `}} />
        </section>
    );
};

export default Hero;
