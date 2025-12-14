import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ),
      new URL(
        "https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
      ),
      new URL(
        "https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VVh8ZW58MHx8MHx8fDA%3D"
      ),
      new URL(
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VvfGVufDB8fDB8fHww"
      ),
      new URL(
        "https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFpbnRlbmFuY2V8ZW58MHx8MHx8fDA%3D"
      ),
    ],
  },
};

export default nextConfig;
