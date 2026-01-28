'use client';

import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100 italic-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 text-left flex justify-between items-center transition-colors hover:text-[var(--color-primary)]"
            >
                <span className="text-lg font-bold text-[var(--color-text)]">{question}</span>
                <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            {isOpen && (
                <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
};

interface FAQSectionProps {
    title: string;
    subtitle?: string;
    items: { question: string, answer: string }[];
}

export default function FAQSection({ title, subtitle, items }: FAQSectionProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    {subtitle && <p className="text-[var(--color-text-secondary)] mt-2">{subtitle}</p>}
                </div>

                <div className="space-y-2">
                    {items.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
