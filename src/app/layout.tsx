import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { SITE_URL, business } from "@/content/business";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Jsonld } from "@/components/Jsonld";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

/** Grid runs one family across the whole page. No second face arrives. */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hausmeisterservice Lahnstein & Koblenz | G.A Hausmeisterservice",
    template: `%s | ${business.name}`,
  },
  description:
    "Hausmeisterservice, Objektbetreuung, Grünpflege, Winterdienst und Entrümpelung in Lahnstein, Koblenz, Braubach und im Rhein-Lahn-Kreis. Kostenloses Angebot, Festpreis vor Arbeitsbeginn.",
  applicationName: business.name,
  authors: [{ name: business.name }],
  formatDetection: { telephone: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fcfcfd",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={archivo.variable}>
      <body>
        <Jsonld data={[localBusinessSchema(), websiteSchema()]} />
        <a className="skip-link" href="#inhalt">
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt">{children}</main>
        <SiteFooter />
        <StickyCallBar />
      </body>
    </html>
  );
}
