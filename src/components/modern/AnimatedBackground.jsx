import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ variant = 'default' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let blobs = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initBlobs();
        };

        const initBlobs = () => {
            blobs = [];
            const numBlobs = Math.floor(window.innerWidth / 200);
            
            for (let i = 0; i < numBlobs; i++) {
                blobs.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 300 + 200,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    color: getBlobColor(i),
                    opacity: Math.random() * 0.3 + 0.1,
                });
            }
        };

        const getBlobColor = (index) => {
            const colors = [
                'rgba(34, 197, 94, 0.3)',   // green-500
                'rgba(234, 179, 8, 0.2)',    // yellow-500
                'rgba(20, 184, 166, 0.25)',  // teal-500
                'rgba(16, 185, 129, 0.2)',   // emerald-500
            ];
            return colors[index % colors.length];
        };

        const drawBlob = (blob) => {
            ctx.beginPath();
            const gradient = ctx.createRadialGradient(
                blob.x, blob.y, 0,
                blob.x, blob.y, blob.radius
            );
            gradient.addColorStop(0, blob.color);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
            ctx.fill();
        };

        const updateBlobs = () => {
            blobs.forEach(blob => {
                blob.x += blob.vx;
                blob.y += blob.vy;

                // Bounce off edges
                if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
                if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
                if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
                if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            blobs.forEach(blob => {
                drawBlob(blob);
            });
            
            updateBlobs();
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-0 ${
                variant === 'hero' ? 'opacity-40' : 'opacity-20'
            }`}
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default AnimatedBackground;