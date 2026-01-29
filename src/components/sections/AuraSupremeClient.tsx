'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';

const PRICE_MATRIX = [
    { size: '90 x 190/180 cm', original: 931.09, final: 512.10 },
    { size: '90 x 200 cm', original: 1024.36, final: 563.40 },
    { size: '105 x 190/180 cm', original: 1048.91, final: 576.90 },
    { size: '105 x 200 cm', original: 1153.64, final: 634.50 },
    { size: '135 x 190/180 cm', original: 1296.00, final: 712.80 },
    { size: '135 x 200 cm', original: 1425.27, final: 783.90 },
    { size: '140 x 190/180 cm', original: 1346.73, final: 740.70 },
    { size: '140 x 200 cm', original: 1480.91, final: 814.50 },
    { size: '150 x 190/180 cm', original: 1408.91, final: 774.90 },
    { size: '150 x 200 cm', original: 1549.64, final: 852.30 },
    { size: '160 x 190/180 cm', original: 1534.91, final: 844.20 },
    { size: '160 x 200 cm', original: 1688.73, final: 928.80 },
    { size: '180 x 190/180 cm', original: 1710.00, final: 940.50 },
    { size: '180 x 200 cm', original: 1881.82, final: 1035.00 },
];

const IMAGES = [
    '/images/aura-supreme/colchon-aura-supreme-1.webp',
    '/images/aura-supreme/colchon-aura-supreme-2.webp',
    '/images/aura-supreme/colchon-aura-supreme-3.webp',
    '/images/aura-supreme/colchon-aura-supreme-4.webp',
];

export default function AuraSupremeClient() {
    const [selectedSize, setSelectedSize] = useState(PRICE_MATRIX[4]); // Default 135x190
    const [currentImage, setCurrentImage] = useState(0);

    const formatPrice = (price: number) => {
        return price.toLocaleString('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }) + ' €';
    };

    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Image Gallery */}
            <div className="relative aspect-[4/5] md:aspect-video w-full overflow-hidden">
                <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    {IMAGES.map((img, i) => (
                        <div key={i} className="flex-shrink-0 w-full h-full relative">
                            <Image src={img} alt={`Aura Supreme Gallery ${i + 1}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>
                {/* Bullets */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {IMAGES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentImage(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImage ? 'bg-[var(--color-primary)]' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="container py-8">
                {/* Header Info */}
                <div className="mb-6">
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3">
                        SERIE TITANIUM COMFORT
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Aura Supreme</h1>
                    <p className="text-gray-500 font-medium">La firmeza que tu espalda necesita, el confort que tus sentidos merecen.</p>
                </div>

                {/* Price Block */}
                <div className="bg-[#f8fafc] p-6 rounded-3xl mb-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-400 line-through text-lg">{formatPrice(selectedSize.original)}</span>
                        <span className="bg-red-500 text-white px-2 py-0.5 rounded-lg text-sm font-bold">-45% DTO</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-gray-600 text-lg">Desde</span>
                        <span className="text-4xl font-black text-gray-900">{formatPrice(selectedSize.final)}</span>
                        <span className="text-gray-400 text-sm ml-2">IVA incluido</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold text-sm">
                        <span className="text-lg">🚛</span>
                        <span>Envío gratuito en 48/72h</span>
                    </div>
                </div>

                {/* Size Selection */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <label className="font-bold text-gray-900">Seleccionar Medida</label>
                        <button className="text-[var(--color-primary)] text-sm font-bold flex items-center gap-1">
                            Guía de medidas 📏
                        </button>
                    </div>
                    <div className="relative">
                        <select
                            value={selectedSize.size}
                            onChange={(e) => {
                                const size = PRICE_MATRIX.find(p => p.size === e.target.value);
                                if (size) setSelectedSize(size);
                            }}
                            className="w-full p-4 border border-gray-200 rounded-2xl appearance-none bg-white font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
                        >
                            {PRICE_MATRIX.map((p) => (
                                <option key={p.size} value={p.size}>{p.size}</option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            ▼
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3 shadow-sm">
                        <span className="text-3xl">🛡️</span>
                        <div>
                            <p className="font-bold text-gray-900 leading-tight">10 Años</p>
                            <p className="text-gray-500 text-xs">Garantía total</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3 shadow-sm">
                        <span className="text-3xl">🌙</span>
                        <div>
                            <p className="font-bold text-gray-900 leading-tight">100 Noches</p>
                            <p className="text-gray-500 text-xs">Prueba sin compromiso</p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="prose prose-sm max-w-none mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del producto</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        El Aura Supreme es la cumbre de nuestra Serie Titanium. Diseñado con tecnología de micromuelles ensacados y una capa superior de viscoelástica de grafeno para una termorregulación óptima.
                    </p>
                    <button className="text-[var(--color-primary)] font-bold flex items-center gap-1">
                        Leer más especificaciones <span className="text-lg">›</span>
                    </button>
                </div>

                {/* Benefit Thumbnails */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden aspect-video relative">
                        <Image src={IMAGES[1]} alt="Benefit 1" fill className="object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-video relative">
                        <Image src="/images/colchon-latex-natural/hero-latex-natural.png" alt="Benefit 2" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>
            </div>

            {/* Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden">
                <div className="flex items-center justify-between gap-4 max-w-xl mx-auto">
                    <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">TOTAL</p>
                        <p className="text-xl font-black text-gray-900">{formatPrice(selectedSize.final)}</p>
                    </div>
                    <Link
                        href={`${WHATSAPP_LINK}?text=Hola,%20me%20interesa%20el%20Colchón%20Aura%20Supreme%20en%20medida%20${encodeURIComponent(selectedSize.size)}`}
                        target="_blank"
                        className="flex-grow bg-[#1A2B49] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                    >
                        <span className="text-xl">🛍️</span>
                        Añadir al carrito
                    </Link>
                </div>
            </div>

            {/* Desktop Sticky Sidebar (Simplified) */}
            <div className="hidden md:block">
                {/* Here we could implement the desktop version if needed, but the model is mobile-first */}
            </div>
        </div>
    );
}
