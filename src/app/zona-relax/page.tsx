import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
    title: 'Sillón Relax Elevador | Bel Colchón',
    description: 'Sillón relax con motor elevador Power-Lift. Ideal para personas mayores. Envío y montaje gratis en Valencia.',
};

export default function ZonaRelaxPage() {
    return (
        <>
            {/* Hero Product */}
            <section className="bg-gradient-to-br from-[var(--color-surface)] to-[#E8F4FC] py-12">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="lg:text-left text-center">
                            <span className="inline-block bg-[var(--color-cta)] text-[#1a1a1a] px-4 py-1 rounded-full font-bold text-sm mb-4">
                                ⭐ Más vendido 2024
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4 leading-tight">
                                Vuelve a levantarte sin ayuda...
                            </h1>
                            <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                                El sillón con <strong>motor elevador Power-Lift</strong> que te ayuda a sentarte y levantarte de forma segura. Recupérate de operaciones, alivia el dolor lumbar y mantén tu autonomía.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8 lg:justify-start justify-center">
                                <span className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-semibold flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">⬆️</span> Power-Lift
                                </span>
                                <span className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-semibold flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">💆</span> Masaje
                                </span>
                                <span className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-semibold flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">🔥</span> Calor Lumbar
                                </span>
                            </div>
                            <Link href="#configurador" className="btn btn-cta text-lg px-8">
                                Configura el Tuyo
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/sillon-relax-preview.jpg"
                                    alt="Sillón Relax Elevador"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center cursor-pointer group">
                                    <div className="w-20 h-20 bg-[var(--color-cta)] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a1a1a">
                                            <polygon points="5,3 19,12 5,21" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-semibold">Ver en acción</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBar />

            {/* Anatomía del Confort */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="section-header">
                        <h2>Anatomía del Confort</h2>
                        <p>Cada detalle pensado para tu bienestar</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Image */}
                        <div className="relative">
                            <Image
                                src="/images/sillon-relax-preview.jpg"
                                alt="Sillón Relax con características"
                                width={500}
                                height={600}
                                className="w-full rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: '⬆️',
                                    title: 'Motor Elevador Power-Lift',
                                    description: 'Te ayuda a levantarte de forma suave y segura. Ideal para personas mayores o con movilidad reducida.',
                                },
                                {
                                    icon: '📱',
                                    title: 'Mando a Distancia',
                                    description: 'Controla todas las posiciones cómodamente. Botones grandes y fáciles de usar.',
                                },
                                {
                                    icon: '🔥',
                                    title: 'Calor Lumbar Integrado',
                                    description: 'Alivia tensiones musculares y mejora la circulación en la zona lumbar.',
                                },
                                {
                                    icon: '👜',
                                    title: 'Bolsillo Lateral',
                                    description: 'Guarda el mando, móvil o gafas siempre a mano.',
                                },
                            ].map((feature, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[var(--color-text)] mb-1">{feature.title}</h3>
                                        <p className="text-[var(--color-text-secondary)] text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Configurador */}
            <section id="configurador" className="py-16 bg-[var(--color-surface)]">
                <div className="container">
                    <div className="section-header">
                        <h2>Personaliza tu Sillón Relax</h2>
                        <p>Elige mecanismo y acabado según tus necesidades</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Preview */}
                        <div className="lg:sticky lg:top-24">
                            <div className="relative">
                                <Image
                                    src="/images/sillon-relax-preview.jpg"
                                    alt="Tu configuración"
                                    width={500}
                                    height={500}
                                    className="w-full rounded-2xl shadow-xl"
                                />
                                <span className="absolute top-4 left-4 bg-[var(--color-cta)] text-[#1a1a1a] px-3 py-1 rounded-full text-sm font-bold">
                                    Tu selección
                                </span>
                            </div>
                        </div>

                        {/* Options */}
                        <div className="space-y-6">
                            {/* Step 1: Mechanism */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="flex items-center gap-3 font-bold text-lg mb-4">
                                    <span className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-sm">1</span>
                                    Elige el Mecanismo
                                </h3>
                                <div className="space-y-3">
                                    <label className="block p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[var(--color-primary)] transition-colors">
                                        <input type="radio" name="mechanism" className="hidden" />
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="font-bold">Opción Confort</span>
                                                <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded">Económico</span>
                                            </div>
                                            <span className="font-bold text-[var(--color-primary)]">Desde 599€</span>
                                        </div>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">Reclinación manual por palanca</p>
                                    </label>
                                    <label className="block p-4 border-3 border-[#FFC107] rounded-lg cursor-pointer bg-[rgba(255,193,7,0.08)] shadow-[0_0_0_3px_rgba(255,193,7,0.3)]">
                                        <input type="radio" name="mechanism" className="hidden" defaultChecked />
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="font-bold">Opción Premium</span>
                                                <span className="ml-2 text-xs bg-[var(--color-cta)] text-[#1a1a1a] px-2 py-1 rounded font-bold">⭐ Recomendado</span>
                                            </div>
                                            <span className="font-bold text-[var(--color-primary)]">Desde 899€</span>
                                        </div>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">2 Motores + Elevador Power-Lift</p>
                                    </label>
                                </div>
                            </div>

                            {/* Step 2: Finish */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="flex items-center gap-3 font-bold text-lg mb-4">
                                    <span className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-sm">2</span>
                                    Elige tu Acabado
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {[
                                        { color: '#3E2723', name: 'Piel Genuina', sub: 'Chocolate' },
                                        { color: '#D4C4A8', name: 'Tejido', sub: 'Beige' },
                                        { color: '#37474F', name: 'Tejido', sub: 'Gris Marengo' },
                                        { color: '#5D4037', name: 'Tejido', sub: 'Marrón' },
                                    ].map((finish, index) => (
                                        <label key={index} className="flex flex-col items-center gap-2 p-2 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[var(--color-primary)] transition-colors">
                                            <input type="radio" name="finish" className="hidden" />
                                            <span className="w-12 h-12 rounded-full shadow-sm border-2 border-white" style={{ backgroundColor: finish.color }} />
                                            <span className="text-center text-xs">
                                                <strong>{finish.name}</strong><br />
                                                <span className="text-[var(--color-text-secondary)]">{finish.sub}</span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-[var(--color-primary)]">
                                <div className="flex justify-between pb-3 border-b mb-4 text-sm">
                                    <span>Tu configuración:</span>
                                    <span className="font-semibold">Premium + Beige</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span>Precio total:</span>
                                    <span className="text-3xl font-bold text-[var(--color-primary)]">899€</span>
                                </div>
                                <div className="text-right text-sm text-[var(--color-text-secondary)] mb-4">
                                    o desde <strong className="text-[var(--color-text)]">20€/mes</strong> sin intereses
                                </div>

                                {/* Daily Offer */}
                                <div className="bg-gradient-to-r from-[#1A2B49] to-[#0D1B2A] p-4 rounded-lg text-center mb-4">
                                    <span className="block text-white text-sm">O llévatelo por solo</span>
                                    <span className="block text-[#FFC107] text-3xl font-bold">1€ <small className="text-base font-semibold">/ DÍA</small></span>
                                    <span className="block text-white/80 text-sm">sin intereses</span>
                                </div>

                                <div className="bg-[rgba(255,215,0,0.1)] p-3 rounded-lg flex items-center gap-2 text-sm mb-4">
                                    <span className="text-2xl">🎁</span>
                                    <span><strong>Regalo:</strong> Funda protectora lavable incluida</span>
                                </div>

                                <Link href="https://wa.me/34677481926?text=Hola,%20me%20interesa%20el%20Sillón%20Relax%20Elevador" className="btn btn-cta w-full justify-center text-lg" target="_blank">
                                    Lo Quiero · WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Health Guarantee */}
            <section className="py-12 bg-white">
                <div className="container">
                    <div className="bg-gradient-to-br from-[#E8F4FC] to-white p-8 rounded-2xl border-2 border-[var(--color-primary-light)] flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-24 h-24 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <div className="lg:text-left text-center">
                            <h3 className="text-2xl font-bold mb-2">Garantía de Salud</h3>
                            <p className="text-[var(--color-text-secondary)] mb-4">
                                Recomendado por especialistas en traumatología, fisioterapia y geriatría para mejorar la movilidad y aliviar dolencias crónicas.
                            </p>
                            <div className="flex flex-wrap gap-2 lg:justify-start justify-center">
                                {['Fisioterapeutas', 'Geriatras', 'Traumatólogos'].map((badge) => (
                                    <span key={badge} className="bg-white px-4 py-2 rounded-full text-sm font-semibold border border-[var(--color-primary-light)]">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        ¿Listo para descansar mejor?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Contacta ahora y te asesoramos sin compromiso
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/34677481926?text=Hola,%20me%20interesa%20el%20Sillón%20Relax" className="btn btn-cta text-lg px-8" target="_blank">
                            📱 WhatsApp
                        </Link>
                        <Link href="tel:961443681" className="btn bg-white text-[var(--color-primary)] hover:bg-gray-100 text-lg px-8">
                            📞 Llamar Ahora
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
