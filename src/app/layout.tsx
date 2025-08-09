import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./../styles/globals.css";

export const metadata: Metadata = {
    title: "Hack Nova - Landing Page",
    description: "Landing page for Hack Nova Web Solutions project.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/imgs/smallLogoPage.ico" />
                <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
            </head>
            <body>{children}</body>
        </html>
    );
}
