import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = ({ t }) => {
    return (
        <div className="bg-white">
            <SEO
                title={t.nav.home}
                description={t.hero.subtitle}
            />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Left */}
                    <div className="text-center lg:text-left animate-fade-in-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            {t.hero.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {t.hero.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link to="/contact" className="bg-deep-purple text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-purple-800 transition-all hover:-translate-y-1">
                                {t.hero.cta}
                            </Link>
                            <p className="text-sm text-gray-500 font-medium">
                                {t.hero.description}
                            </p>
                        </div>
                    </div>
                    {/* Product Mockup Right */}
                    <div className="relative animate-fade-in-right hidden md:block">
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/hero_mockup.jpg`}
                                alt="FastClass Platform Preview"
                                className="w-full h-auto rounded-2xl shadow-inner"
                            />
                        </div>
                        {/* Decorative Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-200/30 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* 2. The Problem Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">{t.problem.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Item 1 */}
                        <div className="text-center group">
                            <div className="w-20 h-20 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-deep-purple transition-colors duration-300">
                                <svg className="w-10 h-10 text-deep-purple group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.problem.items[0].title}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.problem.items[0].desc}</p>
                        </div>
                        {/* Item 2 */}
                        <div className="text-center group">
                            <div className="w-20 h-20 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-deep-purple transition-colors duration-300">
                                <svg className="w-10 h-10 text-deep-purple group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.problem.items[1].title}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.problem.items[1].desc}</p>
                        </div>
                        {/* Item 3 */}
                        <div className="text-center group">
                            <div className="w-20 h-20 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-deep-purple transition-colors duration-300">
                                <svg className="w-10 h-10 text-deep-purple group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.problem.items[2].title}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.problem.items[2].desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Solution (Zig-Zag) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
                <div className="max-w-7xl mx-auto space-y-24">
                    {/* Row 1: Image Left / Text Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="w-1/2 bg-white rounded-3xl shadow-lg border border-gray-100 p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/scheduler_preview.png`}
                                    alt="FastClass Scheduler Interface"
                                    className="w-full h-auto rounded-2xl shadow-inner"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">{t.solution.items[0].title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">{t.solution.items[0].desc}</p>
                        </div>
                    </div>

                    {/* Row 2: Text Left / Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">{t.solution.items[1].title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">{t.solution.items[1].desc}</p>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-4/5 bg-white rounded-3xl shadow-lg border border-gray-100 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/financial_preview.png`}
                                    alt="FastClass Financial Dashboard"
                                    className="w-full h-auto rounded-2xl shadow-inner"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. The Founder's Edge (Trust) */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-deep-purple to-purple-800 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.trust.title}</h2>
                            <p className="text-lg md:text-xl text-purple-100 leading-relaxed mb-8">
                                {t.trust.desc}
                            </p>
                            <Link to="/about" className="inline-block bg-white text-deep-purple font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                                {t.trust.cta}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Pricing Preview */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.pricingPreview.cards.map((card, idx) => (
                            <div key={idx} className={`relative p-8 rounded-3xl border ${card.recommended ? 'border-deep-purple shadow-xl bg-white' : 'border-gray-100 bg-gray-50'} hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
                                {card.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-deep-purple text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-md">
                                        Recomendado
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                                <p className="text-gray-600 mb-8 flex-grow">{card.subtitle}</p>
                                <Link to="/contact" className={`block text-center py-3 rounded-xl font-bold transition-colors ${card.recommended ? 'bg-deep-purple text-white hover:bg-purple-800' : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-deep-purple hover:text-deep-purple'}`}>
                                    {card.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Final Conversion (Closer) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.closer.title}</h2>
                    <p className="text-xl text-gray-600 mb-10">{t.closer.subtitle}</p>
                    <Link to="/contact" className="inline-block bg-deep-purple text-white font-bold py-5 px-10 rounded-full shadow-xl hover:bg-purple-800 transition-all hover:scale-105">
                        {t.closer.cta}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
