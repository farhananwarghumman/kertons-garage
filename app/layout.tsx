import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kerton Garage | Expert Auto Repair Services",
  description: "Professional auto repair and maintenance services. Contact us on WhatsApp for quick quotes. Engine repair, brake service, oil changes, and more.",
  keywords: ["auto repair", "car service", "garage", "mechanic", "engine repair", "brake service"],
  authors: [{ name: "Kerton Garage" }],
  openGraph: {
    title: "Kerton Garage | Expert Auto Repair Services",
    description: "Professional auto repair and maintenance services. Contact us on WhatsApp for quick quotes.",
    type: "website",
    locale: "en_US",
    url: "https://kertongarage.com",
    siteName: "Kerton Garage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerton Garage | Expert Auto Repair Services",
    description: "Professional auto repair and maintenance services. Contact us on WhatsApp for quick quotes.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Kerton Garage",
              "description": "Expert auto repair and maintenance services",
              "telephone": "+1234567890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Your City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7128",
                "longitude": "-74.0060"
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-15:00",
              "priceRange": "$$",
              "image": "https://kertongarage.com/logo.png",
              "url": "https://kertongarage.com",
              "sameAs": [
                "https://facebook.com/kertongarage",
                "https://instagram.com/kertongarage"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
