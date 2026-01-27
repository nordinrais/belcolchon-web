'use client';

import ProductCard from '@/components/ui/ProductCard';

export default function CrossSellingBases() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Completa tu equipo de descanso</h2>
                    <p className="text-lg text-gray-600">Aprovecha nuestras ofertas combinadas.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <ProductCard
                        title="Canapé Abatible"
                        image="/images/canape-abatible.jpg"
                        price="Desde 399€"
                        badge="OPCIÓN RECOMENDADA"
                        features={[
                            "Máximo almacenamiento",
                            "Apertura hidráulica",
                            "Compatible con base articulada"
                        ]}
                        ctaText="Ver Almacenaje"
                        ctaHref="/#catalogo"
                    />
                    <ProductCard
                        title="Pack Ahorro Articulado"
                        image="/images/cama-articulada-colchon.jpg"
                        price="1.199€"
                        badge="MEJOR PRECIO"
                        features={[
                            "Cama + Colchón incluido",
                            "Ahorras 300€",
                            "Envío y montaje gratis"
                        ]}
                        ctaText="Ver Pack"
                        ctaHref="/#catalogo"
                    />
                </div>
            </div>
        </section>
    );
}
