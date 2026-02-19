import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, image }) => {
    const siteTitle = "OM Vinayaga Associates | Building Doctor Franchise";
    const defaultDescription =
        "Your trusted partner for all building repair and maintenance needs in Madurai. Building Doctor Franchise offering waterproofing, structural repairs and construction chemicals.";
    const siteUrl = "https://omvinayagaassociates.com";
    const defaultImage = "/assets/building-doctor-icon-BoVDC8BN.png"; // Update with actual banner

    const fullTitle = title ? `${title} | OM Vinayaga Associates` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;

    return (
        <Helmet>
            {/* Visual */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={siteUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Keywords */}
            {keywords && <meta name="keywords" content={keywords} />}
        </Helmet>
    );
};

export default SEO;
