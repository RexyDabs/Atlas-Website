// app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* SEO tags, fonts, metadata, etc. */}
        <Script
          strategy="afterInteractive"
          data-domain="atlaspowersolutions.com.au"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
// This is for Tracking/Analytics with Plausible
