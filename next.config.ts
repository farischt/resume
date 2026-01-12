import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Faris_Chtatou_Resume.pdf",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, noarchive",
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
