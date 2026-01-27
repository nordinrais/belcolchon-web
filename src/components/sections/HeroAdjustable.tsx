'use client';

import { motion } from 'framer-motion';

export default function HeroAdjustable() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Video/GIF Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
                <img
                    src="/images/cama-articulada-elevada.jpg"
                    alt="Tecnología Titanium"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="container relative z-20">
                <div className="max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold mb-6"
                    >
                        TECNOLOGÍA TITANIUM
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        El soporte definitivo: <br />
                        <span className="text-[var(--color-primary)]">Tecnología Titanium</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 mb-8 max-w-lg"
                    >
                        Descubre la cama que se adapta a tu cuerpo, no al revés. Ingeniería aeroespacial para tu descanso diario.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#soluciones" className="btn btn-cta text-lg px-8 py-4">
                            Descubrir Salud
                        </a>
                        <a href="#compatibilidad" className="btn bg-white/10 hover:bg-white/20 text-white border border-white/30 text-lg px-8 py-4">
                            Consultar Compatibilidad
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
