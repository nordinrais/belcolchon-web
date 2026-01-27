import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ProductCard from '@/components/ui/ProductCard';
import StickyOffer from '@/components/ui/StickyOffer';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        tag="🛏️ Colección Descanso Premium"
        title="Descansa como mereces. Desde 1€ al día."
        subtitle="Colchones de alta gama, sillones relax elevadores y bases articuladas con la mejor financiación. Envío y montaje gratis en toda la península."
        ctaText="Ver Ofertas"
        ctaHref="#productos"
        secondaryCta={{
          text: "Contactar",
          href: "tel:961443681",
        }}
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Zona Relax */}
      <section id="productos" className="py-16 bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Zona Relax</h2>
            <p>Sillones diseñados para tu bienestar y autonomía</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="Sillón Relax Elevador"
              image="/images/sillon-relax-preview.jpg"
              price="Desde 599€"
              badge="⭐ Más vendido"
              features={[
                "Motor Power-Lift elevador",
                "2 posiciones eléctricas",
                "Tejido antimanchas",
              ]}
              ctaText="Ver Detalles"
              ctaHref="/zona-relax/"
            />
            <ProductCard
              title="Sillón Relax Premium"
              image="/images/sillon-premium-preview.jpg"
              price="Desde 899€"
              features={[
                "4 motores independientes",
                "Calor lumbar integrado",
                "Piel genuina chocolate",
              ]}
              ctaText="Ver Detalles"
              ctaHref="/zona-relax/"
            />
            <ProductCard
              title="Sofá Relax 2 Plazas"
              image="/images/sofa-relax-preview.jpg"
              price="Desde 1.299€"
              features={[
                "2 asientos reclinables",
                "Motor eléctrico silencioso",
                "Diferentes acabados",
              ]}
              ctaText="Ver Detalles"
              ctaHref="/zona-relax/"
            />
          </div>
        </div>
      </section>

      {/* Bases Tecnológicas */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="container">
          <div className="section-header">
            <h2>Bases Tecnológicas</h2>
            <p>Innovación alemana para un descanso superior</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="Base Articulada Titanium"
              image="/images/cama-articulada-elevada.jpg"
              price="Desde 799€"
              badge="NUEVO"
              features={[
                "Láminas de titanio",
                "Motor ultrasilencioso",
                "Mando inalámbrico",
              ]}
              ctaText="Ver Detalles"
              ctaHref="/bases-tecnologicas/"
            />
            <ProductCard
              title="Cama Articulada + Colchón"
              image="/images/cama-articulada-colchon.jpg"
              price="Desde 1.199€"
              originalPrice="1.499€"
              badge="-20% PACK"
              features={[
                "Base eléctrica completa",
                "Colchón viscoelástico",
                "Montaje incluido",
              ]}
              ctaText="Ver Pack"
              ctaHref="/bases-tecnologicas/"
            />
            <ProductCard
              title="Somier Fijo Premium"
              image="/images/somier-fijo-preview.jpg"
              price="Desde 299€"
              features={[
                "Estructura reforzada",
                "Láminas flexibles",
                "Compatible cualquier colchón",
              ]}
              ctaText="Ver Detalles"
              ctaHref="/bases-tecnologicas/"
            />
          </div>
        </div>
      </section>

      {/* Financiación */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Financia tu descanso <span className="text-[var(--color-cta)]">sin intereses</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Llévate lo que necesites hoy y paga cómodamente cada mes
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <p className="text-4xl font-bold">0%</p>
              <p className="text-sm opacity-80">Intereses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">0€</p>
              <p className="text-sm opacity-80">Entrada</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">12</p>
              <p className="text-sm opacity-80">Meses</p>
            </div>
          </div>
          <a href="tel:961443681" className="btn btn-cta text-lg px-8">
            Consultar Financiación
          </a>
        </div>
      </section>

      {/* Sticky Offer */}
      <StickyOffer price="1€" unit="/ DÍA" subtitle="Sin intereses" />
    </>
  );
}
