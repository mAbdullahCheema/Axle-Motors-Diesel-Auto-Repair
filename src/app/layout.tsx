import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: "Axle Motors Diesel and Auto Repair | 24/7 Mechanic in Cheyenne, WY",
  description:
    "Axle Motors Diesel and Auto Repair provides 24/7 diesel repair, auto repair, diagnostics, brakes, batteries, towing, trailer repair, and heavy-duty truck service in Cheyenne, WY.",
  keywords: [
    "diesel repair Cheyenne",
    "auto repair Cheyenne WY",
    "mechanic Cheyenne",
    "24/7 towing Cheyenne",
    "truck repair Wyoming",
    "trailer repair Cheyenne",
    "heavy duty truck repair",
    "diesel mechanic",
    "emergency auto repair",
    "Axle Motors",
  ],
  openGraph: {
    title: "Axle Motors Diesel and Auto Repair | 24/7 Mechanic in Cheyenne, WY",
    description:
      "24/7 diesel repair, auto repair, diagnostics, towing, and heavy-duty truck service in Cheyenne, WY. 4.9★ rated. Call +1 307-529-0637.",
    type: "website",
    locale: "en_US",
    siteName: "Axle Motors Diesel and Auto Repair",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Axle Motors Diesel and Auto Repair",
              description:
                "24/7 diesel repair, auto repair, diagnostics, towing, trailer repair, and heavy-duty truck service in Cheyenne, WY.",
              telephone: "+1 307-529-0637",
              address: {
                "@type": "PostalAddress",
                streetAddress: "101 Ave C #4",
                addressLocality: "Cheyenne",
                addressRegion: "WY",
                postalCode: "82007",
                addressCountry: "US",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "154",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "41.1399",
                longitude: "-104.8202",
              },
              url: "https://axlemotors.com",
            }),
          }}
        />
      </head>
      <body className="bg-metal-950 text-metal-100 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
