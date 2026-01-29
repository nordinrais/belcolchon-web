import { Metadata } from 'next';
import AuraSupremeClient from '@/components/sections/AuraSupremeClient';
import FAQSection from '@/components/sections/FAQSection';
import TrustBar from '@/components/sections/TrustBar';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Colchón Aura Supreme | Firmeza Alta y Muelle Ensacado Premium',
    description: '¿Buscas el soporte perfecto? Colchón Aura Supreme: firmeza 9/10, muelles ensacados y efecto frío Cooler. Ideal para dolor de espalda. ¡Oferta exclusiva en BelColchon!',
    keywords: 'colchón aura supreme, firmeza alta, muelle ensacado premium, colchón cooler, dolor de espalda',
};

export default function AuraSupremePage() {
    const faqItems = [
        {
            question: "¿A quién se recomienda el Aura Supreme?",
            answer: "Ideal para quienes buscan firmeza alta (9/10), personas que pesan más de 90kg o parejas que buscan máxima independencia de lechos gracias a su núcleo Pocket Spring reforzado."
        },
        {
            question: "¿Cómo funciona el tejido Cooler?",
            answer: "Es una fibra técnica de alta conductividad que evacúa el calor del cuerpo al instante, proporcionándote una sensación de frescor inmediato. Es la solución definitiva para calurosos."
        },
        {
            question: "¿Mantenimiento del colchón?",
            answer: "Es un colchón de doble cara; recomendamos usar la cara Cooler en verano y la cara Visco Therm en invierno para un confort térmico ideal todo el año. Rotar cada 3 meses."
        },
        {
            question: "Transparencia de Marca",
            answer: "El Aura Supreme es una denominación exclusiva de BelColchon para la serie técnica Solid Firm Gold. Recibirás el etiquetado original de fábrica que garantiza el uso de componentes de alta densidad (HR 40kg)."
        }
    ];

    return (
        <main className="bg-white">
            <AuraSupremeClient />

            <div className="border-y bg-gray-50">
                <TrustBar />
            </div>

            {/* Ficha Técnica Detallada */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 underline decoration-[var(--color-primary)] decoration-4 underline-offset-8">
                            Especificaciones Técnicas
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[var(--color-primary)] font-bold text-lg mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-white">📏</span>
                                        Dimensiones y Firmeza
                                    </h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex justify-between border-b pb-2">
                                            <span>Altura Total</span>
                                            <span className="font-bold">28,5 cm (+/- 1 cm)</span>
                                        </li>
                                        <li className="flex justify-between border-b pb-2">
                                            <span>Grado de Firmeza</span>
                                            <span className="font-bold text-red-600">9/10 (Alta-Superior)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-[var(--color-primary)] font-bold text-lg mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-white">⚙️</span>
                                        Estructura Interna
                                    </h3>
                                    <ul className="space-y-3 text-gray-600 text-sm">
                                        <li><strong>Núcleo:</strong> Pocket Spring de 15 cm con alambre reforzado de 2.1 mm.</li>
                                        <li><strong>Refuerzo Perimetral:</strong> Box integral en HR 40kg Extra Dura (estabilidad máxima).</li>
                                        <li><strong>Soporte:</strong> Doble capa HR 40kg "Dura" (3 cm por cara) para alineación lumbar.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                                    <h3 className="text-blue-700 font-bold mb-3 flex items-center gap-2">
                                        ❄️ Cara Verano (COOLER)
                                    </h3>
                                    <p className="text-blue-600 text-sm leading-relaxed font-medium">
                                        Tejido técnico COOLER de reducción térmica inmediata + 2cm Super Soft + Fibra Hueca para máxima transpiración.
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
                                    <h3 className="text-orange-700 font-bold mb-3 flex items-center gap-2">
                                        🔥 Cara Invierno (VISCO)
                                    </h3>
                                    <p className="text-orange-600 text-sm leading-relaxed font-medium">
                                        Viscoelástica Visco Therm 50kg (1 cm) + Tejido Strech de alto gramaje + 2cm Super Soft.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection
                title="Dudas Frecuentes"
                subtitle="Todo lo que necesitas saber sobre el Aura Supreme"
                items={faqItems}
            />

            {/* Final Conversion Banner */}
            <section className="py-20 bg-[#1A2B49] text-white overflow-hidden relative">
                <div className="container text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Invierte en tu salud lumbar</h2>
                    <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto">
                        Únete a los miles de durmientes que han dicho adiós al dolor de espalda con la tecnología Titanium.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="tel:961443681" className="bg-white text-[#1A2B49] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-colors">
                            📞 961 44 36 81
                        </Link>
                        <Link href="https://wa.me/34677481926?text=Hola,%20quiero%20reservar%20el%20Aura%20Supreme" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-3">
                            <span>💬 WhatsApp</span>
                        </Link>
                    </div>
                </div>
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
            </section>
        </main>
    );
}
