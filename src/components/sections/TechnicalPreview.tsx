'use client';

import { motion } from 'framer-motion';

export default function TechnicalPreview() {
    const specs = [
        { title: 'Motor Alemán OKIN', desc: 'Doble motor de bajo consumo y silencio total.' },
        { title: 'Láminas de Titanio', desc: 'Indestructibles y con regulación lumbar milimétrica.' },
        { title: 'Batería de Emergencia', desc: 'Para volver a posición plana ante un corte de luz.' },
        { title: 'Bastidor de Acero', desc: 'Refuerzo perimetral con pintura anti-corrosión.' }
    ];

    return (
        <section className="py-20 bg-[var(--color-surface)]">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative p-4 bg-white rounded-3xl shadow-xl overflow-hidden"
                        >
                            <img
                                src="/images/cama-laminas.jpg"
                                alt="Radiografía técnica somier"
                                className="w-full rounded-2xl"
                            />
                            {/* Hotspots - Decorative Technical Elements */}
                            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[var(--color-primary)] rounded-full animate-ping" />
                            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[var(--color-primary)] rounded-full animate-ping" />
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ingeniería que se siente</h2>
                        <div className="space-y-8">
                            {specs.map((spec, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[var(--color-primary)] font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">{spec.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{spec.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
