import type { Metadata } from "next";
import { Merriweather, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./providers/react-query-provider";
import ConditionalWrapper from "@/components/layout/ConditionalWrapper";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});
const myFont = localFont({
  src: "../public/helvetica-neue-5/HelveticaNeueRoman.otf",
  variable: "--font-helvetical",
});

export const metadata: Metadata = {
  title: "Kolanut Africa",
  description: "Insurance Made Simple, Fast And Truly African",
   openGraph: {
    title: "Kolanut Africa",
    description:
      "Insurance Made Simple, Fast And Truly African",
    images: [
      {
        url: "/meta/cover.png",
        width: 1200,
        height: 630,
        alt: "Kolanut Africa - Insurance Made Simple, Fast And Truly African",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolanut Africa",
    description:
      "Insurance Made Simple, Fast And Truly African",
    images: ["/meta/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${myFont.variable} ${plusJakartaSans.variable} antialiased font-body`}
      >
        <ReactQueryProvider>
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              classNames: {
                toast:
                  "group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-950 group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-gray-500",
                actionButton:
                  "group-[.toast]:bg-gray-900 group-[.toast]:text-gray-50",
                cancelButton:
                  "group-[.toast]:bg-gray-100 group-[.toast]:text-gray-500",
              },
            }}
          />
          <ConditionalWrapper>{children}</ConditionalWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
