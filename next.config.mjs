import withGoogleAdsense from 'next-google-adsense';

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    productionBrowserSourceMaps: true,
    googleAdsense: { client: 'ca-pub-8532596750508498' },
}

export default withGoogleAdsense(nextConfig);