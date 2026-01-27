'use client';

import { motion } from 'framer-motion';

export default function HeroTous() {
    return (
        <section className="relative bg-white pt-10 md:pt-20 pb-16 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Lado Izquierdo: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="absolute top-4 left-4 z-10">
                            <div className="bg-[#E53935] text-white w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold shadow-xl animate-pulse">
                                <span className="text-2xl">-40%</span>
                                <span className="text-sm uppercase text-white">DTO</span>
                            </div>
                        </div>
                        <div className="bg-[var(--color-surface)] rounded-3xl p-4 md:p-8">
                            <img
                                src="/images/tous/01_sillon-relax-levantapersonas-barato.webp"
                                alt="Sillón Relax Tous"
                                className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Lado Derecho: Acción */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fae8e8] text-[#E53935] text-sm font-bold mb-6 border border-[#E53935]/20">
                            <span className="flex h-2 w-2 rounded-full bg-[#E53935]"></span>
                            OFERTA LANZAMIENTO LIMITADA
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-6 leading-tight">
                            Sillón Elevador Eléctrico, <br />
                            <span className="text-[var(--color-primary)]">al precio más bajo</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-gray-500 mb-8 font-medium">
                            Motor Power-Lift, diseño compacto y tejido antimanchas. Tu salud no puede esperar.
                        </h2>

                        {/* Precio */}
                        <div className="flex items-center gap-6 mb-10">
                            <div className="flex flex-col">
                                <span className="text-xl text-gray-400 line-through font-medium">799€</span>
                                <span className="text-6xl md:text-7xl font-black text-[#E53935] tracking-tight">
                                    499€
                                </span>
                            </div>
                            <div className="bg-[#fae8e8] p-3 rounded-xl border border-dashed border-[#E53935]">
                                <p className="text-[#E53935] font-bold text-lg leading-tight">
                                    AHORRAS <br /> 300€ 🔥
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href="#formulario"
                                className="btn bg-[#E53935] hover:bg-[#c62828] text-white text-center text-xl py-5 px-10 rounded-2xl shadow-xl shadow-red-500/20 font-bold"
                            >
                                RESERVAR ESTE PRECIO
                            </a>
                            <div className="flex items-center justify-center gap-4 text-sm text-[var(--color-text-light)]">
                                <span className="flex items-center gap-1">💳 Financiación desde 20€/mes</span>
                                <span className="text-gray-300">|</span>
                                <span className="flex items-center gap-1">🚚 Envío Gratis</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
