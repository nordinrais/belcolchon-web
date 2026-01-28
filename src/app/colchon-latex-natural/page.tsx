import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import TrustBar from '@/components/sections/TrustBar';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
    title: 'Colchón Látex 100% Natural | Pack Cama Articulada - Belcolchon',
    description: 'Compra el Colchón de Látex 100% Natural. Descanso ergonómico, sostenible y sin sintéticos. Núcleo de savia de Hevea para una adaptación perfecta y sueño saludable.',
};

export default function LatexNaturalPage() {
    const faqItems = [
        {
            question: "¿Este colchón da calor?",
            answer: "No. A diferencia de los sintéticos, nuestro látex tiene una estructura de célula abierta. Además, incorpora canales de aireación internos y una platabanda de tejido especial que aseguran que el aire circule continuamente. Esto regula la temperatura y evita la sudoración nocturna."
        },
        {
            question: "¿Es adecuado si sufro de dolor de espalda?",
            answer: "Absolutamente. Gracias a sus 9 zonas de descanso diferenciadas y a la función correctora del sueño, el colchón alinea tu columna vertebral en su posición natural. Las ventosas de micro-masaje alivian la presión en hombros y caderas, reduciendo la necesidad de cambiar de postura."
        },
        {
            question: "¿Cómo se lava la funda?",
            answer: "El mantenimiento es muy sencillo. La funda de algodón 100% orgánico es desenfundable gracias a su cremallera perimetral. Puedes lavarla cómodamente en casa a una temperatura máxima de 30°C para mantener la higiene perfecta."
        },
        {
            question: "¿Es realmente 100% natural?",
            answer: "Sí, y está certificado. El núcleo es de látex natural certificado por el ECO Institut (Alemania), lo que garantiza que no contiene cargas sintéticas ni sustancias nocivas. Es un producto ecológico y saludable, fabricado bajo el sello Nature de Craft by Hukla."
        },
        {
            question: "¿Sirve para camas articuladas?",
            answer: "Es la mejor opción para ello. Al ser un núcleo de látex 100% flexible y elástico, se adapta perfectamente a la curvatura de los somieres eléctricos (como nuestro modelo Titanium) sin deformarse ni perder propiedades con el tiempo."
        }
    ];

    return (
        <>
            {/* 1. SECCIÓN HERO (Cabecera) */}
            <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/colchon  latex natural/Cama articulada eléctrica de diseño con colchón de látex 100% natural en dormitorio estilo biofílico de lujo - Belcolchon.png"
                        alt="Colchón de Látex 100% Natural en entorno biofílico"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30 lg:bg-black/20"></div>
                </div>

                <div className="container relative z-10 text-white">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-[var(--color-cta)] text-[#1a1a1a] px-4 py-1 rounded-full font-bold text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            🌲 100% ORGÁNICO & SOSTENIBLE
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
                            Colchón de Látex 100% Natural: <br className="hidden md:block" />
                            <span className="text-[var(--color-cta)]">Pureza y Ergonomía del Bosque</span>
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-10 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            Reconecta con el descanso más puro. Nuestro colchón es un santuario de recuperación extraído directamente de la naturaleza.
                        </p>
                        <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                            <Link href="#configurar" className="btn btn-cta text-lg px-10 py-4 shadow-xl">
                                Ver Oferta Especial
                            </Link>
                            <Link href="tel:961443681" className="btn bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 text-lg px-10 py-4">
                                Llamar a un experto
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBar />

            {/* 2. DESCRIPCIÓN DEL PRODUCTO */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="w-12 h-1 bg-[var(--color-primary)] mb-8"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight">
                                La Revolución de la Savia Natural
                            </h2>
                            <div className="text-lg text-[var(--color-text-secondary)] space-y-6 leading-relaxed">
                                <p>
                                    Elaborado exclusivamente con la savia del árbol <strong>Hevea brasiliensis</strong>, este colchón garantiza un entorno de sueño libre de sintéticos, aditivos químicos y cargas artificiales.
                                </p>
                                <p>
                                    Gracias a su estructura de célula abierta, disfrutarás de una transpirabilidad superior que regula la temperatura corporal noche tras noche. Su diseño crea un <strong>sistema de descanso ergonómico y sostenible</strong>, ofreciendo una elasticidad única que se adapta &quot;punto por punto&quot; a tu silueta.
                                </p>
                                <p>
                                    Esto asegura una alineación perfecta de la columna y alivia la presión en hombros y caderas. <strong>Hipoalergénico por naturaleza</strong> y resistente a los ácaros, es la elección definitiva para quienes buscan salud, sostenibilidad y un despertar renovado.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl skew-x-1 lg:skew-x-2 transition-transform hover:skew-x-0 duration-700">
                                <Image
                                    src="/images/colchon  latex natural/Colchón de látex 100% natural certificado.jpg"
                                    alt="Núcleo de Látex 100% Natural Certificado"
                                    width={700}
                                    height={500}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-[var(--color-surface)] p-6 rounded-2xl shadow-lg border border-[var(--color-primary-light)] hidden md:block">
                                <p className="font-bold text-[var(--color-primary)] text-3xl">Certificado</p>
                                <p className="text-[var(--color-text)] font-semibold">ECO Institut Alemania</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CARACTERÍSTICAS TÉCNICAS */}
            <section className="py-20 bg-[var(--color-surface)]">
                <div className="container">
                    <div className="section-header text-center mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm">Ingeniería para tu espalda</span>
                        <h2 className="text-4xl font-bold mt-2">Características Premium</h2>
                        <p className="text-lg text-[var(--color-text-secondary)] mt-4">Donde la Naturaleza cuida tu Descanso</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Característica 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[var(--color-primary-light)] transition-all">
                            <div className="w-14 h-14 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-xl flex items-center justify-center text-3xl mb-6">🍃</div>
                            <h3 className="text-xl font-bold mb-4">1. Núcleo de Látex 100% Natural Certificado</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                Duerme sobre la pureza real. Con 20 cm de grosor y diseñado con 9 zonas de descanso diferenciadas, ofrece un soporte ergonómico milimétrico que se adapta a cada curva de tu cuerpo.
                            </p>
                        </div>

                        {/* Característica 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[var(--color-primary-light)] transition-all">
                            <div className="w-14 h-14 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-xl flex items-center justify-center text-3xl mb-6">☁️</div>
                            <h3 className="text-xl font-bold mb-4">2. Tecnología de Micro-Masaje y &quot;Efecto Nube&quot;</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                Hemos integrado ventosas centrales de micro-masaje que actúan mientras duermes, aliviando activamente los puntos de presión y proporcionando una sensación de ingravidez.
                            </p>
                        </div>

                        {/* Característica 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[var(--color-primary-light)] transition-all">
                            <div className="w-14 h-14 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-xl flex items-center justify-center text-3xl mb-6">💨</div>
                            <h3 className="text-xl font-bold mb-4">3. Climatización Activa</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                Gracias a sus canales de aireación internos y a una platabanda de tejido transpirable, el aire circula libremente evitando la acumulación de calor y humedad.
                            </p>
                        </div>

                        {/* Característica 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[var(--color-primary-light)] transition-all">
                            <div className="w-14 h-14 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-xl flex items-center justify-center text-3xl mb-6">🩺</div>
                            <h3 className="text-xl font-bold mb-4">4. Función Correctora de Postura Inteligente</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                Incluye un contorno perimetral reforzado que guía a tu cuerpo hacia una postura óptima, alineando la columna vertebral para promover un descanso restaurador.
                            </p>
                        </div>

                        {/* Característica 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[var(--color-primary-light)] transition-all">
                            <div className="w-14 h-14 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-xl flex items-center justify-center text-3xl mb-6">👕</div>
                            <h3 className="text-xl font-bold mb-4">5. Funda de Algodón 100% Orgánico</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                Ensuelta en suave algodón libre de pesticidas. Desenfundable y lavable a 30°C, asegurando un mantenimiento sencillo y una higiene total.
                            </p>
                        </div>

                        {/* Supporting Image Card */}
                        <div className="bg-[var(--color-primary)] p-1 rounded-2xl overflow-hidden shadow-lg group">
                            <div className="relative h-full min-h-[250px] rounded-xl overflow-hidden">
                                <Image
                                    src="/images/cama-articulada-plana.jpg"
                                    alt="Somier Articulado Titanium - Pareja Perfecta"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                                    <p className="font-bold text-lg">La Pareja Perfecta</p>
                                    <p className="text-sm opacity-80">Adaptabilidad total en camas articuladas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ficha Técnica Resumida (SEO) */}
            <section className="py-16 bg-white border-b">
                <div className="container">
                    <div className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold mb-2">Altura</h4>
                                <p className="text-2xl font-bold">20 cm</p>
                                <p className="text-sm text-[var(--color-text-secondary)] italic">9 zonas de confort</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold mb-2">Material</h4>
                                <p className="text-2xl font-bold">Látex 100%</p>
                                <p className="text-sm text-[var(--color-text-secondary)] italic">Savia de Hevea Certificada</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold mb-2">Salud</h4>
                                <p className="text-2xl font-bold">Ortopédico</p>
                                <p className="text-sm text-[var(--color-text-secondary)] italic">Alivio de presión activo</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold mb-2">Garantía</h4>
                                <p className="text-2xl font-bold">10 Años</p>
                                <p className="text-sm text-[var(--color-text-secondary)] italic">Calidad Belcolchon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PREGUNTAS FRECUENTES (Acordeón) */}
            <FAQSection
                title="Preguntas Frecuentes"
                subtitle="Sobre el Colchón Látex 100% Natural"
                items={faqItems}
            />

            {/* Final CTA */}
            <section id="configurar" className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white overflow-hidden relative">
                <div className="container text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Da el paso al descanso natural</h2>
                    <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                        Aprovecha nuestra oferta limitada: <span className="text-[var(--color-cta)] font-bold">50% Dto. + 2 Almohadas de Regalo</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="https://wa.me/34677481926?text=Hola,%20me%20interesa%20la%20oferta%20del%20Colchon%20Latex%20Natural" className="btn btn-cta text-xl px-12 py-5 animate-pulse shadow-2xl" target="_blank">
                            🛒 Reservar con 50% Dto
                        </Link>
                        <Link href="tel:961443681" className="btn bg-white text-[var(--color-primary)] hover:bg-gray-100 text-xl px-12 py-5">
                            📞 Consultar Stock
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
