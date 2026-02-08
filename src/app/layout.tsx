import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import localFont from 'next/font/local'
import { Metadata } from "next";

import "./app.css"
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";

const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-alpino',
})

export const metadata: Metadata = {
  title: "Fizzi | Live life on the edge",
  description: "An interactive 3D landing page for Fizzi soda. Built with Next.js, React Three Fiber, and GSAP.",
  keywords: ["3D", "Web Design", "Next.js", "React Three Fiber", "GSAP", "Fizzi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

