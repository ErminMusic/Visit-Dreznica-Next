/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    experimental: {
        nextScriptWorkers: true,
    },
};

export default nextConfig;
