import { Helmet } from 'react-helmet-async';

const PlansPricing = ({ t }) => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Plans & Pricing | FastClass</title>
                <meta name="description" content="Choose the best plan for your learning journey with FastClass." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-deep-blue text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="relative max-w-7xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        {t.pricing?.title || "Plans & Pricing"}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light">
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
                        <p className="text-gray-600 max-w-2xl mx-auto">{t.pricing?.intro || "Explore our competitive pricing tiers designed to speed up your learning."}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Basic Plan */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-deep-blue mb-2">Basic</h3>
                                <div className="text-4xl font-bold text-gray-900 mb-6">€29<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Access to basic courses
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Community Support
                                    </li>
                                </ul>
                                <button className="w-full bg-blue-50 text-deep-blue font-bold py-3 px-4 rounded-lg hover:bg-blue-100 transition-colors">Choose Plan</button>
                            </div>
                        </div>

                        {/* Pro Plan */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-deep-blue transform md:-translate-y-4">
                            <div className="bg-deep-blue text-white text-center py-2 text-sm font-bold uppercase tracking-wider">Most Popular</div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-deep-blue mb-2">Pro</h3>
                                <div className="text-4xl font-bold text-gray-900 mb-6">€59<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        All features in Basic
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Advanced modules
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Priority Support
                                    </li>
                                </ul>
                                <button className="w-full bg-deep-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors">Choose Plan</button>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-deep-blue mb-2">Enterprise</h3>
                                <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Unlimited Access
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Dedicated Manager
                                    </li>
                                </ul>
                                <button className="w-full bg-blue-50 text-deep-blue font-bold py-3 px-4 rounded-lg hover:bg-blue-100 transition-colors">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PlansPricing;
