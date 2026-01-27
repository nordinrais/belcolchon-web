import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
    title: 'Cama Articulada Titanium | Bel Colchón',
    description: 'Base articulada eléctrica con láminas de titanio y motor silencioso. Ideal para reflujo, piernas cansadas y ronquidos. Envío y montaje gratis.',
};

export default function BasesTecnologicasPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-50 to-[#E8F4FC] py-12">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="lg:text-left text-center">
                            <span className="inline-block bg-gradient-to-r from-[#2D3436] to-[#1A2B49] text-[#FFC107] px-4 py-1 rounded-full font-bold text-sm mb-4">
                                ⚡ Tecnología Titanium
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4 leading-tight">
                                El soporte definitivo: Tecnología Titanium
                            </h1>
                            <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                                Base articulada eléctrica con <strong>láminas de alta resistencia</strong> y motor ultrasilencioso. Eleva cabeza y pies de forma independiente.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8 lg:justify-start justify-center">
                                <span className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-semibold">
                                    <span className="text-[var(--color-primary)]">✓</span> Motor silencioso
                                </span>
                                <span className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-semibold">
                                    <span className="text-[var(--color-primary)]">✓</span> Mando inalámbrico
                                </span>
                                <span className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-semibold">
                                    <span className="text-[var(--color-primary)]">✓</span> Batería de emergencia
                                </span>
                            </div>
                            <Link href="#consulta" className="btn btn-cta text-lg px-8">
                                Consultar Precio
                            </Link>
                        </div>

                        {/* Gallery */}
                        <div className="space-y-4">
                            <Image
                                src="/images/cama-articulada-elevada.jpg"
                                alt="Cama articulada en posición elevada"
                                width={600}
                                height={400}
                                className="w-full rounded-2xl shadow-xl"
                                priority
                            />
                            <div className="grid grid-cols-3 gap-3">
                                <Image src="/images/cama-articulada-plana.jpg" alt="Cama plana" width={200} height={150} className="w-full rounded-lg cursor-pointer hover:scale-105 transition-transform aspect-[4/3] object-cover" />
                                <Image src="/images/cama-articulada-colchon.jpg" alt="Cama con colchón" width={200} height={150} className="w-full rounded-lg cursor-pointer hover:scale-105 transition-transform aspect-[4/3] object-cover" />
                                <Image src="/images/cama-mando.jpg" alt="Mando inalámbrico" width={200} height={150} className="w-full rounded-lg cursor-pointer hover:scale-105 transition-transform aspect-[4/3] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBar />

            {/* Pain/Solution */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="section-header">
                        <h2>¿Qué problema quieres solucionar?</h2>
                        <p>Cada posición tiene un propósito terapéutico</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: '🔥',
                                problem: '¿Reflujo gástrico?',
                                solution: '→ Elévate 15º',
                                explain: 'La inclinación reduce la acidez al evitar que los ácidos suban por el esófago.',
                            },
                            {
                                icon: '🦵',
                                problem: '¿Piernas cansadas?',
                                solution: '→ Retorno venoso activo',
                                explain: 'Elevar las piernas mejora la circulación y reduce la hinchazón.',
                            },
                            {
                                icon: '😴',
                                problem: '¿Ronquidos?',
                                solution: '→ Vías respiratorias abiertas',
                                explain: 'La posición semi-incorporada mantiene las vías respiratorias despejadas.',
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-[var(--color-surface)] p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all">
                                <div className="flex gap-4 items-start">
                                    <span className="text-4xl">{item.icon}</span>
                                    <div>
                                        <h3 className="font-bold text-[var(--color-text)] mb-1">{item.problem}</h3>
                                        <p className="text-lg font-bold text-[var(--color-primary)] mb-2">{item.solution}</p>
                                        <p className="text-sm text-[var(--color-text-secondary)]">{item.explain}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* X-Ray Section */}
            <section className="py-16 bg-gradient-to-r from-[#1A2B49] to-[#0D1B2A] text-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Anatomía de la Tecnología Titanium</h2>
                        <p className="text-white/80">Cada componente diseñado para durar décadas</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Image */}
                        <div className="relative">
                            <Image
                                src="/images/cama-laminas.jpg"
                                alt="Detalle de láminas Titanium"
                                width={600}
                                height={400}
                                className="w-full rounded-2xl"
                            />
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: '⚡',
                                    title: 'Motor Alemán',
                                    desc: 'Ultrasilencioso, con batería de emergencia incluida. Nunca te quedarás atrapado en posición elevada.',
                                },
                                {
                                    icon: '🔋',
                                    title: 'Batería de Seguridad',
                                    desc: 'Si se va la luz, puedes volver a la posición horizontal sin problemas.',
                                },
                                {
                                    icon: '🎚️',
                                    title: 'Láminas Ajustables',
                                    desc: 'Reguladores rojos para personalizar la firmeza en zona lumbar y hombros.',
                                },
                                {
                                    icon: '📱',
                                    title: 'Mando Inalámbrico',
                                    desc: 'Botones grandes y ergonómicos. Fácil de usar incluso en la oscuridad.',
                                },
                            ].map((feature, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-[rgba(255,193,7,0.2)] rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">{feature.title}</h4>
                                        <p className="text-white/80 text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Capture Form */}
            <section id="consulta" className="py-16 bg-[var(--color-surface)]">
                <div className="container">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Content */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">¿Dudas con las medidas o el colchón?</h2>
                                <p className="text-[var(--color-text-secondary)] mb-6">
                                    Te asesoramos sobre la compatibilidad con tu cama actual. <strong>Sin compromiso.</strong>
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        'Comprobamos si cabe en tu habitación',
                                        'Te recomendamos el colchón ideal',
                                        'Resolvemos dudas técnicas',
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm">
                                            <span className="text-[var(--color-primary)]">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Form */}
                            <div className="bg-[var(--color-surface)] p-6 rounded-xl">
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Tu teléfono</label>
                                        <input
                                            type="tel"
                                            placeholder="Ej: 612 345 678"
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Medida que te interesa</label>
                                        <select className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--color-primary)] focus:outline-none transition-colors bg-white">
                                            <option value="">Selecciona...</option>
                                            <option value="90x190">90 x 190 cm</option>
                                            <option value="105x190">105 x 190 cm</option>
                                            <option value="135x190">135 x 190 cm</option>
                                            <option value="150x190">150 x 190 cm</option>
                                            <option value="180x200">180 x 200 cm</option>
                                            <option value="no-se">No lo sé</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-cta w-full justify-center text-lg">
                                        Comprobar Compatibilidad GRATIS
                                    </button>
                                    <p className="text-center text-sm text-[var(--color-text-secondary)]">
                                        Te llamamos en menos de 24h
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cross-Selling */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="section-header">
                        <h2>Completa tu descanso</h2>
                        <p>Productos que combinan perfectamente</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Link href="#" className="block bg-[var(--color-surface)] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop"
                                    alt="Canapé Abatible"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform"
                                />
                                <span className="absolute top-3 right-3 bg-[var(--color-cta)] text-[#1a1a1a] px-3 py-1 rounded-full text-sm font-bold">
                                    +Almacenaje
                                </span>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg mb-2">¿Buscas también almacenaje?</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                                    Canapé Abatible con gran capacidad de almacenamiento bajo el colchón.
                                </p>
                                <span className="text-[var(--color-primary)] font-semibold text-sm">Ver Canapés →</span>
                            </div>
                        </Link>

                        <Link href="#" className="block bg-[var(--color-surface)] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop"
                                    alt="Pack Base + Colchón"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform"
                                />
                                <span className="absolute top-3 right-3 bg-[var(--color-cta)] text-[#1a1a1a] px-3 py-1 rounded-full text-sm font-bold">
                                    -15% Pack
                                </span>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg mb-2">¿Necesitas el colchón perfecto?</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                                    Pack Ahorro: Base Articulada + Colchón compatible con descuento especial.
                                </p>
                                <span className="text-[var(--color-primary)] font-semibold text-sm">Ver Pack Ahorro →</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
