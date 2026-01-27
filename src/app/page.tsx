import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ProductCard from '@/components/ui/ProductCard';
import FeaturedProduct from '@/components/ui/FeaturedProduct';
import StickyOffer from '@/components/ui/StickyOffer';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        tag="⭐ Calidad Premium desde 1€/día"
        title="Vuelve a dormir como te mereces"
        subtitle="Descubre la nueva Colección de Alta Tecnología del Descanso. Desde el indestructible Somier Titanium hasta el confort de nuestros Sillones Relax."
        ctaText="Ver Catálogo"
        ctaHref="#catalogo"
        secondaryCta={{
          text: "Te Asesoramos",
          href: "https://wa.me/34677481926?text=Hola,%20me%20interesa%20información%20sobre%20colchones",
        }}
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* ==========================================
          BLOQUE A: ZONA RELAX - Producto Destacado
          ========================================== */}
      <section id="catalogo" className="py-16 bg-[var(--color-surface)]">
        <div className="container">
          <div className="section-header">
            <h2>Zona Relax</h2>
            <p>Tu independencia no tiene precio. Tu comodidad, sí.</p>
          </div>

          <FeaturedProduct
            title="Sillón Relax Elevador"
            subtitle="El más vendido"
            description="Levántate sin esfuerzo gracias a su motor Power-Lift. Masaje por vibración y calor lumbar incluidos. Ideal para personas mayores o con movilidad reducida."
            badge="⭐ Más Vendido"
            image="/images/sillon-relax-preview.jpg"
            features={[
              "Motor Power-Lift elevador",
              "Masaje por vibración integrado",
              "Calor lumbar terapéutico",
              "Tejido antimanchas de fácil limpieza",
            ]}
            price="Desde 1€/día"
            priceNote="Financiación sin intereses"
            ctaText="Lo Quiero Probar"
            ctaHref="https://wa.me/34677481926?text=Hola,%20me%20interesa%20el%20Sillón%20Relax%20Elevador"
          />
        </div>
      </section>

      {/* ==========================================
          BLOQUE B: BASES TECNOLÓGICAS - Grid 3 cols
          ========================================== */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Bases Tecnológicas</h2>
            <p>La base perfecta: Resistencia y Almacenaje.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="Somier Articulado TITANIUM"
              image="/images/cama-articulada-plana.jpg"
              price="Desde 799€"
              badge="NUEVO"
              features={[
                "Ultra-resistente",
                "Silencioso",
                "Láminas Inteligentes",
              ]}
              ctaText="Más Información"
              ctaHref="https://wa.me/34677481926?text=Hola,%20me%20interesa%20el%20Somier%20Titanium"
            />
            <ProductCard
              title="Cama Articulada"
              image="/images/cama-articulada-colchon.jpg"
              price="Desde 1.199€"
              originalPrice="1.499€"
              badge="-20% PACK"
              features={[
                "Motores Silenciosos",
                "Posición Zero-G",
                "Mando Inalámbrico",
              ]}
              ctaText="Más Información"
              ctaHref="https://wa.me/34677481926?text=Hola,%20me%20interesa%20la%20Cama%20Articulada"
            />
            <ProductCard
              title="Canapé Abatible"
              image="/images/canape-abatible.jpg"
              price="Desde 399€"
              badge="Popular"
              features={[
                "Gran Capacidad",
                "Apertura Hidráulica",
                "Madera Reforzada",
              ]}
              ctaText="Más Información"
              ctaHref="https://wa.me/34677481926?text=Hola,%20me%20interesa%20el%20Canapé%20Abatible"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          BLOQUE C: COLCHONES PREMIUM - Grid 3 cols
          ========================================== */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="container">
          <div className="section-header">
            <h2>Colchones Premium</h2>
            <p>Dime cómo duermes y te diré qué colchón necesitas.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="Colchón Solid Firm"
              image="/images/colchon-solid-firm.jpg"
              price="Consultar precio"
              features={[
                "Firmeza Alta",
                "Ortopédico",
                "Alta Densidad",
              ]}
              ctaText="Consultar Precio"
              ctaHref="https://wa.me/34677481926?text=Hola,%20me%20interesa%20el%20Colchón%20Solid%20Firm"
            />
            <ProductCard
              title="Colchón Látex Natural"
              image="/images/colchon-latex.jpg"
              price="Consultar precio"
              badge="Ecológico"
              features={[
                "100% Natural",
                "Hipoalergénico",
                "Antibacteriano",
              ]}
              ctaText="Consultar Precio"
              ctaHref="https://wa.me/34677481926?text=Hola,%20me%20interesa%20el%20Colchón%20Látex"
            />
            <ProductCard
              title="Colchón Ergo Hibrid"
              image="/images/colchon-ergo-hibrid.jpg"
              price="Consultar precio"
              badge="Premium"
              features={[
                "Tecnología Híbrida",
                "Muelles Ensacados",
                "Viscoelástica",
              ]}
              ctaText="Consultar Precio"
              ctaHref="https://wa.me/34677481926?text=Hola,%20me%20interesa%20el%20Colchón%20Ergo%20Hibrid"
            />
          </div>
        </div>
      </section>

      {/* Financiación */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            El descanso de tus sueños, desde solo <span className="text-[var(--color-cta)]">1€ al día</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Llevamos más de 20 años ayudando a miles de familias a dormir mejor. ¡Descúbrelo!
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
              <p className="text-4xl font-bold">Gratis</p>
              <p className="text-sm opacity-80">Retiramos tu viejo</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:961443681" className="btn bg-white text-[var(--color-primary)] hover:bg-gray-100 text-lg px-8">
              📞 Llama Ahora: 961 44 36 81
            </a>
            <a
              href="https://wa.me/34677481926?text=Hola,%20me%20interesa%20información%20sobre%20financiación"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cta text-lg px-8"
            >
              💬 Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Offer */}
      <StickyOffer price="1€" unit="/ DÍA" subtitle="Sin intereses" />
    </>
  );
}
