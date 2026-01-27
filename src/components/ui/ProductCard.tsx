import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    title: string;
    image: string;
    price: string;
    originalPrice?: string;
    badge?: string;
    features?: string[];
    ctaText: string;
    ctaHref: string;
}

export default function ProductCard({
    title,
    image,
    price,
    originalPrice,
    badge,
    features,
    ctaText,
    ctaHref,
}: ProductCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {badge && (
                    <span className="absolute top-3 left-3 bg-[var(--color-cta)] text-[#1a1a1a] px-3 py-1 rounded-full text-sm font-bold">
                        {badge}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{title}</h3>

                {features && features.length > 0 && (
                    <ul className="text-sm text-[var(--color-text-secondary)] mb-3 space-y-1">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-[var(--color-primary)]">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-[var(--color-primary)]">{price}</span>
                    {originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
                    )}
                </div>

                {/* CTA */}
                <Link
                    href={ctaHref}
                    className="btn btn-cta w-full justify-center"
                >
                    {ctaText}
                </Link>
            </div>
        </div>
    );
}
