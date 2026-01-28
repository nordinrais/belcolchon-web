'use client';

import { useState } from 'react';

export default function PVPSection() {
    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        { size: '80X190', price: '1.580 €' },
        { size: '90X190', price: '1.740 €' },
        { size: '105X190', price: '1.990 €' },
        { size: '135X180', price: '2.500 €' },
        { size: '135X190', price: '2.500 €' },
        { size: '140X190', price: '2.680 €' },
        { size: '150X190', price: '2.780 €' },
        { size: '140X200', price: '2.680 €' },
        { size: '150X200', price: '2.780 €' },
        { size: '160X190', price: '2.900 €' },
        { size: '160X200', price: '2.900 €' },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="border border-[var(--color-primary-light)] rounded-2xl overflow-hidden shadow-sm">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex justify-between items-center p-6 bg-[var(--color-surface)] hover:bg-[#F0F7FF] transition-colors"
                    >
                        <h2 className="text-2xl font-bold text-[var(--color-primary)]">PVP y Cuotas</h2>
                        <span className={`text-3xl font-bold text-[var(--color-primary)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            {isOpen ? '−' : '+'}
                        </span>
                    </button>

                    {isOpen && (
                        <div className="p-8 space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                            {/* Promo Header */}
                            <div className="text-center bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-xl md:text-2xl font-bold text-red-600">
                                    Aprovecha nuestra Oferta Flash: ¡ahora con un 50% de descuento!
                                </h3>
                            </div>

                            {/* Gifts Section */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🎁</span>
                                        <h4 className="font-bold text-lg">REGALO: Almohadas Viscoelásticas</h4>
                                    </div>
                                    <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm ml-8">
                                        <li className="flex gap-2">
                                            <span className="text-[var(--color-cta)] font-bold">•</span>
                                            Funda exterior con tratamiento Aloe Vera: transpirable y agradable.
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-[var(--color-cta)] font-bold">•</span>
                                            Tratamiento higienizante que reduce ácaros y bacterias.
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-[var(--color-cta)] font-bold">•</span>
                                            Desenfundable: con cremallera para fácil lavado.
                                        </li>
                                        <li className="mt-2 italic text-xs font-semibold">
                                            (2 Almohadas para dobles / 1 para individuales)
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">✨</span>
                                        <h4 className="font-bold text-lg">REGALO GRATIS: Pareja de Albornoces</h4>
                                    </div>
                                    <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm ml-8">
                                        <li className="flex gap-2">
                                            <span className="text-[var(--color-cta)] font-bold">•</span>
                                            Suaves como una caricia.
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-[var(--color-cta)] font-bold">•</span>
                                            Para hombre y mujer.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Pricing Table */}
                            <div className="overflow-hidden rounded-xl border border-gray-100">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 font-bold text-[var(--color-primary)]">Dimensión del Colchón</th>
                                            <th className="px-6 py-4 font-bold text-right text-[var(--color-primary)]">PVP</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {prices.map((item, index) => (
                                            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="px-6 py-3 text-[var(--color-text)] font-medium">Colchón {item.size}</td>
                                                <td className="px-6 py-3 text-right font-bold text-[var(--color-text)]">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Validity */}
                            <p className="text-center text-sm font-bold text-[var(--color-text-secondary)]">
                                Promoción válida hasta 31/12/2026
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
