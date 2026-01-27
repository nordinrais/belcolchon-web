import HeroAdjustable from '@/components/sections/HeroAdjustable';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import TechnicalPreview from '@/components/sections/TechnicalPreview';
import CompatibilityForm from '@/components/ui/CompatibilityForm';
import CrossSellingBases from '@/components/sections/CrossSellingBases';
import TrustBar from '@/components/sections/TrustBar';

export const metadata = {
    title: 'Cama Articulada Titanium | Tecnología y Salud para tu descanso',
    description: 'Descubre el soporte definitivo con nuestra Cama Articulada Titanium. Soluciones para ronquidos, reflujo y piernas cansadas.',
};

export default function AdjustableLanding() {
    return (
        <main className="min-h-screen">
            {/* Hero Dinámico */}
            <HeroAdjustable />

            {/* Franja de Beneficios de Confianza */}
            <div className="bg-white border-b">
                <TrustBar />
            </div>

            {/* Bloque Dolor/Solución */}
            <SolutionsGrid />

            {/* Interactivo "Rayos X" */}
            <TechnicalPreview />

            {/* Captación de Lead */}
            <CompatibilityForm />

            {/* Cross-selling */}
            <CrossSellingBases />

            {/* Sección final de urgencia/WhatsApp ya está en el layout global o se hereda de Hero */}
        </main>
    );
}
