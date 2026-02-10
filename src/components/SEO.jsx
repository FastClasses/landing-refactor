import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, lang = 'pt' }) => {
    const siteTitle = "FastClass";

    return (
        <Helmet>
            <html lang={lang} />
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || "FastClass - Sustainability Consulting, Audit and Training."} />
            <meta name="keywords" content={keywords || "sustainability, consultancy, environment, portugal, fastclass"} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
