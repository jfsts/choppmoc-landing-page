import React, { useEffect, useRef } from 'react';

const BubbleParticles = ({ count = 40, color = 'rgba(245, 158, 11, 0.6)' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let bubbles = [];

        const resizeCanvas = () => {
            // Always use window dimensions for full coverage
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initBubbles();
        };

        const initBubbles = () => {
            bubbles = [];
            for (let i = 0; i < count; i++) {
                bubbles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 8 + 4,
                    speedY: Math.random() * 1.2 + 0.3,
                    speedX: (Math.random() - 0.5) * 0.6,
                    opacity: Math.random() * 0.5 + 0.15,
                    wobble: Math.random() * Math.PI * 2,
                    wobbleSpeed: Math.random() * 0.02 + 0.005,
                });
            }
        };

        const drawBubble = (bubble) => {
            // Outer glow
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.radius * 1.5, 0, Math.PI * 2);
            const glowGradient = ctx.createRadialGradient(
                bubble.x, bubble.y, 0,
                bubble.x, bubble.y, bubble.radius * 1.5
            );
            glowGradient.addColorStop(0, `rgba(16, 185, 129, ${bubble.opacity * 0.3})`);
            glowGradient.addColorStop(1, 'transparent');
            ctx.fillStyle = glowGradient;
            ctx.fill();

            // Main bubble
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
            
            const gradient = ctx.createRadialGradient(
                bubble.x - bubble.radius * 0.3,
                bubble.y - bubble.radius * 0.3,
                0,
                bubble.x,
                bubble.y,
                bubble.radius
            );
            
            gradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 0.9})`);
            gradient.addColorStop(0.2, `rgba(255, 255, 255, ${bubble.opacity * 0.6})`);
            gradient.addColorStop(0.5, color);
            gradient.addColorStop(1, `rgba(16, 185, 129, ${bubble.opacity * 0.2})`);
            
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Highlight
            ctx.beginPath();
            ctx.arc(
                bubble.x - bubble.radius * 0.35,
                bubble.y - bubble.radius * 0.35,
                bubble.radius * 0.3,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.8})`;
            ctx.fill();

            // Small secondary highlight
            ctx.beginPath();
            ctx.arc(
                bubble.x + bubble.radius * 0.2,
                bubble.y + bubble.radius * 0.25,
                bubble.radius * 0.15,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.4})`;
            ctx.fill();
        };

        const updateBubbles = () => {
            bubbles.forEach(bubble => {
                bubble.y -= bubble.speedY;
                bubble.wobble += bubble.wobbleSpeed;
                bubble.x += Math.sin(bubble.wobble) * 0.6;
                
                // Reset bubble when it goes off top
                if (bubble.y < -bubble.radius * 2) {
                    bubble.y = canvas.height + bubble.radius;
                    bubble.x = Math.random() * canvas.width;
                }
                
                // Wrap horizontally
                if (bubble.x < -bubble.radius * 2) {
                    bubble.x = canvas.width + bubble.radius;
                }
                if (bubble.x > canvas.width + bubble.radius * 2) {
                    bubble.x = -bubble.radius;
                }
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            bubbles.forEach(bubble => {
                drawBubble(bubble);
            });
            
            updateBubbles();
            animationFrameId = requestAnimationFrame(animate);
        };

        // Initial setup with delay to ensure DOM is ready
        setTimeout(() => {
            resizeCanvas();
            animate();
        }, 100);

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [count, color]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-10"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default BubbleParticles;