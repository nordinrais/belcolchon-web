'use client';

const features = [
    {
        icon: '⚡',
        title: 'Motor Elevador',
        desc: 'Sistema Power-Lift para incorporarse sin esfuerzo.',
        check: true
    },
    {
        icon: '🎮',
        title: 'Mando a Distancia',
        desc: 'Control total con solo dos botones. Simple e intuitivo.',
        check: true
    },
    {
        icon: '👜',
        title: 'Bolsillo Lateral',
        desc: 'Ten siempre a mano tu libro, móvil o el mando.',
        check: true
    },
    {
        icon: '🏠',
        title: 'Envío a Domicilio',
        desc: 'Te lo llevamos a casa en tiempo récord.',
        check: true
    }
];

export default function FeaturesTous() {
    return (
        <section className="py-20 bg-[var(--color-surface)]">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">No renuncies a nada por el precio</h2>
                    <p className="text-lg text-gray-600">
                        Otros te venden sillones manuales por este precio. Nosotros te damos <span className="font-bold text-[var(--color-primary)]">tecnología eléctrica de última generación</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[var(--color-surface)] rounded-full flex items-center justify-center text-3xl mb-6">
                                {feature.icon}
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-green-500 font-bold">✅</span>
                                <h3 className="font-bold text-lg">{feature.title}</h3>
                            </div>
                            <p className="text-sm text-gray-500">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
