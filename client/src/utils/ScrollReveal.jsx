import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, delay = 0, staggerChildren = 0.1, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }} // More dramatic reveal distance
            whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                    duration: 1.0, // Slightly slower for elegance
                    delay: delay,
                    ease: [0.21, 0.47, 0.32, 0.98],
                    staggerChildren: staggerChildren
                }
            }}
            viewport={{ once: true, margin: "-50px" }} // Trigger sooner for better visibility
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, delay = 0, staggerDelay = 0.1, className = "" }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98]
            }
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {React.Children.map(children, child => (
                <motion.div variants={item}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};
