import withPWAInit from '@ducanh2912/next-pwa';


const withPWA = withPWAInit({
    dest: "public",
});


export default withPWA({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'openweathermap.org',
                port: '',
                pathname: '/img/wn/**',
            }
        ]
    } 
});
/** @type {import('next').NextConfig}
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'openweathermap.org',
                port: '',
                pathname: '/img/wn/**',
            }
        ]
    }
};

export default nextConfig;
*/