'use client';

import { motion } from 'framer-motion';

const solutions = [
    {
        icon: '🤢',
        issue: '¿Reflujo gástrico?',
        solution: 'Elévate 15º',
        description: 'La inclinación perfecta para mantener los ácidos en su lugar y dormir sin ardores.'
    },
    {
        icon: '🦵',
        issue: '¿Piernas cansadas?',
        solution: 'Retorno venoso activo',
        description: 'Eleva las piernas por encima del corazón para una circulación óptima y descanso total.'
    },
    {
        icon: '😤',
        issue: '¿Ronquidos?',
        solution: 'Vías respiratorias abiertas',
        description: 'Abre el ángulo del torso para facilitar la respiración profunda y reducir ronquidos.'
    }
];

export default function SolutionsGrid() {
    return (
        <section id="soluciones" className="py-20 bg-white">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Salud y Descanso Inteligente</h2>
                    <p className="text-lg text-gray-600">
                        Diseñada por expertos en fisioterapia para solucionar problemas reales durante el sueño.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-[var(--color-surface)] border border-gray-100 flex flex-col items-center text-center transition-all shadow-sm hover:shadow-lg"
                        >
                            <div className="text-5xl mb-6 bg-white w-20 h-20 flex items-center justify-center rounded-full shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-400 mb-2">{item.issue}</h3>
                            <p className="text-2xl font-bold text-[var(--color-primary)] mb-4">{item.solution}</p>
                            <p className="text-gray-600">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
