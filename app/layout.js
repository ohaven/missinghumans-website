import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Help Bring Them Home`, template: `%s | ${site.name}` },
  description: site.tagline,
  openGraph: { title: site.name, description: site.tagline, url: site.url, siteName: site.name, type: "website" },
};

export const viewport = { themeColor: "#0b4f8a" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Source+Sans+3:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="ebar">
          If someone is in immediate danger, call <a href="tel:911">911</a> now. There is <strong>no waiting period</strong> to report a missing person.
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
