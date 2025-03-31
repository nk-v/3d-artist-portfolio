import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env:{
    YANDEX_METRIKA_COUNTER_ID: process.env.YANDEX_METRIKA_COUNTER_ID
  }
};

export default nextConfig;
