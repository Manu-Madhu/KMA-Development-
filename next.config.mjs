/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https", 
            hostname: "www.veeforu.com", 
          },
          {
            protocol: "https", 
            hostname: "storage.googleapis.com", 
          },
          
        ],
      },
};

export default nextConfig;
