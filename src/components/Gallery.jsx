import React, { useState } from 'react';

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

    return (
        <section id="gallery" className="bg-[#0f1613] pt-12 pb-24 lg:py-24 object-contain">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Conheça a <br className="lg:hidden" /><span className="text-primary">Indústria Ecobier</span>
                    </h2>
                    <div className="mt-4 h-1 w-16 rounded bg-yellow-500 mx-auto lg:mx-0"></div>
                    <p className="mt-6 max-w-3xl text-lg text-slate-400 mx-auto lg:mx-0">
                        Nossa estrutura conta com tecnologia de ponta para garantir que a melhor
                        bebida chegue ao seu copo. Uma estrutura grandiosa que reflete a qualidade do Chopp Ecobier.
                    </p>
                </div>

                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                        <div className="lg:w-1/3">
                            <div className="rounded-3xl bg-white/5 p-8 border border-white/10 shadow-[0_0_30px_rgba(32,90,61,0.2)] backdrop-blur-sm transition-transform hover:-translate-y-1 w-full flex items-center justify-center">
                                <img
                                    src="/assets/Logo_Ecobier_Chopp.png"
                                    alt="Logo Ecobier Chopp"
                                    className="h-28 sm:h-36 md:h-40 lg:h-48 w-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] mx-auto"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3 flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-display font-bold text-white tracking-tight">Tradição InNatura</h3>
                                <p className="text-slate-300 font-sans leading-relaxed text-lg font-light">
                                    A Ecobier é uma marca brasileira, tradicional e familiar, com mais de 20 anos de atuação no mercado de cervejas, com produção baseada no Circuito das Águas Paulista, na cidade de Socorro (SP). Destaca-se por unir a tradição cervejeira à sustentabilidade, produzindo chopps e cervejas com águas nobres, focando em qualidade e no padrão "InNatura".
                                </p>
                            </div>

                            <button
                                className="flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors group"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? 'Ocultar detalhes' : 'Ler mais sobre a origem e localização'}
                                <svg className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-slate-400 pl-4 border-l-2 border-primary/50 text-left">
                                    <strong className="text-slate-200">Origem e Localização:</strong> Produzida pela Socorro Bebidas em Socorro-SP, uma área conhecida por sua água de alta pureza, o que influencia a qualidade da bebida. A marca também é conhecida por sua preocupação com o meio ambiente e por oferecer uma experiência de chopp artesanal de alta qualidade para o consumidor final.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6 mb-16">
                    {droneImages.map((src, index) => (
                        <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-[#141e19]">
                            <img
                                src={src}
                                alt={`Visão aérea Indústria Ecobier ${index + 1}`}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1613]/90 via-[#0f1613]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center pb-6">
                                <span className="text-sm font-medium text-white tracking-wider uppercase transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">Estrutura Ecobier</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* City Context Map */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg bg-[#141e19] max-w-3xl mx-auto mt-16">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10"></div>
                    <iframe
                        title="Localização Indústria Ecobier"
                        src="https://maps.google.com/maps?q=Socorro+Bebidas,+Socorro+-+SP&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="200"
                        className="border-0 w-full opacity-80"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
