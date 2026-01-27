'use client';

import { useEffect, useState } from 'react';

interface StickyOfferProps {
    price: string;
    unit: string;
    subtitle: string;
}

export default function StickyOffer({ price = '1€', unit = '/ DÍA', subtitle = 'Sin intereses' }: StickyOfferProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar después de hacer scroll 500px
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#1A2B49] to-[#0D1B2A] py-3 transform transition-transform duration-300">
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-white text-sm hidden sm:block">Llévatelo hoy desde</span>
                    <span className="text-[#FFC107] text-2xl font-bold font-heading">
                        {price} <span className="text-base font-semibold">{unit}</span>
                    </span>
                    <span className="text-white/80 text-sm">{subtitle}</span>
                </div>
                <a
                    href="#"
                    className="btn btn-cta text-sm py-2 px-4"
                >
                    Ver Ofertas
                </a>
            </div>
        </div>
    );
}
