import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = ({ t }) => {
    return (
        <div className="bg-white">
            <SEO
                title={t.about.title}
                description={t.about.intro}
            />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
                {/* Background Watermark */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none">
                    <img src={`${import.meta.env.BASE_URL}assets/fastclass_logo.png`} alt="" className="w-96 h-auto" />
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-sm font-bold tracking-widest text-deep-purple uppercase mb-3 animate-fade-in-up">
                        {t.about.title}
                    </h1>
                    <p className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto mb-6 animate-fade-in-up delay-100">
                        "{t.about.intro}"
                    </p>
                    <div className="w-24 h-1.5 bg-deep-purple mx-auto rounded-full animate-fade-in-up delay-200"></div>
                </div>
            </section>

            {/* 2. The Story (Problem & Vision) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">

                {/* Section A: The Problem (Text Left, Image Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-6 order-2 lg:order-1 animate-fade-in-left">
                        <div className="inline-flex items-center justify-center p-2 bg-red-50 rounded-lg mb-4">
                            <span className="text-red-500 font-bold text-sm uppercase tracking-wide">The Challenge</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Chaotic Management <br />In 2025</h2>
                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p>{t.about.story[0]}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-6 order-1 lg:order-2 animate-fade-in-right">
                        {/* Placeholder for "Chaotic" Illustration */}
                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200 shadow-sm aspect-video flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/50 to-transparent"></div>
                            <div className="text-center">
                                <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="text-gray-500 font-medium">Legacy Spreadsheets & Manual Chaos</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section B: The Solution (Image Left, Text Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 animate-fade-in-left">
                        {/* Placeholder for "FastClass Dashboard" */}
                        <div className="bg-deep-purple/5 rounded-3xl p-8 border border-deep-purple/10 shadow-sm aspect-video flex items-center justify-center relative overflow-hidden">
                            <div className="text-center">
                                <img src={`${import.meta.env.BASE_URL}assets/fastclass_logo.png`} alt="FastClass Dashboard" className="h-16 w-auto mx-auto mb-4 opacity-80" />
                                <span className="text-deep-purple font-medium">FastClass Intelligent Dashboard</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 space-y-6 animate-fade-in-right">
                        <div className="inline-flex items-center justify-center p-2 bg-purple-50 rounded-lg mb-4">
                            <span className="text-deep-purple font-bold text-sm uppercase tracking-wide">The Vision</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Mastering Operations <br />With Technology</h2>
                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p>{t.about.story[1]}</p>
                            <p>{t.about.story[2]}</p>
                        </div>
                    </div>
                </div>

            </section>

            {/* 3. The Team */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 opacity-5 pointer-events-none">
                    <img src={`${import.meta.env.BASE_URL}assets/fastclass_logo.png`} alt="" className="w-80 h-auto rotate-90" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">The Powerhouse Team</h2>
                        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Building the future of learning management together.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {t.about.team.map((member, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-purple-50 mb-6 flex items-center justify-center group-hover:bg-deep-purple transition-colors duration-300">
                                    <svg className="w-10 h-10 text-deep-purple group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-deep-purple mb-2">{member.role}</h3>
                                <p className="text-gray-600 leading-relaxed">{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Final CTA Box */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-deep-purple rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed max-w-3xl mx-auto">
                                "{t.about.conclusion}"
                            </h2>
                            <div>
                                <Link
                                    to="/pricing"
                                    className="inline-block bg-white text-deep-purple font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-transform transform hover:-translate-y-1 shadow-lg"
                                >
                                    {t.about.ctaButton}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
