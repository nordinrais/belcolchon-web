import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
    title: 'Colchones Premium | Belcolchon - La Ciencia del Descanso',
    description: 'Descubre nuestra gama de colchones de alta gama: Solid Firm, Látex Natural y Ergo Hibrid. Calidad superior para un descanso reparador.',
};

const products = [
    {
        id: 'solid-firm',
        name: 'Colchón Solid Firm',
        tagline: 'Soporte Ortoperdico de Alta Densidad',
        description: 'Diseñado para quienes buscan una firmeza superior sin renunciar al confort. Su núcleo de alta densidad asegura una alineación perfecta de la columna.',
        image: '/images/colchon-solid-firm.jpg',
        features: ['Firmeza Alta (8/10)', 'Núcleo Reforzado', 'Independencia de lechos'],
        benefits: 'Ideal para personas con dolores de espalda o que prefieren dormir sobre una superficie firme.',
        cta: 'Consultar Precio',
        waMessage: 'Hola, me interesa el Colchón Solid Firm'
    },
    {
        id: 'latex-natural',
        name: 'Colchón Látex Natural',
        tagline: 'Pureza y Ergonomía del Bosque',
        description: 'Descanso 100% orgánico sin sintéticos ni aditivos. Savia natural de Hevea para una elasticidad y transpirabilidad inigualables.',
        image: '/images/colchon-latex-natural/nucleo-latex-natural.jpg',
        features: ['Certificado ECO Institut', 'Hipoalergénico Natural', '9 Zonas de Confort'],
        benefits: 'Santuario de recuperación extraído directamente de la naturaleza para un despertar renovado.',
        cta: 'Ver Ficha Técnica',
        waMessage: 'Hola, me interesa el Colchón Látex Natural'
    },
    {
        id: 'ergo-hibrid',
        name: 'Colchón Ergo Hibrid',
        tagline: 'Lo mejor de dos mundos: Muelles + Visco',
        description: 'Tecnología híbrida que combina la firmeza de los muelles ensacados con la acogida progresiva de la viscoelástica de última generación.',
        image: '/images/colchon-ergo-hibrid.jpg',
        features: ['Muelles Ensacados', 'Visco Carbono', 'Refuerzo Perimetral'],
        benefits: 'Diseñado para parejas que buscan el equilibrio perfecto entre soporte dinámico y adaptabilidad.',
        cta: 'Consultar Precio',
        waMessage: 'Hola, me interesa el Colchón Ergo Hibrid'
    }
];

