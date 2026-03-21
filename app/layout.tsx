import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kertonsgarage.com"),
  title: "Kertons Garage Clonmel | Mechanic, Car Repair & Service",
  description:
    "Kertons Garage in Clonmel provides expert car repairs, servicing, diagnostics, NCT fail repairs, AC repair, battery service, and general mechanic services in Clonmel, Co. Tipperary.",
  keywords: [
    "Kertons Garage",
    "Kertons Garage Clonmel",
    "mechanic Clonmel",
    "garage Clonmel",
    "car repair Clonmel",
    "auto repair Clonmel",
    "car service Clonmel",
    "NCT fail repairs Clonmel",
    "diagnostics Clonmel",
    "battery service Clonmel",
    "AC repair Clonmel",
    "mechanic Tipperary",
    "garage Tipperary",
  ],
  authors: [{ name: "Kertons Garage" }],
  creator: "Kertons Garage",
  publisher: "Kertons Garage",
  alternates: {
    canonical: "https://kertonsgarage.com",
  },
  openGraph: {
    title: "Kertons Garage Clonmel | Mechanic, Car Repair & Service",
    description:
      "Trusted local mechanic in Clonmel for car repairs, diagnostics, maintenance, NCT fail repairs, battery service, and AC repair.",
    type: "website",
    locale: "en_IE",
    url: "https://kertonsgarage.com",
    siteName: "Kertons Garage",
    images: [
      {
        url: "/kertons-logo.png",
        width: 1200,
        height: 630,
        alt: "Kertons Garage logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kertons Garage Clonmel | Mechanic, Car Repair & Service",
    description:
      "Trusted local mechanic in Clonmel for repairs, servicing, diagnostics, and NCT fail repairs.",
    images: ["/kertons-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Kertons Garage",
    description:
      "Expert auto repair and maintenance services in Clonmel, Co. Tipperary, Ireland.",
    url: "https://kertonsgarage.com",
    image: "https://kertonsgarage.com/kertons-logo.png",
    logo: "https://kertonsgarage.com/kertons-logo.png",
    telephone: "+353876413038",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Abbey Farm, Inishlounaght",
      addressLocality: "Clonmel",
      addressRegion: "Co. Tipperary",
      postalCode: "E91 Y0C2",
      addressCountry: "IE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.3546",
      longitude: "-7.7039",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    areaServed: "Clonmel, Co. Tipperary",
    priceRange: "€€",
    sameAs: [
      "https://www.facebook.com/p/Kertons-Garage-Clonmel-100036617846871/",
      "https://www.instagram.com/kertonsgaragecarsales/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}