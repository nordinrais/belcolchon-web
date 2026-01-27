import Link from 'next/link';

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
    return (
        <section className="bg-gradient-to-br from-[var(--color-surface)] to-[#E8F4FC] py-16 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    {tag && (
                        <span className="inline-block bg-[var(--color-cta)] text-[#1a1a1a] px-4 py-1 rounded-full font-bold text-sm mb-4">
                            {tag}
                        </span>
                    )}

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4 leading-tight">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={ctaHref} className="btn btn-cta text-lg px-8">
                            {ctaText}
                        </Link>
                        {secondaryCta && (
                            <Link href={secondaryCta.href} className="btn btn-secondary text-lg px-8">
                                {secondaryCta.text}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
