'use client';

import { useState } from 'react';

export default function CompatibilityForm() {
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hola, me gustaría comprobar la compatibilidad de mi cama para una base articulada. Mi teléfono es: ${phone}`;
        window.open(`https://wa.me/34677481926?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="compatibilidad" className="py-20 bg-[var(--color-primary)] text-white">
            <div className="container">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                    <div className="p-10 md:p-16 flex-1 text-[var(--color-text)]">
                        <h2 className="text-3xl font-bold mb-4">¿Dudas con las medidas o el colchón?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Te asesoramos gratis sobre la compatibilidad con tu cama actual y te enviamos un presupuesto sin compromiso.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="tel"
                                placeholder="Tu Teléfono"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-lg"
                            />
                            <button
                                type="submit"
                                className="btn btn-cta text-lg px-8 py-4 whitespace-nowrap"
                            >
                                COMPROBAR COMPATIBILIDAD GRATIS
                            </button>
                        </form>
                    </div>

                    <div className="bg-gray-50 p-10 flex flex-col justify-center items-center md:w-1/3 text-center">
                        <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <p className="font-bold text-[var(--color-text)] mb-1">961 44 36 81</p>
                        <p className="text-sm text-gray-500">Atención Directa</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
