import localFont from "next/font/local";
import CustomCursor from "@/components/custom-cursor";
import ScrollTopButton from "@/components/scroll-top-button";
import ThemeToggle from "@/components/theme-toggle";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-latin.woff2",
      style: "normal",
    },
    {
      path: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-latin-ext.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: [
    {
      path: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-mono-latin.woff2",
      style: "normal",
    },
    {
      path: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-mono-latin-ext.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Nafiz Alam | Portfolio",
  description:
    "A creative, responsive portfolio scaffold built with Next.js for showcasing profile details, skills, education, experience, and project case studies.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CustomCursor />
        <ThemeToggle />
        <ScrollTopButton />
        {children}
      </body>
    </html>
  );
}
