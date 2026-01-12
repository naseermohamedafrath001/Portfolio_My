import React, { useEffect, useRef, useState } from 'react';

const NeuralCursor = () => {
    const canvasRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const points = useRef([]);
    const [hoveringNode, setHoveringNode] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Check for nodes to connect to
            const elements = document.querySelectorAll('.skill-list span, .card-content h3, .role-tag');
            let found = false;
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dist = Math.hypot(mousePos.current.x - centerX, mousePos.current.y - centerY);

                if (dist < 150) {
                    if (!points.current.find(p => p.id === el.innerText)) {
                        points.current.push({
                            id: el.innerText,
                            x: centerX,
                            y: centerY,
                            opacity: 0,
                            el: el
                        });
                    }
                    found = true;
                }
            });
            setHoveringNode(found);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { x, y } = mousePos.current;

            // Draw connections
            points.current.forEach((point, index) => {
                const dist = Math.hypot(x - point.x, y - point.y);

                if (dist < 200) {
                    point.opacity = Math.min(point.opacity + 0.05, 1);
                } else {
                    point.opacity = Math.max(point.opacity - 0.02, 0);
                }

                if (point.opacity > 0) {
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(point.x, point.y);

                    const gradient = ctx.createLinearGradient(x, y, point.x, point.y);
                    gradient.addColorStop(0, `rgba(17, 17, 17, ${0.4 * point.opacity})`);
                    gradient.addColorStop(1, `rgba(17, 17, 17, 0)`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    // Draw a small node pulse
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, 2 * point.opacity, 0, Math.PI * 2);
                    ctx.fillStyle = '#111';
                    ctx.fill();
                }

                if (point.opacity <= 0 && dist > 300) {
                    // Cleanup points that are far and invisible
                    // points.current.splice(index, 1);
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
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
                zIndex: 997,
            }}
        />
    );
};

export default NeuralCursor;
