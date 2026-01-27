export default function TrustBar() {
    const benefits = [
        { icon: '🚚', title: 'Envío Gratis', subtitle: 'En península' },
        { icon: '🔧', title: 'Montaje Incluido', subtitle: 'Lo instalamos nosotros' },
        { icon: '✅', title: 'Garantía 2 Años', subtitle: 'Servicio técnico' },
        { icon: '♻️', title: 'Recogemos tu Viejo', subtitle: 'Gratis con tu compra' },
    ];

    return (
        <section className="bg-[var(--color-surface)] py-6">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 justify-center md:justify-start"
                        >
                            <span className="text-2xl">{benefit.icon}</span>
                            <div>
                                <p className="font-semibold text-sm text-[var(--color-text)]">{benefit.title}</p>
                                <p className="text-xs text-[var(--color-text-secondary)]">{benefit.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
