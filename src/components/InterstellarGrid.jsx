import React, { useEffect, useRef } from 'react';

const InterstellarGrid = () => {
    const canvasRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const targetMousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const gridSize = 40;
        let points = [];
        let particles = [];

        const initPoints = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            points = [];
            for (let x = 0; x <= canvas.width + gridSize; x += gridSize) {
                for (let y = 0; y <= canvas.height + gridSize; y += gridSize) {
                    points.push({
                        baseX: x,
                        baseY: y,
                        x: x,
                        y: y,
                        vx: 0,
                        vy: 0
                    });
                }
            }

            particles = [];
            for (let i = 0; i < 30; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speed: Math.random() * 0.5 + 0.2,
                    z: Math.random() * 0.5 + 0.5 // Depth factor
                });
            }
        };

        const handleMouseMove = (e) => {
            targetMousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => {
            initPoints();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        initPoints();

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Lerp mouse for smoothness
            mousePos.current.x += (targetMousePos.current.x - mousePos.current.x) * 0.08;
            mousePos.current.y += (targetMousePos.current.y - mousePos.current.y) * 0.08;

            const { x: mx, y: my } = mousePos.current;
            const radius = 250;
            const strength = 100;

            // Draw particles (Parallax Background)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
            particles.forEach(p => {
                const dx = (mx - canvas.width / 2) * 0.02 * p.z;
                const dy = (my - canvas.height / 2) * 0.02 * p.z;

                ctx.beginPath();
                ctx.arc(p.x + dx, p.y + dy, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Update points with distortion
            points.forEach(p => {
                const dx = mx - p.baseX;
                const dy = my - p.baseY;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);

                if (dist < radius) {
                    const force = (radius - dist) / radius;
                    const distortion = force * force * strength;
                    const angle = Math.atan2(dy, dx);

                    p.x = p.baseX - Math.cos(angle) * distortion;
                    p.y = p.baseY - Math.sin(angle) * distortion;
                } else {
                    p.x = p.baseX;
                    p.y = p.baseY;
                }
            });

            // Draw Grid Lines
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.035)';
            ctx.lineWidth = 1;

            const cols = Math.floor((canvas.width + gridSize) / gridSize) + 1;
            const rows = Math.floor((canvas.height + gridSize) / gridSize) + 1;

            for (let i = 0; i < cols; i++) {
                ctx.beginPath();
                for (let j = 0; j < rows; j++) {
                    const idx = i * rows + j;
                    if (j === 0) ctx.moveTo(points[idx].x, points[idx].y);
                    else ctx.lineTo(points[idx].x, points[idx].y);
                }
                ctx.stroke();
            }

            for (let j = 0; j < rows; j++) {
                ctx.beginPath();
                for (let i = 0; i < cols; i++) {
                    const idx = i * rows + j;
                    if (i === 0) ctx.moveTo(points[idx].x, points[idx].y);
                    else ctx.lineTo(points[idx].x, points[idx].y);
                }
                ctx.stroke();
            }

            // Draw Lens Effect Highlight
            const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, radius);
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0.02)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                zIndex: -1,
                background: '#ffffff'
            }}
        />
    );
};

export default InterstellarGrid;

