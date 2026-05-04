import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/cv-ingles',

};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
