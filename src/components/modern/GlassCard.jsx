import React from 'react';

const GlassCard = ({ 
    children, 
    className = '', 
    variant = 'default',
    hoverEffect = true,
    glowOnHover = false 
}) => {
    const baseStyles = `
        relative overflow-hidden rounded-2xl border border-white/10
        backdrop-blur-xl transition-all duration-500 ease-out
    `;

    const variants = {
        default: 'bg-white/5',
        dark: 'bg-black/20',
        primary: 'bg-emerald-900/20 border-emerald-500/20',
        amber: 'bg-amber-900/20 border-amber-500/20',
    };

    const hoverStyles = hoverEffect ? `
        hover:-translate-y-2 hover:border-white/20 hover:bg-white/10
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
    ` : '';

    const glowStyles = glowOnHover ? `
        hover:shadow-[0_0_30px_rgba(34,197,94,0.3),0_0_60px_rgba(34,197,94,0.1)]
    ` : '';

    return (
        <div className={`
            ${baseStyles}
            ${variants[variant]}
            ${hoverStyles}
            ${glowStyles}
            ${className}
        `}>
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            
            {children}
        </div>
    );
};

export default GlassCard;