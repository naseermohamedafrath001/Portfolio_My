import { motion } from 'framer-motion';

const BlastingText = ({ text }) => {
    // Split text into individual characters, including spaces
    const characters = text.split("");

    return (
        <div style={{ display: 'inline-block' }}>
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    style={{
                        display: 'inline-block',
                        whiteSpace: char === " " ? "pre" : "normal",
                        cursor: 'default'
                    }}
                    whileHover={{
                        // The "Blast" effect: random movement and rotation
                        x: (Math.random() - 0.5) * 80,
                        y: (Math.random() - 0.5) * 80,
                        rotate: (Math.random() - 0.5) * 90,
                        scale: 1.4,
                        filter: 'blur(2px)',
                        opacity: 0.6,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
};

export default BlastingText;
