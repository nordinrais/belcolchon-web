'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface HeroProps {
    tag?: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
    secondaryCta?: {
        text: string;
        href: string;
    };
}

export default function Hero({
    tag,
    title,
    subtitle,
    ctaText,
    ctaHref,
    secondaryCta,
}: HeroProps) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000, stopOnInteraction: false })
    ]);

    return (
        <section className="bg-gradient-to-br from-[var(--color-surface)] to-[#E8F4FC] py-12 md:py-20 overflow-hidden">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* COLUMNA IZQUIERDA (Textos) */}
                    <div className="text-left animate-in fade-in slide-in-from-left duration-700">
                        {tag && (
                            <span className="inline-block bg-[var(--color-cta)] text-[#1a1a1a] px-4 py-1 rounded-full font-bold text-sm mb-6 shadow-sm">
                                {tag}
                            </span>
                        )}

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] mb-6 leading-tight">
                            {title}
                        </h1>

                        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed max-w-xl">
                            {subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={ctaHref} className="btn btn-cta text-lg px-10 py-4 shadow-lg hover:scale-105 transition-transform">
                                {ctaText}
                            </Link>
                            {secondaryCta && (
                                <Link href={secondaryCta.href} className="btn bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-surface)] text-lg px-10 py-4 transition-colors">
                                    {secondaryCta.text}
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA (Carrusel) */}
                    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
                        <div className="embla overflow-hidden rounded-3xl shadow-2xl" ref={emblaRef}>
                            <div className="embla__container flex">
                                {/* Slide 1: Lifestyle Mattress */}
                                <div className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-[4/3]">
                                    <Image
                                        src="/images/imagenes banner/colchon chantal dest.webp"
                                        alt="Colchón Premium Lifestyle"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Slide 2: Mattress with Overlay */}
                                <div className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-[4/3]">
                                    <Image
                                        src="/images/imagenes banner/colchon muelles.webp"
                                        alt="Detalle Colchón"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center p-6">
                                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl transform rotate-1">
                                            <p className="text-[var(--color-primary)] font-bold text-xl md:text-2xl mb-1">📦 Envío GRATIS</p>
                                            <p className="text-[var(--color-text)] font-semibold">y Retirada del antiguo</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Slide 3: TARJETA DE OFERTA FLASH */}
                                <div className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-auto min-h-[450px] md:min-h-[500px] bg-[#f8fafc] flex flex-col">
                                    <div className="h-full flex flex-col w-full">
                                        {/* Cabecera */}
                                        <div className="bg-[var(--color-primary)] p-4 md:p-6 text-center shadow-md">
                                            <span className="text-white font-black text-xl md:text-2xl lg:text-3xl tracking-tighter italic block truncate">OFERTA FLASH</span>
                                        </div>

                                        {/* Cuerpo */}
                                        <div className="flex-grow p-4 md:p-8 flex flex-col justify-center bg-white border-x-4 md:border-x-8 border-b-4 md:border-b-8 border-[var(--color-primary)]">
                                            <div className="space-y-4 md:space-y-6">
                                                <div className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-bold text-red-600">
                                                    <span className="shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-100 flex items-center justify-center text-xs md:text-base">✓</span>
                                                    <span>50% de DESCUENTO</span>
                                                </div>
                                                <div className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-bold text-gray-800">
                                                    <span className="shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs md:text-base">✓</span>
                                                    <span>101 noches de prueba</span>
                                                </div>
                                                <div className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-bold text-gray-800">
                                                    <span className="shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs md:text-base">✓</span>
                                                    <span>Unidades Limitadas</span>
                                                </div>

                                                <hr className="my-2 md:my-4 border-dashed border-gray-300" />

                                                <div className="space-y-2 md:space-y-3">
                                                    <div className="flex items-center gap-2 md:gap-3 text-sm md:text-lg font-semibold text-[var(--color-primary)]">
                                                        <span className="text-lg md:text-2xl">🎁</span>
                                                        <span className="leading-tight">REGALO: 2 almohadas viscoelásticas</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 md:gap-3 text-sm md:text-lg font-semibold text-[var(--color-primary)]">
                                                        <span className="text-lg md:text-2xl">🎁</span>
                                                        <span className="leading-tight">REGALO: Pareja de albornoces</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Indicadores de Carrusel */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-[var(--color-primary)] opacity-30"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
