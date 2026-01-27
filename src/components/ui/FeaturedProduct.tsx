'use client';

interface FeaturedProductProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    price?: string;
    priceNote?: string;
    badge?: string;
    image: string;
    ctaText: string;
    ctaHref: string;
}

export default function FeaturedProduct({
    title,
    subtitle,
    description,
    features,
    price,
    priceNote,
    badge,
    image,
    ctaText,
    ctaHref,
}: FeaturedProductProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
                {/* Imagen */}
                <div className="relative h-64 md:h-auto min-h-[300px]">
                    {badge && (
                        <span className="absolute top-4 left-4 bg-[var(--color-cta)] text-white text-sm font-bold px-4 py-2 rounded-full z-10">
                            {badge}
                        </span>
                    )}
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Contenido */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-[var(--color-primary)] font-semibold mb-2">{subtitle}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                        {title}
                    </h3>
                    <p className="text-[var(--color-text-light)] mb-6 text-lg">
                        {description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-[var(--color-text)]">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Precio */}
                    {price && (
                        <div className="mb-6">
                            <span className="text-3xl font-bold text-[var(--color-cta)]">{price}</span>
                            {priceNote && (
                                <span className="text-[var(--color-text-light)] ml-2">{priceNote}</span>
                            )}
                        </div>
                    )}

                    {/* CTA */}
                    <a
                        href={ctaHref}
                        target={ctaHref.startsWith('http') ? '_blank' : undefined}
                        rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="btn btn-cta text-center text-lg py-4 px-8 inline-block w-full md:w-auto"
                    >
                        {ctaText}
                    </a>
                </div>
            </div>
        </div>
    );
}
