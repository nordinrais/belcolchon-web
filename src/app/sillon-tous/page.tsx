import HeroTous from '@/components/sections/HeroTous';
import FeaturesTous from '@/components/sections/FeaturesTous';
import StockFormTous from '@/components/ui/StockFormTous';
import TrustBar from '@/components/sections/TrustBar';

export const metadata = {
    title: 'Sillón Relax Tous 499€ | Oferta Elevador Eléctrico Belcolchon',
    description: 'Llévate el sillón relax elevador Tous al mejor precio: solo 499€. Motor Power-Lift, tejido antimanchas y envío gratis. ¡Stock limitado!',
};

export default function SillonTousLanding() {
    return (
        <main className="min-h-screen bg-white">
            {/* Aviso de Oferta Flash Superior */}
            <div className="bg-[#E53935] text-white py-2 text-center text-sm font-bold uppercase tracking-widest overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                    🔥 OFERTA FLASH: SILLÓN TOUS POR SOLO 499€ - QUEDAN 12 UNIDADES 🔥
                </div>
            </div>

            {/* Hero de Conversión */}
            <HeroTous />

            {/* Confianza */}
            <div className="border-t border-b bg-gray-50">
                <TrustBar />
            </div>

            {/* Bloque Beneficios */}
            <FeaturesTous />

            {/* Formulario de Captación */}
            <StockFormTous />

            {/* Footer minimalista de cierre */}
            <section className="py-12 bg-gray-50 border-t">
                <div className="container text-center">
                    <p className="text-gray-400 text-sm">
                        © 2026 Belcolchon. Oferta válida hasta fin de existencias. <br />
                        Precios con IVA incluido. Envío y retirada gratis en península.
                    </p>
                </div>
            </section>
        </main>
    );
}
