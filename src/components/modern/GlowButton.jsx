import React, { useState } from 'react';

const GlowButton = ({ 
    children, 
    onClick, 
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    href,
    ...props 
}) => {
    const [ripples, setRipples] = useState([]);

    const createRipple = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const newRipple = {
            x,
            y,
            id: Date.now()
        };

        setRipples(prev => [...prev, newRipple]);
        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 600);
    };

    const variants = {
        primary: `
            bg-gradient-to-r from-emerald-600 to-emerald-500 
            hover:from-emerald-500 hover:to-emerald-400
            text-white shadow-[0_0_30px_rgba(16,185,129,0.4)]
            hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]
        `,
        amber: `
            bg-gradient-to-r from-amber-500 to-yellow-500 
            hover:from-amber-400 hover:to-yellow-400
            text-stone-900 shadow-[0_0_30px_rgba(245,158,11,0.4)]
            hover:shadow-[0_0_50px_rgba(245,158,11,0.6)]
        `,
        outline: `
            bg-transparent border-2 border-emerald-500/50
            hover:border-emerald-400 hover:bg-emerald-500/10
            text-emerald-400 hover:text-emerald-300
            hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]
        `,
        ghost: `
            bg-white/5 hover:bg-white/10 
            text-white border border-white/10 hover:border-white/20
            hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
        `,
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl',
    };

    const baseStyles = `
        relative overflow-hidden rounded-full font-bold
        transition-all duration-300 ease-out
        transform hover:-translate-y-1 active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-emerald-500/50
        inline-flex items-center justify-center gap-2
        uppercase tracking-wider
    `;

    const Component = href ? 'a' : 'button';

    return (
        <Component
            className={`
                ${baseStyles}
                ${variants[variant]}
                ${sizes[size]}
                ${className}
            `}
            onClick={(e) => {
                createRipple(e);
                onClick && onClick(e);
            }}
            href={href}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            {...props}
        >
            {/* Ripple effects */}
            {ripples.map(ripple => (
                <span
                    key={ripple.id}
                    className="absolute bg-white/30 rounded-full animate-[ripple_0.6s_linear]"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                    }}
                />
            ))}
            
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {Icon && <Icon className="w-5 h-5" />}
            {children}
            
            <style>{`
                @keyframes ripple {
                    from {
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    to {
                        transform: translate(-50%, -50%) scale(4);
                        opacity: 0;
                    }
                }
            `}</style>
        </Component>
    );
};

export default GlowButton;