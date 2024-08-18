/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NEXT_PUBLIC_TEMPO) {
    nextConfig["experimental"] = {
      swcPlugins: [[require.resolve("tempo-devtools/swc"), {}]]
    }
  }

  
export default nextConfig;
