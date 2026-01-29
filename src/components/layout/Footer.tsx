import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-text)] text-white py-8">
            <div className="container">
                <div className="flex flex-col items-center gap-6 text-center">
                    <Link href="/" className="block">
                        <Image
                            src="/images/logo-belcolchon-nuevo.png"
                            alt="Bel Colchón"
                            width={300}
                            height={100}
                            className="h-20 w-auto brightness-0 invert scale-125"
                        />
                    </Link>

                    <nav className="flex gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/70 hover:text-white transition-colors text-sm"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#"
                            className="text-white/70 hover:text-white transition-colors text-sm"
                        >
                            Política de Privacidad
                        </Link>
                    </nav>

                    <p className="text-sm text-white/60">
                        © {new Date().getFullYear()} Bel Colchón. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
