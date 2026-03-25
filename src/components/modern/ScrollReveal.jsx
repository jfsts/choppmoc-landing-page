import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
    children, 
    className = '',
    direction = 'up',
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    once = true
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, once]);

    const directions = {
        up: 'translate-y-10',
        down: '-translate-y-10',
        left: 'translate-x-10',
        right: '-translate-x-10',
        'scale-up': 'scale-95',
        'scale-down': 'scale-105',
        'rotate-left': 'rotate-3',
        'rotate-right': '-rotate-3',
    };

    const baseStyles = `
        transition-all ease-out
        ${isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0' : `opacity-0 ${directions[direction]}`}
    `;

    return (
        <div
            ref={ref}
            className={`${baseStyles} ${className}`}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;