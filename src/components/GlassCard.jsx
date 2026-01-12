import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{
                y: -10,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
            }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={`glass-card ${className || ''}`}
            style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'border-color 0.3s ease, background 0.3s ease'
            }}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
