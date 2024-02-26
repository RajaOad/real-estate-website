"use client"
import React from 'react';
import PropertyCard from '../propertyCard/PropertyCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Featured = ({ title, properties }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const variants = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.5 } }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
    };

    const variants2 = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8
            }
        }),
        hidden: { opacity: 0, y: 80 },
    };

    return (
        <section className="bg-gradient-to-r from-blue-400 to-purple-500 py-24">
            <div className="container mx-auto px-4 md:px-16" ref={ref}>
                <motion.div className="text-center mb-20"
                    variants={titleVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <span className="text-xs md:text-sm font-bold text-white uppercase leading-10">Our Properties</span>
                    <h2 className="text-3xl md:text-5xl text-white font-semibold mb-4">{title}</h2>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={variants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {properties.map((property, index) => (
                        <motion.div key={property.id} variants={variants2} custom={index} className="opacity-0"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <PropertyCard property={property} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Featured;
