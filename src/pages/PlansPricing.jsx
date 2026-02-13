import React from 'react';
import { Helmet } from 'react-helmet-async';

const PlansPricing = ({ t }) => {
    const [billingCycle, setBillingCycle] = React.useState('monthly');

    const toggleBilling = () => {
        setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
    };

    return (
        <div className="pt-20">
            <Helmet>
                <title>Plans & Pricing | FastClass</title>
                <meta name="description" content="Choose the best plan for your learning journey with FastClass." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-deep-purple text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="relative max-w-7xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight animate-fade-in-up">
                        {t.pricing?.title || "Plans & Pricing"}
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto font-light animate-fade-in-up delay-100">
                        {t.pricing?.subtitle || "Flexible options for every learner."}
                    </p>
                </div>
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.pricing?.packagesTitle || "Our Packages"}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t.pricing?.intro || "Explore our competitive pricing tiers."}</p>

                        {/* Formatting Toggle */}
                        <div className="flex items-center justify-center space-x-4 mb-4">
                            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>{t.pricing?.toggle?.monthly}</span>
                            <button
                                onClick={toggleBilling}
                                className="relative inline-flex items-center w-12 h-6 rounded-full bg-deep-purple transition-colors focus:outline-none"
                            >
                                <span className={`${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
                            </button>
                            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                                {t.pricing?.toggle?.yearly}
                                <span className="ml-2 inline-block px-2 py-0.5 text-xs font-semibold text-deep-purple bg-purple-100 rounded-full">
                                    {t.pricing?.toggle?.discount}
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {t.pricing?.plans?.map((plan, idx) => (
                            <div key={idx} className={`bg-white rounded-2xl shadow-sm transition-all duration-300 border flex flex-col ${plan.highlight ? 'border-deep-purple shadow-purple-500/20 shadow-lg transform md:-translate-y-2' : 'border-gray-100 hover:shadow-md'}`}>
                                {plan.highlight && (
                                    <div className="bg-deep-purple text-white text-center py-2 text-sm font-bold uppercase tracking-wider rounded-t-2xl">Most Popular</div>
                                )}
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-deep-purple mb-2">{plan.name}</h3>
                                    <p className="text-gray-500 text-sm mb-4 h-5">{plan.description}</p>
                                    <div className="text-4xl font-bold text-gray-900 mb-1">
                                        {plan.price[billingCycle]}
                                        <span className="text-lg text-gray-500 font-normal">{plan.period[billingCycle]}</span>
                                    </div>
                                    {billingCycle === 'yearly' && (
                                        <div className="text-xs text-green-600 font-semibold mb-6">
                                            {t.pricing?.toggle?.discount}
                                        </div>
                                    )}
                                    <div className={`space-y-4 mb-8 flex-grow ${billingCycle !== 'yearly' ? 'mt-6' : ''}`}>
                                        {plan.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-start text-gray-600 group relative">
                                                <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                <span className="flex-grow">
                                                    {feature.text}
                                                    {feature.tooltip && (
                                                        <span className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-gray-600 text-xs cursor-help group-hover:bg-deep-purple group-hover:text-white transition-colors relative">
                                                            ?
                                                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-center shadow-xl">
                                                                {feature.tooltip}
                                                                <svg className="absolute text-gray-900 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                                            </span>
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className={`w-full font-bold py-3 px-4 rounded-lg transition-transform hover:scale-105 duration-200 ${plan.highlight ? 'bg-deep-purple text-white shadow-lg hover:bg-purple-800' : 'bg-white border-2 border-purple-50 text-deep-purple hover:bg-purple-50'}`}>
                                        {plan.cta}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlansPricing;
