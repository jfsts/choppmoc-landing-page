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

        // Prioritize 50L barrels as much as possible
        let kegs50 = Math.floor(targetLiters / 50);
        let remainder = targetLiters - (kegs50 * 50);

        let kegs30 = 0;

        if (remainder > 0) {
            if (remainder <= 30) {
                // If remainder fits in one 30L barrel, use it.
                kegs30 = 1;
            } else {
                // If remainder is between 31 and 49 liters, 
                // it's better to just get another 50L barrel to ensure margin.
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
        <section id="calculator" className="calculator-section">
            <div className="calculator-header">
                <h2 className="section-title center flex-center-title">
                    <span>Calculadora de <span className="highlight-dark">Chopp</span></span>
                    <CalcIcon size={40} className="brand-icon" />
                </h2>
                <div className="title-underline center"></div>
                <p className="gallery-subtitle">
                    Descubra a quantidade ideal de Chopp Ecobier para garantir a alegria da sua festa, sem faltar e sem sobrar!
                </p>
            </div>

            <div className="calculator-container">
                <div className="calc-interactive-panel">
                    <div className="calc-input-group">
                        <label className="calc-label">Quantos adultos bebem chopp?</label>
                        <div className="calc-slider-wrapper">
                            <input
                                type="range"
                                min="5"
                                max="200"
                                step="5"
                                value={adults}
                                onChange={(e) => setAdults(Number(e.target.value))}
                                className="calc-slider"
                            />
                            <span className="calc-value-display">{adults} pessoas</span>
                        </div>
                    </div>

                    <div className="calc-input-group">
                        <label className="calc-label">Qual o tipo e duração da festa?</label>
                        <div className="calc-duration-buttons">
                            {Object.entries(durationRates).map(([key, { label }]) => (
                                <button
                                    key={key}
                                    className={`calc-btn ${duration === key ? 'active' : ''}`}
                                    onClick={() => setDuration(key)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="calc-input-group toggle-group">
                        <label className="toggle-label">
                            <input
                                type="checkbox"
                                checked={useMargin}
                                onChange={() => setUseMargin(!useMargin)}
                                className="toggle-checkbox"
                            />
                            <span className="toggle-switch"></span>
                            Adicionar margem de segurança (Recomendado +15%)
                        </label>
                    </div>

                    <div className="calc-result-panel">
                        <div className="calc-total-need">
                            <h4>Quantidade Ideal:</h4>
                            <span className="big-liters">{calculation.targetLiters} <small>Litros</small></span>
                            {useMargin && <span className="margin-note">Incluindo ~{calculation.marginLiters}L de segurança</span>}
                        </div>

                        <div className="calc-barrels">
                            <h4>Recomendação de Barris:</h4>
                            <div className="barrels-display">
                                {calculation.kegs50 > 0 && (
                                    <div className="barrel-item">
                                        <div className="barrel-icon"><Database size={24} /></div>
                                        <div className="barrel-text">
                                            <strong>{calculation.kegs50}x</strong> {calculation.kegs50 === 1 ? 'Barril' : 'Barris'} de 50L
                                        </div>
                                    </div>
                                )}
                                {calculation.kegs50 > 0 && calculation.kegs30 > 0 && (
                                    <div className="barrel-plus">+</div>
                                )}
                                {calculation.kegs30 > 0 && (
                                    <div className="barrel-item">
                                        <div className="barrel-icon small"><Database size={20} /></div>
                                        <div className="barrel-text">
                                            <strong>{calculation.kegs30}x</strong> {calculation.kegs30 === 1 ? 'Barril' : 'Barris'} de 30L
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="barrel-total-yield">
                                Rende aproximadamente <strong>{Math.floor((calculation.total * 1000) / 400)} copos</strong> de 400ml.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="calc-info-panel">
                    <div className="chopeira-illustration">
                        <img
                            src="/assets/256700-1.png"
                            alt="Máquina de Chopp Ecobier"
                            className="chopeira-img"
                            loading="lazy"
                        />
                    </div>
                    <div className="info-card tips-card">
                        <h3><Lightbulb size={24} className="icon-mr" /> Dicas Importantes</h3>
                        <ul>
                            <li><strong>Quem bebe:</strong> Conte apenas os adultos que bebem chopp.</li>
                            <li><strong>Outras bebidas:</strong> Se houver vodka, whisky ou vinho, a quantidade de chopp pode ser reduzida.</li>
                            <li><strong>Barril:</strong> Barris comuns são de 30L ou 50L.</li>
                            <li><strong>Margem de Segurança:</strong> Sempre é melhor sobrar do que faltar. Usamos 15% como padrão de margem.</li>
                            <li><strong>Serviço:</strong> O chopp deve ser servido entre 0 e -2º.</li>
                        </ul>
                    </div>

                    <div className="info-card examples-card">
                        <h3><ClipboardList size={24} className="icon-mr" /> Exemplos Práticos <br /><small>(Para 4-5 horas de festa)</small></h3>
                        <ul className="examples-list">
                            <li><strong>10 Pessoas:</strong> 15 a 20 Litros</li>
                            <li><strong>20 Pessoas:</strong> 30 a 40 Litros</li>
                            <li><strong>30 Pessoas:</strong> 45 a 60 Litros</li>
                            <li><strong>50 Pessoas:</strong> 75 a 100 Litros</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
