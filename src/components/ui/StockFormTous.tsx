'use client';

import { useState } from 'react';

export default function StockFormTous() {
    const [formData, setFormData] = useState({ name: '', phone: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hola, quiero consultar stock del SILLÓN TOUS DE 499€. Mi nombre es ${formData.name} y mi teléfono es ${formData.phone}.`;
        window.open(`https://wa.me/34677481926?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="formulario" className="py-20 bg-white">
            <div className="container">
                <div className="max-w-5xl mx-auto bg-[#1a1a1a] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:row">
                    <div className="grid lg:grid-cols-2">
                        {/* Imagen del color/stock */}
                        <div className="relative h-64 lg:h-auto">
                            <img
                                src="/images/tous/04_oferta-sillon-relax-para-personas-mayores.webp"
                                alt="Stock colores Tous"
                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent lg:bg-gradient-to-r" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-[#E53935] text-white px-4 py-2 rounded-lg inline-block font-bold text-sm mb-4">
                                    STOCK LIMITADO: 12 UNIDADES
                                </div>
                                <h3 className="text-white text-2xl font-bold">Reserva el tuyo antes de que se agoten</h3>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className="p-10 lg:p-16 text-white">
                            <h2 className="text-3xl font-bold mb-4">Comprobar Disponibilidad de Colores</h2>
                            <p className="text-gray-400 mb-8">
                                Debido a la oferta de 499€, el stock vuela. Déjanos tu teléfono para confirmarte si queda el color que quieres (Gris, Tierra o Chocolate).
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#E53935] transition-all"
                                        placeholder="Ej. Juan Pérez"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono Móvil</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#E53935] transition-all"
                                        placeholder="600 000 000"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full btn bg-[#E53935] hover:bg-[#c62828] text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-red-500/10"
                                >
                                    CONSULTAR STOCK Y COLORES
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    🔒 Tus datos están seguros. Te contactaremos solo para esta consulta.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