export default function ColchonesPremiumPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] py-20 text-white relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-[var(--color-cta)] text-[#1a1a1a] px-4 py-1 rounded-full font-bold text-sm mb-6">
                            💎 GAMA PREMIUM BELCOLCHON
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            La Ciencia aplicada a tu <span className="text-[var(--color-cta)]">Descanso Real</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            No es solo un colchón. Es una inversión en tu salud, tu energía y tu calidad de vida. Descubre la ingeniería que hay detrás de cada despertar.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#modelos" className="btn btn-cta text-lg px-8">
                                Ver Modelos Premium
                            </Link>
                            <Link href="tel:961443681" className="btn border-2 border-white/30 hover:bg-white/10 text-white text-lg px-8">
                                Asesoramiento Gratuito
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Abstract tech pattern background could go here */}
            </section>

            <TrustBar />

            {/* Introduction / Comparison */}
            <section id="modelos" className="py-20 bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">¿Cuál es tu descanso ideal?</h2>
                        <p className="text-lg text-[var(--color-text-secondary)]">Cada cuerpo es único. Por eso hemos diseñado tres tecnologías maestras para cubrir cada necesidad específica.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-[var(--color-surface)] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="relative h-64">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">{product.name}</h3>
                                    <p className="text-[var(--color-text-secondary)] font-semibold text-sm mb-4 uppercase tracking-wider">{product.tagline}</p>
                                    <p className="text-[var(--color-text-secondary)] mb-6 text-sm leading-relaxed">
                                        {product.description}
                                    </p>
                                    <ul className="space-y-2 mb-8">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-medium">
                                                <span className="text-[var(--color-primary)]">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={product.id === 'latex-natural' ? '/colchon-latex-natural' : `https://wa.me/34677481926?text=${encodeURIComponent(product.waMessage)}`}
                                        className="btn btn-cta w-full justify-center"
                                        target={product.id === 'latex-natural' ? '_self' : '_blank'}
                                    >
                                        {product.cta}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Info Blocks */}
            <section className="py-20 bg-[var(--color-surface)]">
                <div className="container">
                    <div className="space-y-24">
                        {/* Example of one detailed block */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <span className="text-[var(--color-primary)] font-bold text-sm tracking-[0.2em] mb-4 block">INGENIERÍA SOLID</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">Solid Firm: La firmeza que tu espalda necesita</h2>
                                <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                                    Muchos colchones pierden su forma con el tiempo, provocando dolores de espalda y malas posturas. El Solid Firm está construido con un alma de alta densidad que garantiza estabilidad absoluta durante años.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white p-4 rounded-xl shadow-sm">
                                        <p className="font-bold text-[var(--color-primary)] mb-1">Durabilidad Extrema</p>
                                        <p className="text-sm text-[var(--color-text-secondary)]">Materiales que no ceden con el peso.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm">
                                        <p className="font-bold text-[var(--color-primary)] mb-1">Cero Movimiento</p>
                                        <p className="text-sm text-[var(--color-text-secondary)]">Si tu pareja se mueve, tú no lo sientes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="rounded-3xl overflow-hidden shadow-2xl skew-y-1">
                                    <Image src="/images/colchon-solid-firm.jpg" alt="Detalle Solid Firm" width={600} height={400} className="w-full" />
                                </div>
                            </div>
                        </div>

                        <div id="latex-natural" className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden shadow-2xl -skew-y-1">
                                    <Image src="/images/colchon-latex-natural/nucleo-latex-natural.jpg" alt="Detalle Látex Natural" width={600} height={400} className="w-full" />
                                </div>
                            </div>
                            <div>
                                <span className="text-[var(--color-primary)] font-bold text-sm tracking-[0.2em] mb-4 block">NATURALEZA & HIGIENE</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">Látex Natural: Pureza y Ergonomía del Bosque</h2>
                                <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                                    Nuestro colchón de látex 100% natural certificado es un santuario de recuperación extraído directamente de la naturaleza. Elaborado exclusivamente con la savia del árbol Hevea brasiliensis, garantiza un entorno de sueño libre de sintéticos y aditivos.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex gap-3">
                                        <span className="w-6 h-6 bg-[var(--color-cta)] rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                                        <p><strong>Salud Natural:</strong> Hipoalergénico por naturaleza y resistente a los ácaros.</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-6 h-6 bg-[var(--color-cta)] rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                                        <p><strong>Ergonomía Pura:</strong> Sistema de descanso que se adapta punto por punto a tu silueta.</p>
                                    </li>
                                </ul>
                                <Link href="/colchon-latex-natural" className="btn btn-primary">
                                    Ver Ficha del Producto
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitments */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-[var(--color-surface)] rounded-full flex items-center justify-center text-4xl mb-6">🚛</div>
                            <h3 className="text-xl font-bold mb-2">Envío y Montaje Gratis</h3>
                            <p className="text-[var(--color-text-secondary)]">Lo llevamos a tu casa, lo montamos y nos llevamos el viejo sin coste adicional.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-[var(--color-surface)] rounded-full flex items-center justify-center text-4xl mb-6">📅</div>
                            <h3 className="text-xl font-bold mb-2">100 Noches de Prueba</h3>
                            <p className="text-[var(--color-text-secondary)]">Pruébalo tranquilamente. Si no te convence, buscamos una solución juntos.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-[var(--color-surface)] rounded-full flex items-center justify-center text-4xl mb-6">🛡️</div>
                            <h3 className="text-xl font-bold mb-2">10 Años de Garantía</h3>
                            <p className="text-[var(--color-text-secondary)]">Confiamos tanto en nuestra calidad que te ofrecemos una cobertura total.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Financing */}
            <section className="py-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
                <div className="container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Dudas sobre cuál elegir?</h2>
                    <p className="text-xl mb-8 opacity-90">Habla con un experto ahora y recibe una oferta personalizada.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/34677481926?text=Hola,%20quiero%20asesoramiento%20sobre%20la%20gama%20Premium" className="btn btn-cta text-lg px-8">
                            Chatear por WhatsApp
                        </Link>
                        <Link href="tel:961443681" className="btn bg-white text-[var(--color-primary)] hover:bg-gray-100 text-lg px-8">
                            Llamar: 961 44 36 81
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
