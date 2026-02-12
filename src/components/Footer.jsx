import { Link } from 'react-router-dom';

const Footer = ({ t }) => {
    return (
        <footer className="bg-white text-gray-800 py-6 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center relative">
                    <div className="mb-4 md:mb-0 text-center md:text-left z-10">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="block transform hover:scale-105 transition-transform duration-300 focus:outline-none"
                        >
                            <img src={`${import.meta.env.BASE_URL}assets/fastclass_logo.png`} alt="FastClass" className="h-14 w-auto mx-auto md:mx-0 opacity-90 transition-all duration-500 cursor-pointer" />
                        </button>
                    </div>

                    {/* Center: Contact Us Link (Absolute centered on desktop) */}
                    <div className="mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                        <Link
                            to="/contact"
                            className="text-gray-500 text-lg font-medium tracking-wide border-b border-gray-300 hover:text-deep-purple hover:border-deep-purple transition-all duration-300 pb-1"
                        >
                            {t.nav.contact}
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4 z-10">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} FastClass. All rights reserved.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
